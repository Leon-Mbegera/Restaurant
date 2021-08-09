const header = () => {
  navigation = document.createElement('div');
  navigation.classList.add('d-flex justify-content-between');

  img_div = document.createElement('div');
  logo = document.createElement('img');
  logo.className = 'shop_logo'
  logo.setAttribute("src", "./images/logo.png");
  img_div.append(logo);
  navigation.append(image_div);


}