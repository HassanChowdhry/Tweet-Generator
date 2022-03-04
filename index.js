const enterName = document.querySelector('.enter-name');
const prevName = document.querySelector('.name');

const enterUserName = document.querySelector('.enter-username');
const prevUserName = document.querySelector('.username');

const enterTweet = document.querySelector('.enter-tweet');
const prevTweet = document.querySelector('.message');

function addName() {
  prevName.innerHTML = enterName.value.trim();
}

function addUserName() {
  prevUserName.innerHTML = `@${enterUserName.value.trim()}`;
}

function addTweet() {
  prevTweet.innerHTML = enterTweet.value.trim(); // TODO: contain this inside div
}

enterName.addEventListener('input', addName);
enterUserName.addEventListener('input', addUserName);
enterTweet.addEventListener('input', addTweet);

// TODO: add all other inputs tmmrw
