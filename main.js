/* eslint-disable no-plusplus */
// ----------------Responsive Menu Here------------------
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelectorAll('.nav__items');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navItems.classList.toggle('active');
});

document.querySelectorAll('.nav__links').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    navItems.classList.remove('active');
  }));

// ----------Dynamic adding of conference speakers here-------------

const members = [
  {
    id: 0,
    speakerName: 'Mr. Ibrahim Thiaw',
    speakerTitle: 'Acting Executive Secretary, United Nations Framework Convention on Climate Change (UNFCCC)',
    speakerImage: './images/ibrahim.jpeg',
    speakerRole: 'Thiaw started his career in Mauritania, his home country, where he served in the Ministry of Rural Development for 10 years. He holds an advanced degree in forestry and forest product techniques.',

  },

  {
    id: 1,
    speakerName: 'Ms. Amina J. Mohammed',
    speakerTitle: 'Deputy Secretary-General of the United Nations and Chair of the United Nations Sustainable Development Group,',
    speakerImage: './images/amina_mohammed.jpeg',
    speakerRole: 'is a Nigerian-British diplomat and politician who is serving as the fifth Deputy Secretary-General of the United Nations. Previously, she was Nigerian Minister of Environment from 2015 to 2016 and was a player in the Post-2015 Development Agenda process.',

  },

  {
    id: 2,
    speakerName: 'Ms. Mamphela Ramphele',
    speakerTitle: 'Co-President, Club of Rome',
    speakerImage: './images/mamphele_ramphele.jpeg',
    speakerRole: 'Mamphela Aletta Rampheleis a South African politician,[3] an activist against apartheid, a medical doctor, an academic and businesswoman. She was a partner of anti-apartheid activist Steve Biko, with whom she had two children.',

  },

  {
    id: 3,
    speakerName: 'Ms. Sheila Opararocha',
    speakerTitle: 'Executive Director, ENERGIA',
    speakerImage: './images/sheila_oparaocha.jpeg',
    speakerRole: 'Sheila Oparaocha holds a master’s degree in Gender and Development Planning and has over twenty one years of experience working at the intersectionality of gender equality, women empowerment and energy access. The 2021 recipient of the Carnot Prize, Sheila is a renowned leader in the gender and sustainable energy sector',

  },

  {
    id: 4,
    speakerName: 'Ms. Sawako Shirahase',
    speakerTitle: 'Senior Vice-Rector of United Nations University (UNU) and Assistant Secretary-General of the United Nations ,',
    speakerImage: './images/sawako_shirahase.jpeg',
    speakerRole: 'Ms. Shirahase is a sociologist whose research interests include social stratification and inequality, social demography, and generation and gender studies. ',

  },

  {
    id: 5,
    speakerName: 'Mr. Hoesung Lee',
    speakerTitle: 'Chair, International Panel on Climate Change (IPCC)',
    speakerImage: './images/hoesung_lee.jpeg',
    speakerRole: 'Dr. Hoesung Lee is Chair of the Intergovernmental Panel on Climate Change (IPCC), elected since October 2015, and Endowed Chair Professor at Korea University Graduate School of Energy and Environment, Seoul, Korea.',

  },
];
const speakerMembers = document.querySelector('.speaker');

function display() {
  let displaySpk = '';
  for (let i = 0; i < 6; i++) {
    displaySpk += `
<div class="spk__information__container">
            <img class="speaker__img" src="${members[i].speakerImage}" alt="" />
            <div class="spk__info__container">
            <h2 class="spk__name">${members[i].speakerName}</h2>
            <h class="spk__title">${members[i].speakerTitle}</h>
            <hr class="spk__hr" />
            <p class="spk__role">${members[i].speakerRole}</p>
            </div>
        </div>
    `;
  }
  speakerMembers.innerHTML = displaySpk;
}

display();