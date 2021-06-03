import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render () {
      return (
        <div>

          <header className="login-form-header">
            <img src={window.logo} alt="lilNotion logo" />
          </header>

          <h1>Log in</h1>

          <form>
            <label>Email
              <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleChange('email')} />
            </label>
            {this.props.errors.email ? <p className="login-errors">{this.props.errors.email}</p> : ''}
            <label>Password
              <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleChange('password')} />
            </label>

            <button onClick={this.handleSubmit}>Sign In</button>
          </form>

          <p>New to lilNotion? <Link to="/signup">Sign up</Link></p>

        </div>
      )
  }
}

export default LoginForm;