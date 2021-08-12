export const homeLink = document.createElement('a'); 
export const menuLink = document.createElement('a');
export const contactLink = document.createElement('a');

const header = () => {
  const navigation = document.createElement('div');
  navigation.className = 'd-flex justify-content-between header';

  const img_div = document.createElement('div');
  const logo = document.createElement('img');
  logo.className = 'shop-logo'
  logo.setAttribute("src", "./images/logo.png");
  img_div.append(logo);
  navigation.append(img_div);

  const links = document.createElement('ul');
  links.className = 'navigationBar';
  

  homeLink.textContent = 'Home';
  const homeItem = document.createElement('li');

  homeItem.appendChild(homeLink);
  links.appendChild(homeItem);
  

  menuLink.textContent = 'Menu';
  const menuItem = document.createElement('li');
  menuItem.appendChild(menuLink);
  links.appendChild(menuItem);

  contactLink.textContent = 'Contact Us';
  const contactItem = document.createElement('li');
  contactItem.appendChild(contactLink);
  links.appendChild(contactItem);

  navigation.appendChild(links);
  return navigation;
};
export default header;