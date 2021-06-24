const containerPopup = document.querySelector('.popup');
const openPopup = document.querySelectorAll('.popup-open');
const infoPopup = {
  title: 'Project name goes here',
  language: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  img: 'assets/img/Project2.png',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br> <br>
  Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.`,
  liveUrl: '#',
  seeUrl: '#',
};

const contentPopup = `
<div class="popwrap">
<img src="./img/Disabled.png" class="popupclose" alt="Image">
<div class="titlep1">
  <h2>Tonic</h2>

</div>
<ul class="description">
  <li class="snip1">Canopy</li>
  <li class="snip2">• Back End Dev</li>
  <li class="snip3">• 2015</li>
</ul>
<img src="./img/SnapPortfolio.png" alt="Image">
<div class="popupinner">
  <div class="para">
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
    </p>
  </div>   
  <div class="buttonwraper">
    <ul class="icons2">
      <li>html</li>
      <li>Javascript</li>
      <li>Css</li>
      <li>Github</li>
      <li>Ruby</li>
      <li>Bootstrap</li>
    </ul>
    <div class="popup-btns">
      <button type="button" class="btn btn-transition">
        See Live
      </button>
      <button type="button" class="btn btn-transition">
        See Source
      </button>
    </div>
  </div>
</div>

</div>`;


function PopupClose() {
  containerPopup.innerHTML -= contentPopup;
  console.log('cerro');
}

function PopupOpen() {
  containerPopup.innerHTML += contentPopup;
  containerPopup.style.display = 'flex';
  console.log('abrio');

  const closePopup = document.querySelector('.popup-close');
  closePopup.addEventListener('click', PopupClose);
 
}

// Popup Events
openPopup.forEach((button) => {
  button.addEventListener('click', PopupOpen);
});