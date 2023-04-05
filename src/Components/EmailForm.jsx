import React, { useState } from 'react'

const EmailForm = () => {

  const [email, setEmail] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(email);
  }

  const handleEmailChange = e => {
    const { value } = e.target;
    setEmail(value);
  }

  return (
    <div className='start-form'>
      <form onSubmit={handleSubmit} className='form'>
        <div className="d-flex">
          <input
            className='form-control'
            aria-label="Your email address"
            name="email_address"
            placeholder="Your email address"
            required
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
          <button className="btn btn-green">Get Started</button>
        </div>
      </form>
      <p className="note">No Credit Card Required.</p>
    </div>
  )
}

export default EmailForm

