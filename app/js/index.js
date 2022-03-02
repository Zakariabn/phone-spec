"use strict";

const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");


// spinner
const spinner = document.getElementById('spinner');
const spinnerToggle =  value=> {
  if (value === true) {
    
  }
  else {
    spinner.style.display = 'none';
  }
}
spinnerToggle(true);
window.addEventListener('DOMContentLoaded', () => {
  spinnerToggle(false);
});

searchBtn.addEventListener("click", () => {
  spinnerToggle(true);
  const searchText = searchInput.value.toLowerCase();
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

  // this error is for input value validation
  const errorMsgInput = document.getElementById('error-msg-for-input');

  if (searchInput.value === '' || searchInput.value.length <= 0) {
    errorMsgInput.style.display = 'block';
    errorMsgInput.innerText = 'Please give valid inputs'
    spinnerToggle(false);
  } 
  else {
    errorMsgInput.style.display = 'none';
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => searchResult(data));
      
  }
});

// this variable for showing all phone
const showAll = document.getElementById("btn-show-all");
showAll.style.display = "none";

// this is 
const resultDisplaySec = document.getElementById('search-result-sec-id');
resultDisplaySec.style.display = 'none';




const searchResult = (data) => {
  const resultDisplay = document.getElementById("result-display");
  resultDisplay.textContent = "";

  resultDisplaySec.style.display = 'flex';
  console.log(data);

  const errorMsg = document.getElementById('error-msg');


  if (data.status === false) {
    errorMsg.style.display = 'block'
    showAll.style.display = "none";
    spinnerToggle(false);
  }
  else {
    errorMsg.style.display = 'none';

    data.data.forEach((phone) => {
      const div = document.createElement("div");
      div.classList.add("card");
      let releaseInfo =
        phone.release_date === undefined ? "No data found" : phone.release_date;
  
      div.innerHTML = `
      <div class="card-body">
        <div class="card-visual">
          <img src="${phone.image}" alt="" class="card-image">
        </div>
  
        <div class="card-content">
  
          <div class="title-text-container">
            <h4 class="product-name">Product name: ${phone.phone_name}</h4>
          </div>
  
          <p class="brand-name">Brand: ${phone.brand}</p>
          <a href="#phone-details-display"><button class="card-btn" onClick= 'displayDetails("${phone.slug}")'>Details</button></a>
        </div>
      </div>
      `;
  
      if (resultDisplay.childElementCount > 19) {
        showAll.style.display = "block";
        showAll.addEventListener("click", () => {
          resultDisplay.appendChild(div);
          showAll.style.display = "none";
          spinnerToggle(false);
        });
      } else {
        resultDisplay.appendChild(div);
        spinnerToggle(false);
      }
    });
  };

  }
  

function displayDetails(id) {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;

  const phoneDetailsSec = document.getElementById('phone-details-display');
  phoneDetailsSec.textContent = '';
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const phone = data.data;

      phoneDetailsSec.style.display = 'block'
      const div = document.createElement('div');
      div.classList.add("phone-details-card");

      const releaseDate = phone.releaseDate === undefined ? 'Data-not-found' : phone.releaseDate;

      div.innerHTML = `
      <span class="cross-btn">
      <i class="fa-solid fa-xmark" id="cross-btn-phone-details"></i>
      </span>

    <header>
      <h1><span class="brand">${phone.brand}</span> ${phone.name}</h1>
    </header>

    <div class="phone-info">
      <div class="phone-image-container" style="overflow: hidden">
        <img
          src="${phone.image}"
          alt=""
          class="phone-image"
        />
      </div>
      <div class="other-feather">
        <div class="info-1">
          <h3 class="">Release date</h3>
          <p class="release-date">${phone.releaseDate}</p>

          <p><i class="fa-brands fa-bluetooth"></i> Bluetooth: ${phone.others.Bluetooth}</p>
          <p><i class="fa-solid fa-wifi"></i> ${phone.others.WLAN}</p>
          <p><i class="fa-brands fa-usb"></i>${phone.others.USB}</p>
        </div>
        <div class="info-2">
          <i class="fa-solid fa-wave-square"></i>
          <h4>Sensors</h4>
          <p><i class="fa-solid fa-angle-right"></i> ${phone.mainFeatures.sensors[0]}</p>
          <p><i class="fa-solid fa-angle-right"></i> ${phone.mainFeatures.sensors[1]}</p>
          <p><i class="fa-solid fa-angle-right"></i> ${phone.mainFeatures.sensors[2]}</p>
          <p><i class="fa-solid fa-angle-right"></i> ${phone.mainFeatures.sensors[3]}</p>
        </div>
      </div>

      <div>
        <div class="main-feather">
          <div>
            <i class="fa-solid fa-microchip"></i>
            <h4>Processor</h4>
            <p>${phone.mainFeatures.chipSet}</p>
          </div>
          <div>
            <i class="fa-solid fa-mobile-screen-button"></i>
            <h4>Display</h4>
            <p>${phone.mainFeatures.displaySize}</p>
          </div>
          <div>
            <i class="fa-solid fa-sd-card"></i>
            <h4>Memory</h4>
            <p>${phone.mainFeatures.storage}</p>
          </div>
        </div>
      </div>
    </div>
    `;
      phoneDetailsSec.appendChild(div);

      const crossBtn = document.getElementById('cross-btn-phone-details');
      crossBtn.addEventListener('click', () => {
        phoneDetailsSec.style.display = 'none';
      })

    });
}
"use strict";

const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");


// spinner
const spinner = document.getElementById('spinner');
const spinnerToggle =  value=> {
  if (value === true) {
    
  }
  else {
    spinner.style.display = 'none';
  }
}
spinnerToggle(true);
window.addEventListener('DOMContentLoaded', () => {
  spinnerToggle(false);
});

searchBtn.addEventListener("click", () => {
  spinnerToggle(true);
  const searchText = searchInput.value.toLowerCase();
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

  // this error is for input value validation
  const errorMsgInput = document.getElementById('error-msg-for-input');

  if (searchInput.value === '' || searchInput.value.length <= 0) {
    errorMsgInput.style.display = 'block';
    errorMsgInput.innerText = 'Please give valid inputs'
    spinnerToggle(false);
  } 
  else {
    errorMsgInput.style.display = 'none';
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => searchResult(data));
      
  }
});

// this variable for showing all phone
const showAll = document.getElementById("btn-show-all");
showAll.style.display = "none";

// this is 
const resultDisplaySec = document.getElementById('search-result-sec-id');
resultDisplaySec.style.display = 'none';




const searchResult = (data) => {
  const resultDisplay = document.getElementById("result-display");
  resultDisplay.textContent = "";

  resultDisplaySec.style.display = 'flex';
  console.log(data);

  const errorMsg = document.getElementById('error-msg');


  if (data.status === false) {
    errorMsg.style.display = 'block'
    showAll.style.display = "none";
    spinnerToggle(false);
  }
  else {
    errorMsg.style.display = 'none';

    data.data.forEach((phone) => {
      const div = document.createElement("div");
      div.classList.add("card");
      let releaseInfo =
        phone.release_date === undefined ? "No data found" : phone.release_date;
  
      div.innerHTML = `
      <div class="card-body">
        <div class="card-visual">
          <img src="${phone.image}" alt="" class="card-image">
        </div>
  
        <div class="card-content">
  
          <div class="title-text-container">
            <h4 class="product-name">Product name: ${phone.phone_name}</h4>
          </div>
  
          <p class="brand-name">Brand: ${phone.brand}</p>
          <a href="#phone-details-display"><button class="card-btn" onClick= 'displayDetails("${phone.slug}")'>Details</button></a>
        </div>
      </div>
      `;
  
      if (resultDisplay.childElementCount > 19) {
        showAll.style.display = "block";
        showAll.addEventListener("click", () => {
          resultDisplay.appendChild(div);
          showAll.style.display = "none";
          spinnerToggle(false);
        });
      } else {
        resultDisplay.appendChild(div);
        spinnerToggle(false);
      }
    });
  };

  }
  

function displayDetails(id) {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;

  const phoneDetailsSec = document.getElementById('phone-details-display');
  phoneDetailsSec.textContent = '';
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const phone = data.data;

      phoneDetailsSec.style.display = 'block'
      const div = document.createElement('div');
      div.classList.add("phone-details-card");

      const releaseDate = phone.releaseDate === undefined ? 'Data-not-found' : phone.releaseDate;

      div.innerHTML = `
      <span class="cross-btn">
      <i class="fa-solid fa-xmark" id="cross-btn-phone-details"></i>
      </span>

    <header>
      <h1><span class="brand">${phone.brand}</span> ${phone.name}</h1>
    </header>

    <div class="phone-info">
      <div class="phone-image-container" style="overflow: hidden">
        <img
          src="${phone.image}"
          alt=""
          class="phone-image"
        />
      </div>
      <div class="other-feather">
        <div class="info-1">
          <h3 class="">Release date</h3>
          <p class="release-date">${phone.releaseDate}</p>

          <p><i class="fa-brands fa-bluetooth"></i> Bluetooth: ${phone.others.Bluetooth}</p>
          <p><i class="fa-solid fa-wifi"></i> ${phone.others.WLAN}</p>
          <p><i class="fa-brands fa-usb"></i>${phone.others.USB}</p>
        </div>
        <div class="info-2">
          <i class="fa-solid fa-wave-square"></i>
          <h4>Sensors</h4>
          <p><i class="fa-solid fa-angle-right"></i> ${phone.mainFeatures.sensors[0]}</p>
          <p><i class="fa-solid fa-angle-right"></i> ${phone.mainFeatures.sensors[1]}</p>
          <p><i class="fa-solid fa-angle-right"></i> ${phone.mainFeatures.sensors[2]}</p>
          <p><i class="fa-solid fa-angle-right"></i> ${phone.mainFeatures.sensors[3]}</p>
        </div>
      </div>

      <div>
        <div class="main-feather">
          <div>
            <i class="fa-solid fa-microchip"></i>
            <h4>Processor</h4>
            <p>${phone.mainFeatures.chipSet}</p>
          </div>
          <div>
            <i class="fa-solid fa-mobile-screen-button"></i>
            <h4>Display</h4>
            <p>${phone.mainFeatures.displaySize}</p>
          </div>
          <div>
            <i class="fa-solid fa-sd-card"></i>
            <h4>Memory</h4>
            <p>${phone.mainFeatures.storage}</p>
          </div>
        </div>
      </div>
    </div>
    `;
      phoneDetailsSec.appendChild(div);

      const crossBtn = document.getElementById('cross-btn-phone-details');
      crossBtn.addEventListener('click', () => {
        phoneDetailsSec.style.display = 'none';
      })

    });
}
