import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

class SecondPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: "" }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    fetch("/api/contactForm", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        name: this.state.value,
      }),
    }).then(response => {
      console.log(response)
      //do something awesome that makes the world a better place
    })

    event.preventDefault()
  }

  render() {
    return (
      <Layout>
        <Seo title="Page two" />
        <h1>Hi from the second page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default SecondPage
