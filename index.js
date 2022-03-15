/* eslint-disable no-undef */
//! logic for first half of tweet

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
  if (enterTweet.value.length < 200) {
    prevTweet.innerHTML = enterTweet.value.trim();
  }
}

// event listeners to change prev
enterName.addEventListener('input', addName);
enterUserName.addEventListener('input', addUserName);
enterTweet.addEventListener('input', addTweet);

//! second half of tweet

// adding variables for entering details part
const enterTime = document.querySelector('.enter-time');
const enterDate = document.querySelector('.enter-date');
const enterUserDevice = document.querySelector('.enter-userdevice');
const enterRetweets = document.querySelector('.enter-retweets');
const enterQuotes = document.querySelector('.enter-quotes');
const enterLikes = document.querySelector('.enter-likes');
const enterOtherUserDevice = document.querySelector('.enter-other-userdevice');

const otherUserDeviceDiv = document.querySelector('.other-userdevice');
const retweetsDiv = document.querySelector('.retweet-div');
const quotesDiv = document.querySelector('.quotes-div');
const likesDiv = document.querySelector('.likes-div');

// adding variables for preview part
const prevTime = document.querySelector('.time');
const prevDate = document.querySelector('.date');
const prevUserDevice = document.querySelector('.userdevice');
const prevRetweets = document.querySelector('.retweets');
const prevQuotes = document.querySelector('.quotes');
const prevLikes = document.querySelector('.likes');

// functions for event listeners to change preview
function addTime() {
  let timeArray = enterTime.value;
  timeArray = timeArray.split(':');

  //* changes to 12 hour format
  let hour = timeArray[0];

  if (hour === '12') {
    prevTime.innerHTML = `12:${timeArray[1]} pm`;

  } else if (hour === '00') {
    prevTime.innerHTML = `12:${timeArray[1]} am`;

  } else if (hour > '12') {
    timeArray[0] = Math.abs(12 - hour);
    prevTime.innerHTML = `${timeArray[0]}:${timeArray[1]} pm`;

  } else {
    if (hour.charAt(0) === '0') {
      timeArray[0] = hour.slice(1, 2);
    }

    prevTime.innerHTML = `${timeArray[0]}:${timeArray[1]} am`;
  }
}

/**
 * ? could use switch case
 * @param {Any[]} dateArray
 * @returns {Any[]}
 */
function monthNumberToWord(dateArray) {
  let dateMonth = dateArray[1];

  if (dateMonth === '01') {
    dateArray[1] = 'Jan';

  } else if (dateMonth === '02') {
    dateArray[1] = 'Feb';

  } else if (dateMonth === '03') {
    dateArray[1] = 'Mar';

  } else if (dateMonth === '04') {
    dateArray[1] = 'Apr';

  } else if (dateMonth === '05') {
    dateArray[1] = 'May';

  } else if (dateMonth === '06') {
    dateArray[1] = 'Jun';

  } else if (dateMonth === '07') {
    dateArray[1] = 'Jul';

  } else if (dateMonth === '08') {
    dateArray[1] = 'Aug';

  } else if (dateMonth === '09') {
    dateArray[1] = 'Sep';

  } else if (dateMonth === '10') {
    dateArray[1] = 'Oct';

  } else if (dateMonth === '11') {
    dateArray[1] = 'Nov';

  } else if (dateMonth === '12') {
    dateArray[1] = 'Dec';
  }
  return dateArray;
}

function addDate() {
  let dateArray = enterDate.value;
  dateArray = dateArray.split('-');
  dateArray = monthNumberToWord(dateArray);
  dateArray[0] = dateArray[0].slice(2, 4); //* removes first two numbers from years

  prevDate.innerHTML = `${dateArray[2]} ${dateArray[1]} ${dateArray[0]}`;
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
  if (enterRetweets.value.trim() === '0') {
    retweetsDiv.style.visibility = 'hidden';
    retweetsDiv.style.position = 'absolute';

  } else {
    retweetsDiv.style.visibility = 'visible';
    retweetsDiv.style.position = 'relative';
    prevRetweets.innerHTML = enterRetweets.value.trim();
  }
}

function addQuotes() {
  if (enterQuotes.value.trim() === '0') {
    quotesDiv.style.visibility = 'hidden';
    quotesDiv.style.position = 'absolute';

  } else {
    quotesDiv.style.visibility = 'visible';
    quotesDiv.style.position = 'relative';
    prevQuotes.innerHTML = enterQuotes.value.trim();
  }
}

function addLikes() {
  if (enterLikes.value.trim() === '0') {
    likesDiv.style.visibility = 'hidden';
    likesDiv.style.position = 'absolute';

  } else {
    likesDiv.style.visibility = 'visible';
    likesDiv.style.position = 'relative';
    prevLikes.innerHTML = enterLikes.value.trim();
  }

}

// event listeners to change prev
enterDate.addEventListener('input', addDate);
enterTime.addEventListener('input', addTime);
enterUserDevice.addEventListener('input', addUserDevice);
enterRetweets.addEventListener('input', addRetweets);
enterQuotes.addEventListener('input', addQuotes);
enterLikes.addEventListener('input', addLikes);

//! Button logic 

// calling them
const verifiedButton = document.querySelector('.verified');
const uploadPfpButton = document.querySelector('.upload');
const removePfpButton = document.querySelector('.remove');

const verifiedBadge = document.querySelector('.verified-badge');
const uploadPfpInput = document.querySelector('#pfp-id');
const prevPfp = document.querySelector('.pfp-image');

function addVerifiedLogo() {

  if (verifiedBadge.style.visibility === 'visible') {
    verifiedButton.style.background = '#fff';
    verifiedButton.style.color = '#000';

    verifiedBadge.style.visibility = 'hidden';

  } else {
    verifiedButton.style.background = '#000';
    verifiedButton.style.color = '#fff';

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

// ? fix tainted promises issue
// function save() {
//   alert('hello');
//   html2canvas(document.querySelector('#widget')).then((canvas) => {
//     // Export canvas as a blob 
//     canvas.toBlob((blob) => {
//       // Generate file download
//       window.saveAs(blob, 'yourwebsite_screenshot.png');
//     });
//   });
// }

// function save() {
//   html2canvas(document.querySelector('#widget')).then((canvas) => {
//     // Export the canvas to its data URI representation
//     let base64image = canvas.toDataURL('image/png');

//     // Open the image in a new window
//     window.open(base64image, '_blank');
//   });
// }
