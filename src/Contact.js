const contact_us = () => {
  const contact = document.createElement('div');
  contact.className = 'contactUs home';

  const h1 = document.createElement('h1');
  h1.className = 'center';
  h1.textContent = 'Feel free to reach us..';
  contact.append(h1);

  const p = document.createElement('p');
  p.textContent = 'We are located at Kenyatta Avenue, Latema strt, opposite National Achives, Nairobi CBD.';
  contact.append(p);

  const p2 = document.createElement('p');
  p2.textContent = 'Call us: (+254) 222 444 600 or (+254) 334 555 222';
  contact.append(p2);

  const formDiv = document.createElement('div');
  const form = document.createElement('form');

  const emailLabel = document.createElement('label');
  emailLabel.className = 'email-label';
  const label = document.createTextNode('Email');
  emailLabel.append(label);
  form.append(emailLabel);
  formDiv.append(form);
  contact.append(formDiv);

  const email = document.createElement('input');
  email.setAttribute('type', 'text');
  email.setAttribute('placeholder', 'bunny@example.com');
  form.append(email);
  formDiv.append(form);
  contact.append(formDiv);

  const textLabel = document.createElement('label');
  textLabel.className = 'text-label';
  const text = document.createTextNode('Leave us some feedback');
  textLabel.append(text);
  form.append(textLabel);
  formDiv.append(form);
  contact.append(formDiv);

  const textarea = document.createElement('textarea');
  const message = document.createTextNode('Drop some feedback on how you liked our size, and or how we should improve inoder to make this place your favorite coffee spot..');
  textarea.append(message);
  form.append(textarea);
  formDiv.append(form);
  contact.append(formDiv);

  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  form.append(submit);
  formDiv.append(form);
  contact.append(formDiv);
  
  return contact;
};
export default contact_us;