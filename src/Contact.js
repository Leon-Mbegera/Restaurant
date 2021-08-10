const contact_us = () => {
  const contact = document.createElement('div');
  contact.innerHTML = 
  `
    <div>
      <div>
        <h1>Feel free to reach us..</h1>
      </div>
      <div>
        <p>We are located at Kenyatta Avenue, Latema strt, opposite National Achives, Nairobi CBD.</p>
        <p>Call us: (+254) 222 444 600</p>
      </div>
      <div>
        <h3>Leave us a message..</h3>
        <form>
          <input type='email' placeholder='your email...'><br>
          <textarea placeholder='leave us your thoughts...'></textarea><br><br>
          <button>Send</button>
        </form>
      </div>
    </div>
  `;
  return contact;
};
export default contact_us