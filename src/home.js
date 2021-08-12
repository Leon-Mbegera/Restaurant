const about = () => {
  const section = document.createElement('section');
  section.className = 'home';

  const largeDiv = document.createElement('div');
  largeDiv.className = 'd-flex flex-row';

  const leftDiv = document.createElement('div');
  const welcomeImage = document.createElement('img');
  welcomeImage.className = 'big-image';
  welcomeImage.setAttribute('src', './images/Coffee.jpeg');
  leftDiv.append(welcomeImage);
  largeDiv.append(leftDiv);

  const rightDiv = document.createElement('div');
  const heading = document.createElement('h4');
  heading.textContent = "Mbegera's Coffee Shop";
  heading.className = 'heading';
  rightDiv.append(heading);
  largeDiv.append(rightDiv);

  const p = document.createElement('p');
  p.textContent = "At Mbegera's, we take great care to serve quality, great-tasting menu items to our customers each and every time they visit our restaurants. We understand that each of our customers has individual needs and considerations when choosing a place to eat or drink outside their home, especially those customers with food allergies. As part of our commitment to you, we provide the most current ingredient information available from our food suppliers for the eight most common allergens";
  p.className = 'paragraph';
  rightDiv.append(p);
  largeDiv.append(rightDiv);

  section.append(largeDiv);

  return section;
};
export default about;
