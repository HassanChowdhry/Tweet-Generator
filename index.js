// logic for first half of tweet

// adding class variables
const enterName = document.querySelector('.enter-name');
const enterUserName = document.querySelector('.enter-username');
const enterTweet = document.querySelector('.enter-tweet');

const prevName = document.querySelector('.name');
const prevUserName = document.querySelector('.username');
const prevTweet = document.querySelector('.message');

// functions for event listeners to change preview
function addName() {
  prevName.innerHTML = enterName.value.trim();
}

function addUserName() {
  prevUserName.innerHTML = `@${enterUserName.value.trim()}`;
}

function addTweet() {
  prevTweet.innerHTML = enterTweet.value.trim(); // TODO: contain this inside div
}

// event listeners to change prev
enterName.addEventListener('input', addName);
enterUserName.addEventListener('input', addUserName);
enterTweet.addEventListener('input', addTweet);

// second half of tweet

// adding variables for entering details part
const enterTime = document.querySelector('.enter-time');
const enterDate = document.querySelector('.enter-date'); // TODO: change format to match twitters'  
const enterUserDevice = document.querySelector('.enter-userdevice');
const enterRetweets = document.querySelector('.enter-retweets');
const enterQuotes = document.querySelector('.enter-quotes');
const enterLikes = document.querySelector('.enter-likes');

// adding variables for preview part
const prevTime = document.querySelector('.time');
const prevDate = document.querySelector('.date');
const prevUserDevice = document.querySelector('.userdevice');
const prevRetweets = document.querySelector('.retweets');
const prevQuotes = document.querySelector('.quotes');
const prevLikes = document.querySelector('.likes');

// functions for event listeners to change preview
function addTime() {
  prevTime.innerHTML = enterTime.value.trim();
}

function addDate() {
  prevDate.innerHTML = enterDate.value.trim();
}

function addUserDevice() {
  prevUserDevice.innerHTML = enterUserDevice.value.trim(); // TODO: add options to this
}

function addRetweets() {
  prevRetweets.innerHTML = enterRetweets.value.trim();
}

function addQuotes() {
  prevQuotes.innerHTML = enterQuotes.value.trim();
}

function addLikes() {
  prevLikes.innerHTML = enterLikes.value;

}

// event listeners to change prev
enterDate.addEventListener('input', addDate);
enterTime.addEventListener('input', addTime);
enterUserDevice.addEventListener('input', addUserDevice);
enterRetweets.addEventListener('input', addRetweets);
enterQuotes.addEventListener('input', addQuotes);
enterLikes.addEventListener('input', addLikes);
