import React from "react"
import Why from "./form.module.scss"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <div className={Why.myform}>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/maypqzre"
          method="POST"
        >
          {" "}
          <div className={Why.flexmini}>
            {" "}
            <div>
              <label>Email:</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label>Name:</label>
              <input type="text" name="name"></input>
            </div>
          </div>
          <label>Message:</label>
          <label htmlFor="msg"></label>
          <textarea name="message" id="msg" cols="30" rows="10"></textarea>
          {/* <input type="textarea" name="message" /> */}
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <button>
              Submit{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 19"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
