const about =()=> {

  const section = document.createElement('section');
  section.className = 'home';

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Mbegera's Coffee";
  heading.className = 'heading';
  section.append(heading);

  const large_div = document.createElement('div');
  large_div.className = 'large_div';

  const left_div = document.createElement('div');
  left_div.setAttribute("src", "./images/Coffee.jpeg");
  large_div.append(left_div);

  const right_div = document.createElement('div');
  right_div.textContent = "At Mbegera's, we take great care to serve quality, great-tasting menu items to our customers each and every time they visit our restaurants. We understand that each of our customers has individual needs and considerations when choosing a place to eat or drink outside their home, especially those customers with food allergies. As part of our commitment to you, we provide the most current ingredient information available from our food suppliers for the eight most common allergens";
  large_div.append(right_div);
  
  section.append(large_div);

  return section;
}
export default about;
