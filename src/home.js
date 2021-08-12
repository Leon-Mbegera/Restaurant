const about =()=> {

  const section = document.createElement('section');
  section.className = 'home';

  const large_div = document.createElement('div');
  large_div.className = 'd-flex flex-row';

  const left_div = document.createElement('div');
  const welcomeImage = document.createElement('img');
  welcomeImage.className = 'big-image';
  welcomeImage.setAttribute("src", "./images/Coffee.jpeg");
  left_div.append(welcomeImage);
  large_div.append(left_div);

  const right_div = document.createElement('div');
  const heading = document.createElement("h4");
  heading.textContent = "Mbegera's Coffee Shop";
  heading.className = 'heading';
  right_div.append(heading);
  large_div.append(right_div);

  const p = document.createElement('p');
  p.textContent = "At Mbegera's, we take great care to serve quality, great-tasting menu items to our customers each and every time they visit our restaurants. We understand that each of our customers has individual needs and considerations when choosing a place to eat or drink outside their home, especially those customers with food allergies. As part of our commitment to you, we provide the most current ingredient information available from our food suppliers for the eight most common allergens";
  p.className = 'paragraph'
  right_div.append(p);
  large_div.append(right_div);
  
  section.append(large_div);

  return section;
}
export default about;
