import React from 'react'

class Form extends React.Component {
  render() {
    return <div className="form-container">
      <h1>Contact us</h1>
      <form action="#" className="form">
        <div className="name">
          <label htmlFor="firstName" >First Name</label>
            <input type="text"
              name="firstName"
              className="firstName"
              tabIndex="1"
            />
          <label htmlFor="firstName" >First Name</label>
            <input type="text"
              name="lastName"
              className="lastName"
              tabIndex="2"
            />
          <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="example@corp.com"
              tabIndex="3"
            />
          <label for="message">Message</label>
            <textarea
              placeholder="Start typing..."
              className="message"
              name="message"
            />
          <button type="submit" className="send">Send</button>
        </div>
      </form>
    </div>
  }
}
export default Form;
