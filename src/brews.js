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

const coffeeMenu = () => {
  const menu = document.createElement('div');

    menu.appendChild(coffeeBrewMenu(
      './dist/images/cappuccino.jpg',
      'Cappuccino',
      'Traditionally prepared with equal parts double espresso, steamed milk, and steamed milk foam',
      'ksh. 1,350'
      ),
    );

    menu.appendChild(coffeeBrewMenu(
      './dist/images/cappuccino.jpg',
      'Cappuccino',
      'Traditionally prepared with equal parts double espresso, steamed milk, and steamed milk foam',
      'ksh. 1,350'
       ),
    );

    menu.appendChild(coffeeBrewMenu(
      './dist/images/caramel-macchiato.jpg',
      'Caramel Macchiato',
      'Made with vanilla syrup, steamed milk, espresso and caramel sauce',
      'ksh. 1,150'
      ),
    );

    menu.appendChild(coffeeBrewMenu(
      './dist/images/french-vanilla.jpg',
      'French Vanilla',
      'Made with whole milk and granulated sugar, and heated over medium heat until steaming',
      'ksh. 1,475'
      ),
    );

    menu.appendChild(coffeeBrewMenu(
      './dist/images/hot-chocolate.jpg',
      'Hot Chocolate',
      'Made with combined milk, cocoa powder, and semi sweet chocolate, and brought to a simmer',
      'ksh. 1,600'
      ),
    );

    menu.appendChild(coffeeBrewMenu(
      './dist/images/latte.jpg',
      'Italian latte',
      'The hot milk and creamy milk foam are imbued with the delicious flavour of coffee',
      'ksh. 1,800'
      ),
    );

    menu.appendChild(coffeeBrewMenu(
      './dist/images/mocha.jpg',
      'Cappuccino',
      'Is a chocolate-flavoured warm beverage that is a variant of a caffè latte',
      'ksh. 1,350'
      ),
    );
  
  return menu;
};

const showMenu = () => {
  const mainMenu = document.createElement('div');
  mainMenu.textContent = '';
  mainMenu.appendChild(CoffeMenu);
  return mainMenu;
};

export default showMenu;