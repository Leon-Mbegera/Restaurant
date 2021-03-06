import header, { homeLink, menuLink, contactLink } from './header.js';

import about from './home.js';
import showMenu from './brews.js';
import contactUs from './Contact.js';

const navSection = header();
const homePage = about();
const menuPage = showMenu();
const contactPage = contactUs();

const content = document.querySelector('#content');
content.append(navSection);

const viewTab = (tab) => {
  content.innerHTML = '';
  content.append(navSection, tab);
};

homeLink.addEventListener('click', () => { viewTab(homePage); });
menuLink.addEventListener('click', () => { viewTab(menuPage); });
contactLink.addEventListener('click', () => { viewTab(contactPage); });
viewTab(homePage);