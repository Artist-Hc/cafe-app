import React from 'react'
import "../CSS/contact.css"
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className=" w-50  container mt-5 mb-5">
      <h2 className="mb-3 text-light">CONTACT WİTH US</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label text-light" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label text-light" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label text-light" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-success p-2 text-center font-weight-bold" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Contact;