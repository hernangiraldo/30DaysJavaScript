let msg = new SpeechSynthesisUtterance();
let voices = [];
let voicesDropdown = document.querySelector('[name="voice"]');
let options = document.querySelectorAll('[type="range"], [name="text"]');
let speakButton = document.querySelector('#speak');
let stopButton = document.querySelector('#stop');

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .filter( voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join();
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOptions() {
  msg[this.name] = this.value;
  toggle();
}

function domLoaded() {
  voicesDropdown = document.querySelector('[name="voice"]');
  options = document.querySelectorAll('[type="range"], [name="text"]');
  speakButton = document.querySelector('#speak');
  stopButton = document.querySelector('#stop');
  msg.text = document.querySelector('[name="text"]').value;

  speechSynthesis.addEventListener('voiceschanged', populateVoices)
  voicesDropdown.addEventListener('change', setVoice);
  options.forEach(option => option.addEventListener('change', setOptions));
  speakButton.addEventListener('click', toggle);
  stopButton.addEventListener('click', () => toggle(false));
}

document.addEventListener('DOMContentLoaded', domLoaded);