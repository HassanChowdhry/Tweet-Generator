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
  // if (enterTweet.value.length % 65 === 0) {
  //   enterTweet.innerHTML = ' <br /> ';
  // }
  if (enterTweet.value.length < 200) {
    prevTweet.innerHTML = enterTweet.value.trim(); 
  }
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
const enterOtherUserDevice = document.querySelector('.enter-other-userdevice');

const otherUserDeviceDiv = document.querySelector('.other-userdevice');

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
  if (enterUserDevice.value !== 'Other') {
    otherUserDeviceDiv.style.visibility = 'hidden';
    otherUserDeviceDiv.style.position = 'absolute';
    prevUserDevice.innerHTML = enterUserDevice.value.trim();
  
  } else {
    otherUserDeviceDiv.style.visibility = 'visible';
    otherUserDeviceDiv.style.position = 'relative';

    enterOtherUserDevice.addEventListener('input', () => {
      prevUserDevice.innerHTML = enterOtherUserDevice.value.trim();
    });

  }
}

function addRetweets() {
  prevRetweets.innerHTML = enterRetweets.value.trim();
}

function addQuotes() {
  prevQuotes.innerHTML = enterQuotes.value.trim();
}

function addLikes() {
  prevLikes.innerHTML = enterLikes.value.trim();

}

// event listeners to change prev
enterDate.addEventListener('input', addDate);
enterTime.addEventListener('input', addTime);
enterUserDevice.addEventListener('input', addUserDevice);
enterRetweets.addEventListener('input', addRetweets);
enterQuotes.addEventListener('input', addQuotes);
enterLikes.addEventListener('input', addLikes);

// Button logic 

// calling them
const verifiedButton = document.querySelector('.verified');
const uploadPfpButton = document.querySelector('.upload');
const removePfpButton = document.querySelector('.remove');

const verifiedBadge = document.querySelector('.verified-badge');
const uploadPfpInput = document.querySelector('#pfp-id');
const prevPfp = document.querySelector('.pfp-image');

function addVerifiedLogo() {
// could use ternary?? This makes it more simple imo
  if (verifiedBadge.style.visibility === 'visible') {
    verifiedBadge.style.visibility = 'hidden';

  } else {
    verifiedBadge.style.visibility = 'visible';
  }
}

function uploadPfp() {
  uploadPfpInput.click();
  
  uploadPfpInput.onchange = () => {
    const [file] = uploadPfpInput.files;
    if (file) {
      prevPfp.src = URL.createObjectURL(file);
    }
  };
}

function removePfp() {
  prevPfp.src = 'GeneratorFigma/avatar.jpg';
}

verifiedButton.addEventListener('click', addVerifiedLogo);
uploadPfpButton.addEventListener('click', uploadPfp);
removePfpButton.addEventListener('click', removePfp);
