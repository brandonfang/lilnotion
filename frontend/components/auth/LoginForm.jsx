import React from 'react';
import AuthNavBarContainer from '../navbar/AuthNavBarContainer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  loginDemo(e) {
    e.preventDefault();
    this.resetInputs();

    const demo1 = { email: 'doug@engelbart.com', password: 'password' };
    // const demo2 = { email: 'ada@lovelace.com', password: 'password' };
    const demo = Math.random() < 0.5 ? demo1 : demo1;

    const demoEmail = demo.email.split('');
    const demoPassword = demo.password.split('');
    const time = 65;

    demoEmail.forEach((char, i) => {
      setTimeout(() => {
        let email = document.getElementById('email-input').value;
        email += char;
        document.getElementById('email-input').value = email;
      }, time * i);
    });

    demoPassword.forEach((char, i) => {
      setTimeout(() => {
        let password = document.getElementById('password-input').value;
        password += char;
        document.getElementById('password-input').value = password;
      }, time * (i + demoEmail.length));
    });

    const submitDelay = time * (demoEmail.length + demoPassword.length);
    setTimeout(() => this.props.login(demo), submitDelay);
    setTimeout(() => this.props.history.push('/'), submitDelay);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  resetInputs() {
    this.setState({
      email: '',
      password: '',
    });
    document.getElementById('email-input').value = '';
    document.getElementById('password-input').value = '';
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <div className="errors-wrapper">
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>{error}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <></>;
    }
  }

  render() {
    return (
      <>
        <AuthNavBarContainer />

        <div className="auth-bg">
          <div className="auth-page-wrapper">
            <section className="auth-section-wrapper">
              <div className="auth-header-wrapper">
                <h1 className="auth-title">Log in</h1>
              </div>
              {this.renderErrors()}

              <div className="form-wrapper">
                <form onSubmit={this.handleSubmit} className="auth-form">
                  <label>
                    Email
                    <input
                      type="text"
                      required
                      value={this.state.email}
                      placeholder="Your email address"
                      onChange={this.handleChange('email')}
                      id="email-input"
                    />
                  </label>
                  {this.props.errors.email ? <p>{this.props.errors.email}</p> : ''}
                  <label>
                    Password
                    <input
                      type="password"
                      required
                      value={this.state.password}
                      placeholder="Your password"
                      onChange={this.handleChange('password')}
                      id="password-input"
                    />
                  </label>
                  <div className="spacer-8"></div>
                  <button className="auth-submit-primary" type="submit">
                    Sign in
                  </button>
                </form>
                <p>
                  New to lilNotion? <Link to="/signup">Sign up</Link>
                </p>
              </div>
            </section>
            <div className="auth-section-divider"></div>

            <section className="auth-section-wrapper" id="demo-login">
              <div className="auth-header-wrapper">
                <h2 className="auth-subtitle">Want to try lilNotion without making an account?</h2>
                <p className="auth-subtext">
                  You can use lilNotion now by logging in as one of our demo users.
                </p>
              </div>
              <div className="form-wrapper">
                <form onSubmit={this.loginDemo} className="auth-form">
                  <button className="auth-submit-demo" type="submit">
                    Log in as demo user
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default LoginForm;
