const contact_us = () => {
  const contact = document.createElement('div');
  contact.className = 'contactUs';

  const h1 = document.createElement('h1');
  h1.className = 'heading';
  h1.textContent = 'Feel free to reach us..';
  contact.append(h1);

  const p = document.createElement('p');
  p.textContent = 'We are located at Kenyatta Avenue, Latema strt, opposite National Achives, Nairobi CBD.';
  contact.append(p);

  


  
  return contact;
};
export default contact_us;