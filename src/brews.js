const coffeeBrewMenu = (brew_image, brew_name, brew_desc, brew_price,) => {

  const coffeeBrews = document.createElement('div');

  const brewImage = document.createElement('img');
  brewImage.src = brew_image;
  coffeeBrews.appendChild(brewImage);

  const brewName = document.createElement('h3');
  brewName.textContent = brew_name;
  coffeeBrews.appendChild(brewName);

  const brewDesc = document.createElement('p');
  brewDesc.textContent = brew_desc;
  coffeeBrews.appendChild(brewDesc);

  const brewPrice = document.createElement('p');
  brewPrice.textContent = brew_price;
  coffeeBrews.appendChild(brewPrice);

  return coffeeBrews;
};

