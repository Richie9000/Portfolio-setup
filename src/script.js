// Responsive menu
const menu = document.querySelector('.overlay');

function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

menu.addEventListener('click', openNav);
menu.addEventListener('click', closeNav);

// Pop up
const projects = [
  {
    name: 'To do list',
    feature: 'Simple to do list',
    background: 'Front End Dev',
    year: '2015',
    image: './img/todolist.png',
    description:'Simple HTML list of To Do tasks, Set up the project with webpack.',
    tag1: 'html',
    tag2: 'css',
    tag3: 'javascript',
    tag4: 'github',
    tag5: 'webpack',
    tag6: 'jest',
    linkLive: 'https://richie9000.github.io/To-do-list/',
    linkSource: 'https://richie9000.github.io/To-do-list/',
  },
  {
    name: 'Videos',
    feature: ' Youtube broswer web app, created in react. ',
    background: 'Front end Dev',
    year: '2022',
    image: './img/snapshot.png',
    description: "Experimental web app created in React (using class components), user can write a word in the search bar and the app we will render a list of videos related with that word.",
    tag3: 'javascript', 
    linkLive: 'https://richie9000.github.io/Portfolio-setup/',
    linkSource: 'https://richie9000.github.io/Portfolio-setup/',
  },
  {
    name: 'Pics',
    feature: 'Searxh web app of images',
    background: 'Front end Dev',
    year: '2022',
    image: 'img/snapshot2.png',
    description:
      "Simple web app created in React (using class components), user can write a word in the search bar and the app we will render a list of images related with that word.",
    tag1: 'html',
    tag2: 'css',
    tag3: 'javascript',
    linkLive: 'https://richie9000.github.io/Portfolio-setup/',
    linkSource: 'https://richie9000.github.io/Portfolio-setup/',
  },
  {
    name: '3D house MDVR',
    feature: 'House deploy in decentraland',
    background: 'Lead Developer',
    year: '2022',
    image: 'img/facebook-360-project.svg',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    tag1: 'html',
    tag2: 'css',
    tag3: 'javascript',
    linkLive: 'https://richie9000.github.io/Portfolio-setup/',
    linkSource: 'https://richie9000.github.io/Portfolio-setup/',
  },
];

const ulContainer = document.querySelector('.works');

for (let i = 0; i < projects.length; i += 1) {
  const liCard = document.createElement('li');
  liCard.className = 'card-w1';
  ulContainer.appendChild(liCard);
  const divLi = document.createElement('div');
  divLi.className = 'card-img';
  liCard.appendChild(divLi);
  const divImg = document.createElement('div');
  divImg.className = 'image-section';
  divLi.appendChild(divImg);
  const aLi = document.createElement('a');
  aLi.href = '#';
  divImg.appendChild(aLi);
  const imgLi = document.createElement('img');
  imgLi.src = projects[i].image;
  aLi.appendChild(imgLi);
  const divLiCard = document.createElement('div');
  divLiCard.className = 'card-text';
  liCard.appendChild(divLiCard);
  const divLiProject = document.createElement('div');
  divLiProject.className = 'project';
  divLiCard.appendChild(divLiProject);
  const divLiPTitle = document.createElement('div');
  divLiPTitle.className = 'titlep1';
  divLiProject.appendChild(divLiPTitle);
  const h2Title = document.createElement('h2');
  h2Title.innerHTML = projects[i].name;
  divLiPTitle.appendChild(h2Title);
  const ulDescription = document.createElement('ul');
  ulDescription.className = 'description';
  divLiProject.appendChild(ulDescription);
  let snipLi = document.createElement('li');
  snipLi.className = 'snip1';
  ulDescription.appendChild(snipLi);
  snipLi = document.createElement('li');
  snipLi.className = 'snip2';
  ulDescription.appendChild(snipLi);
  snipLi = document.createElement('li');
  snipLi.className = 'snip3';
  ulDescription.appendChild(snipLi);
  const paraDiv = document.createElement('div');
  paraDiv.className = 'para';
  divLiCard.appendChild(paraDiv);
  const para = document.createElement('p');
  para.textContent = projects[i].description;
  paraDiv.appendChild(para);
  const ulIcons = document.createElement('ul');
  ulIcons.className = 'icons2';
  divLiCard.appendChild(ulIcons);
  let liIconsCard = document.createElement('li');
  liIconsCard.textContent = projects[i].tag1;
  ulIcons.appendChild(liIconsCard);
  liIconsCard = document.createElement('li');
  liIconsCard.textContent = projects[i].tag2;
  ulIcons.appendChild(liIconsCard);
  liIconsCard = document.createElement('li');
  liIconsCard.textContent = projects[i].tag3;
  ulIcons.appendChild(liIconsCard);
  const cardButton = document.createElement('button');
  cardButton.type = 'button';
  cardButton.className = 'btn btn-transition popup-btn';
  cardButton.textContent = 'See project';
  divLiCard.appendChild(cardButton);
}

const containerPopup = document.querySelector('.popup');
const openPopup = document.querySelectorAll('.popup-btn');

const contentPopup = `<div class="popwrap">
<img src="./img/Disabled.png" class="popupclose" alt="Image">
<div class="titlep1 popup-title">
  <h2>${projects[0].name}</h2>

</div>
<ul class="description">
  <li class="snip1">${projects[0].feature}</li>
  <li class="snip2">• ${projects[0].background}</li>
  <li class="snip3">• ${projects[0].year}</li>
</ul>
<img src="${projects[0].image}" class="popup-img" alt="Imagex">
<div class="popupinner">
  <div class="para">
    <p>
    ${projects[0].description}
    </p>
    <div class="popup-div-desktop">
      <button type="button" class="btn-popdesk" href="${projects[0].linkLive}" >
       See live     
      </button>
      <button type="button" class="btn-popdesk" href="${projects[0].linkSource}">
       See source
      </button>
  </div>   
  
  <div class="buttonwraper">
    <ul class="icons2">
      <li>${projects[0].tag1}</li>
      <li>${projects[0].tag2}</li>
      <li>${projects[0].tag3}</li>
      <li>${projects[0].tag4}</li>
      <li>${projects[0].tag5}</li>
      <li>${projects[0].tag6}</li>
     
    </ul>
    <div class="popup-btns">
      <button type="button" class="btn" href="${projects[0].linkLive}" >
       See live     
      </button>
      <button type="button" class="btn" href="${projects[0].linkSource}">
       See source
      </button>
    </div>
  </div>
</div>

</div>`;

function PopupClose() {
  containerPopup.innerHTML -= contentPopup;
  containerPopup.style.display = 'none';
}

function PopupOpen() {
  containerPopup.innerHTML += contentPopup;
  containerPopup.style.display = 'block';
  const closePopup = document.querySelector('.popupclose');
  closePopup.addEventListener('click', PopupClose);
}

// Popup Events
openPopup.forEach((button) => {
  button.addEventListener('click', PopupOpen);
});

// Forms validation
const form = document.getElementById('contact-form');
const errorMess = document.createElement('small');
errorMess.className = 'error';
errorMess.textContent = 'Only lower case on e-mail input, please.';
form.appendChild(errorMess);
const errorElement = document.querySelector('.error');
const validation = (event) => {
  if (form.elements[1].value === form.elements[1].value.toLowerCase()) {
    errorElement.style.display = 'none';
  } else {
    event.preventDefault();
    errorElement.style.display = 'block';
  }
};
form.addEventListener('submit', validation);