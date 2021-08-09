const header = () => {
  const navigation = document.createElement('div');
  navigation.classList.add('d-flex justify-content-between');

  const img_div = document.createElement('div');
  const logo = document.createElement('img');
  logo.className = 'shop_logo'
  logo.setAttribute("src", "./images/logo.png");
  img_div.append(logo);
  navigation.append(img_div);

  const links = document.createElement('ul');
  navigation.append(links);
  const list_1 = document.createElement('li');
  const tab_1 = document.createElement('button');
  tab_1.textContent = 'Home';
  tab_1.className = 'nav-link';
  list_1.append(tab_1);
  links.append(list_1);

  const list_2 = document.createElement('li');
  const tab_2 = document.createElement('button');
  tab_2.textContent = 'Brews';
  tab_2.className = 'nav-link';
  list_2.append(tab_2);
  links.append(list_2);

  const list_3 = document.createElement('li');
  const tab_3 = document.createElement('button');
  tab_3.textContent = 'Contact Us';
  tab_3.className = 'nav-link';
  list_3.append(tab_3);
  links.append(list_3);


 return navigation;
};
export default header;