import React from 'react';
import AuthNavBarContainer from '../navbar/AuthNavBarContainer';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    ;
  }

  loginDemo(e) {
    e.preventDefault();
    this.resetInputs();
    const demoUser = { 
      email: 'doug@engelbart.com',
      password: 'password'
    };

    const demoUserEmail = 'doug@engelbart.com'.split('');
    const demoUserPassword = 'password'.split('');
    // const emailInput = document.getElementById('email-input');
    // const passwordInput = document.getElementById('password-input');

    demoUserEmail.forEach((char, i) => {
      setTimeout(() => {
        let emailValue = document.getElementById('email-input').value;
        emailValue += char;
        document.getElementById('email-input').value = emailValue;
      }, 100 * i);
    });

    demoUserPassword.forEach((char, i) => {
      setTimeout(() => {
        let passwordValue = document.getElementById('password-input').value;
        passwordValue += char;
        document.getElementById('password-input').value = passwordValue;
      }, 100 * i);
    });

    setTimeout(this.props.processForm(demoUser), 4000);
    setTimeout(this.props.history.push('/'), 4000);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  resetInputs() {
    this.setState({
      email: '',
      password: ''
    });
  }

  resetErrors () {
    this.setState({ errors: {} });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <>
        <AuthNavBarContainer variant="login" />

        <div className="auth-page-wrapper">
          <section className="auth-section-wrapper">
            <div className="auth-header-wrapper">
              <h1 className="auth-title">Log in</h1>
            </div>

            <div className="form-wrapper">
              <form onSubmit={this.handleSubmit} className="auth-form">
                <label>Email
                  <input type="text" value={this.state.email} placeholder="Your email address" onChange={this.handleChange('email')} id="email-input" />
                </label>

                {this.props.errors.email ? <p>{this.props.errors.email}</p> : ''}

                <label>Password
                  <input type="password" value={this.state.password} placeholder="Your password" onChange={this.handleChange('password')} id="password-input" />
                </label>

                <button className="auth-form-submit" type="submit">Sign in</button>
              </form>

              <p>New to lilNotion? <Link to="/signup">Sign up</Link></p>
            </div>
          </section>
          
          <section className="auth-section-wrapper" id="demo-login">
            <div className="auth-header-wrapper">
              <h2 className="auth-subtitle">Want to try lilNotion without making an account?</h2>
              <p className="auth-subtext">You can try out lilNotion by logging in as one of our demo users.</p>
            </div>
            <div className="form-wrapper">
              <form onSubmit={this.loginDemo} className="auth-form">
                <button className="auth-form-submit" type="submit">Log in as demo user</button>
              </form>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default LoginForm;
