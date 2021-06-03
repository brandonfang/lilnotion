import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: {},
      // emailAndPassword: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.demoLogin = this.demoLogin.bind(this);
  }

  componentDidMount() {

  }

  handleSubmit(e) {
    e.preventDefault();
    const { formAction, history } = this.props;
    const user = Object.assign({}, this.state);
    formAction(user);
    history.push("/")
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  resetErrors () {
    this.setState({ errors: {} });
  }

  demoLogin (e) {
    e.preventDefault();
  }

  render() {
    // initialize variables
    
    return (
      <div>
        <h2>Sign up</h2>
        <form>
          <label>First name
            <input type="text" />
          </label>

          <label>Last name
            <input type="text" />
          </label>
          
          <label>Email
            <input type="text" />
          </label>

          <label>Password
            <input type="text" />
          </label>

          <button type="submit">Create new account</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
