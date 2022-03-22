/* eslint-disable no-undef */
//* calling input values
const enterName = document.querySelector('.enter-name');
const enterUserName = document.querySelector('.enter-username');
const enterTweet = document.querySelector('.enter-tweet');
const enterTime = document.querySelector('.enter-time');
const enterDate = document.querySelector('.enter-date');
const enterUserDevice = document.querySelector('.enter-userdevice');
const enterRetweets = document.querySelector('.enter-retweets');
const enterQuotes = document.querySelector('.enter-quotes');
const enterLikes = document.querySelector('.enter-likes');
const enterOtherUserDevice = document.querySelector('.enter-other-userdevice');

//* calling preview to display user input
const prevName = document.querySelector('.name');
const prevUserName = document.querySelector('.username');
const prevTweet = document.querySelector('.message');
const prevTime = document.querySelector('.time');
const prevDate = document.querySelector('.date');
const prevUserDevice = document.querySelector('.userdevice');
const prevRetweets = document.querySelector('.retweets');
const prevQuotes = document.querySelector('.quotes');
const prevLikes = document.querySelector('.likes');

//* to display number of letters in user input
const nameCharactersCount = document.querySelector('.name-characters');
const userNameCharactersCount = document.querySelector('.username-characters');
const tweetCharactersCount = document.querySelector('.tweet-characters');
const userDeviceCharactersCount = document.querySelector('.userdevice-characters');

//* used to hide user device input until other is called
const otherUserDeviceDiv = document.querySelector('.other-userdevice-div');

//* used to hide stats on preview incase of input "0"
const retweetsDiv = document.querySelector('.retweet-div');
const quotesDiv = document.querySelector('.quotes-div');
const likesDiv = document.querySelector('.likes-div');

//* adding error messages for invalid inputs 
// ? could make these into tooltips
const nameInvalidText = document.querySelector('.invalid-name');
const userNameInvalidText = document.querySelector('.invalid-username');
const tweetInvalidText = document.querySelector('.invalid-tweet');
const userDeviceInvalidText = document.querySelector('.invalid-userdevice');
const quotesInvalidText = document.querySelector('.invalid-quotes');
const likesInvalidText = document.querySelector('.invalid-likes');
const retweetsInvalidText = document.querySelector('.invalid-retweets');

//* calling buttons
const verifiedButton = document.querySelector('.verified');
const uploadPfpButton = document.querySelector('.upload');
const removePfpButton = document.querySelector('.remove');

//* used to add verified badge and pfp in preview
const lightBadge = document.querySelector('.verified-light');
const darkBadge = document.querySelector('.verified-dark');
const uploadPfpInput = document.querySelector('#pfp-id');
const prevPfp = document.querySelector('.pfp-image');

//*
const lightMode = document.querySelector('.light');
const darkMode = document.querySelector('.dark');
const previewContainer = document.querySelector('.prev-container');
const changeColorArray = document.querySelectorAll('.change-color');

//! functions for event listeners to change preview

function hide(name) {
  name.style.visibility = 'hidden';
  name.style.position = 'absolute';
}

function show(name) {
  name.style.visibility = 'visible';
  name.style.position = 'relative';
}

function addVerifiedLogo() {

  if (lightMode.checked) {

    if (lightBadge.style.visibility === 'visible') {
      verifiedButton.style.background = '#fff';
      verifiedButton.style.color = '#000';

      hide(lightBadge);
    
    } else {
      verifiedButton.style.background = '#000';
      verifiedButton.style.color = '#fff';

      show(lightBadge);    
      hide(darkBadge);
    }
  
  } else if (darkMode.checked) {

    if (darkBadge.style.visibility === 'visible') {
      verifiedButton.style.background = '#fff';
      verifiedButton.style.color = '#000';

      hide(darkBadge);
    
    } else {
      verifiedButton.style.background = '#000';
      verifiedButton.style.color = '#fff';

      show(darkBadge);
      hide(lightBadge);
    }
  }
}

function addName() {
  let nameLength = enterName.value.length;

  if (nameLength <= 25) {
    prevName.innerHTML = enterName.value.trim();
    nameCharactersCount.innerHTML = `${nameLength}/25 characters`;
    
    if (enterName.classList.contains('is-invalid')) {
      enterName.classList.remove('is-invalid');

      hide(nameInvalidText);
    }

  } else {
    enterName.classList.add('is-invalid');
    show(nameInvalidText);
    
    enterName.value = enterName.value.slice(0, 26);
  }

}

function addUserName() {
  let userNameLength = enterUserName.value.length;

  if (userNameLength <= 25) {
    prevUserName.innerHTML = `@${enterUserName.value.trim()}`;
    userNameCharactersCount.innerHTML = `${userNameLength}/25 characters`;

    if (enterUserName.classList.contains('is-invalid')) {
      enterUserName.classList.remove('is-invalid');
     
      hide(userNameInvalidText);
    }

  } else {
    enterUserName.classList.add('is-invalid');
    show(userDeviceInvalidText);

    enterUserName.value = enterUserName.value.slice(0, 26);

  }

}

function addTweet() {
  let tweetLength = enterTweet.value.length;

  if (tweetLength <= 280) {
    prevTweet.innerHTML = enterTweet.value;
    tweetCharactersCount.innerHTML = `${tweetLength}/280 characters`;

    if (enterTweet.classList.contains('is-invalid')) {
      enterTweet.classList.remove('is-invalid');
      
      hide(tweetInvalidText);
    }

  } else {
    enterTweet.classList.add('is-invalid');
    show(tweetInvalidText);

    enterTweet.value = enterTweet.value.slice(0, 281);

  }

  // TODO: make it href for hashtag and @
}

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
 * * used to change format of date to match twitters
 * ? could use switch case
 * @param {string[]} dateArray
 * @returns {string[]}
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

  prevDate.innerHTML = `${dateArray[2]} ${dateArray[1]} ${dateArray[0]}`; //* from year/mon/day to day/month/year
}

function addUserDevice() {
  if (enterUserDevice.value !== 'Other') {
    hide(otherUserDeviceDiv);
    
    prevUserDevice.innerHTML = enterUserDevice.value.trim();

  } else {
    show(otherUserDeviceDiv);
    
    //* input for custom user device  
    enterOtherUserDevice.addEventListener('input', () => {
      if (enterOtherUserDevice.value.length <= 50) {
        prevUserDevice.innerHTML = enterOtherUserDevice.value.trim();
        userDeviceCharactersCount.innerHTML = `${enterOtherUserDevice.value.length}/50 characters`;

        if (enterOtherUserDevice.classList.contains('is-invalid')) {
          enterOtherUserDevice.classList.remove('is-invalid');

          hide(userDeviceInvalidText);
        }

      } else {
        enterOtherUserDevice.classList.add('is-invalid');
        show(userDeviceInvalidText);

        enterOtherUserDevice.value = enterOtherUserDevice.value.slice(0, 51);
      }
    });

  }
}
/**
 * *Add k,m,b to number
 * @param {string} num 
 * @returns {string}
 */
function reduceNumToPrefix(num) {
  if (num.length > 9) {
    num = `${num.slice(0, 1)}.${num.slice(1, 4)}`;
    return `${num}b`;
  }
  if (num.length > 6) {
    if (num.length === 7) {
      num = `${num.slice(0, 1)}.${num.slice(1, 2)}`;
    }
    if (num.length === 8) {
      num = `${num.slice(0, 2)}.${num.slice(2, 3)}`;
    }
    if (num.length === 9) {
      num = `${num.slice(0, 3)}.${num.slice(3, 4)}`;
    }
    return `${num}m`;
  }

  if (num.length > 3) {
    if (num.length === 4) {
      num = `${num.slice(0, 1)}.${num.slice(1, 2)}`;
    }
    if (num.length === 5) {
      num = `${num.slice(0, 2)}.${num.slice(2, 3)}`;
    }
    if (num.length === 6) {
      num = `${num.slice(0, 3)}.${num.slice(3, 4)}`;
    }
    return `${num}k`;
  }
  
  return num;
}

function addRetweets() {
  let isNum = /^\d+$/.test(enterRetweets.value);

  if (!isNum) {
    enterRetweets.classList.add('is-invalid');
    show(retweetsInvalidText);

    enterRetweets.value = enterRetweets.value.slice(0, enterRetweets.value.length - 1);
  
  } else if (enterRetweets.value.slice(0, 1) === '0') {
    hide(retweetsDiv);
    
    if (enterRetweets.classList.contains('is-invalid')) {
      enterRetweets.classList.remove('is-invalid');
    
      hide(retweetsInvalidText);
    }

  } else {
    show(retweetsDiv);
    
    let reduceNum = reduceNumToPrefix(enterRetweets.value.trim());
    prevRetweets.innerHTML = reduceNum;
    
    if (enterRetweets.classList.contains('is-invalid')) {
      enterRetweets.classList.remove('is-invalid');

      hide(retweetsInvalidText);
    }
  }
}

function addQuotes() {
  let isNum = /^\d+$/.test(enterQuotes.value);

  if (!isNum) {
    enterQuotes.classList.add('is-invalid');
    show(quotesInvalidText);
    
    enterQuotes.value = enterQuotes.value.slice(0, enterQuotes.value.length - 1);
  
  } else if (enterQuotes.value.slice(0, 1) === '0') {
    hide(quotesDiv);
   
    if (enterQuotes.classList.contains('is-invalid')) {
      enterQuotes.classList.remove('is-invalid');
     
      hide(quotesInvalidText);
    }

  } else {
    show(quotesDiv);

    let reduceNum = reduceNumToPrefix(enterQuotes.value.trim());
    prevQuotes.innerHTML = reduceNum;

    if (enterQuotes.classList.contains('is-invalid')) {
      enterQuotes.classList.remove('is-invalid');

      hide(quotesInvalidText);
    }
  }
}

function addLikes() {
  let isNum = /^\d+$/.test(enterLikes.value);

  if (!isNum) {
    enterLikes.classList.add('is-invalid');
    show(likesInvalidText);
  
    enterLikes.value = enterLikes.value.slice(0, enterLikes.value.length - 1);
 
  } else if (enterLikes.value.slice(0, 1) === '0') {
    hide(likesDiv);
    
    if (enterLikes.classList.contains('is-invalid')) {
      enterLikes.classList.remove('is-invalid');
      
      hide(likesInvalidText);
    }

  } else {
    show(likesDiv);

    let reduceNum = reduceNumToPrefix(enterLikes.value.trim());
    prevLikes.innerHTML = reduceNum;
    
    if (enterLikes.classList.contains('is-invalid')) {
      enterLikes.classList.remove('is-invalid');

      hide(likesInvalidText);
    }
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

function save() {
  let div = document.getElementById('widget');
  html2canvas(div).then(
    (canvas) => {
      document
        .getElementById('output')
        .appendChild(canvas);
    },
  );
}

function changeToLightMode() {

  if (darkBadge.style.visibility === 'visible') {
    addVerifiedLogo();
  }

  previewContainer.style.backgroundColor = '#fff';
  previewContainer.style.color = '#000';
  
  changeColorArray.forEach((element) => {
    element.style.color = '#000';
  });
}

function changeToDarkMode() {
  if (lightBadge.style.visibility === 'visible') {
    addVerifiedLogo();
  }
  previewContainer.style.backgroundColor = '#000';
  previewContainer.style.color = '#E7E9EA';
  
  changeColorArray.forEach((element) => {
    element.style.color = '#71767B';
  });
}

//! all event listeners
enterName.addEventListener('input', addName);
enterUserName.addEventListener('input', addUserName);
enterTweet.addEventListener('input', addTweet);
enterDate.addEventListener('input', addDate);
enterTime.addEventListener('input', addTime);
enterUserDevice.addEventListener('input', addUserDevice);
enterRetweets.addEventListener('input', addRetweets);
enterQuotes.addEventListener('input', addQuotes);
enterLikes.addEventListener('input', addLikes);
        
verifiedButton.addEventListener('click', addVerifiedLogo);
uploadPfpButton.addEventListener('click', uploadPfp);
removePfpButton.addEventListener('click', removePfp);

lightMode.addEventListener('click', changeToLightMode);
darkMode.addEventListener('click', changeToDarkMode);
