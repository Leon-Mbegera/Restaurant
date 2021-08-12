import header, { homeLink, menuLink, contactLink } from './header';

import about from './home';
import showMenu from './brews';
import contactUs from './contact.js';

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