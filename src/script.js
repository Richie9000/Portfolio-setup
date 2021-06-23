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

//Pop up

const projects = [
  {
    name: 'Topic',
    feature: 'CANOPY',
    background: 'Back End Dev',
    year: '2015',
    image: '/img/SnapshootPortfoliox.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tag1: 'html',
    tag2: 'css',
    tag3: 'javascript',
    linkLive: 'https://richie9000.github.io/Portfolio-setup/',
    linkSource: 'https://richie9000.github.io/Portfolio-setup/',
  },
  {
    name: 'Multi-Post Stories',
    feature: 'FACEBOOK',
    background: 'Full Stack Dev',
    year: '2015',
    image: '/img/SnapshootPortfolio4.png',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tag1: 'html',
    tag2: 'css',
    tag3: 'javascript',
    linkLive: 'https://richie9000.github.io/Portfolio-setup/',
    linkSource: 'https://richie9000.github.io/Portfolio-setup/',
  },
  {
    name: 'Facebook 360',
    feature: 'FACEBOOK',
    background: 'Full Stack Dev',
    year: '2015',
    image: 'img/facebook-360-project.svg',
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    tag1: 'html',
    tag2: 'css',
    tag3: 'javascript',
    linkLive: 'https://richie9000.github.io/Portfolio-setup/',
    linkSource: 'https://richie9000.github.io/Portfolio-setup/',
  },
  {
    name: 'Uber Navigation',
    feature: 'Uber',
    background: 'Lead Developer',
    year: '2018',
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
const popupButton = document.querySelectorAll('.btn-transition');

for (let i = 0; i < projects.length; i++) {
  
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
  cardButton.className = 'btn btn-transition';
  cardButton.textContent = 'See project';
  divLiCard.appendChild(cardButton);

  // Popup
  const popup = document.createElement('section');
  popup.className = 'popup';
  document.body.appendChild(popup);
  const popupTitle = document.createElement('h2');
  popupTitle.className = 'titlep1';
  popup.appendChild(popupTitle);
}

popupButton.forEach((item) => {
  item.addEventListener('click', function() {
    item.style.display = 'block';
  });
})
