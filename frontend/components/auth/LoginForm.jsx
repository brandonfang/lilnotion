import React from 'react';
import NavBarContainer from '../navbar/NavBarContainer';
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
      <>
        <NavBarContainer />

        <div className="auth-page-wrapper">
          <section className="auth-section-wrapper">
            <div className="auth-header-wrapper">
              <h1 className="auth-title">Log in</h1>
            </div>

            <div className="form-wrapper">
              <form onSubmit={this.handleSubmit} className="auth-form">
                <label>Email
                  <input type="text" value={this.state.email} placeholder="Enter your email address" onChange={this.handleChange('email')} />
                </label>
                {this.props.errors.email ? <p className="login-errors">{this.props.errors.email}</p> : ''}
                <label>Password
                  <input type="password" value={this.state.password} placeholder="Enter your password" onChange={this.handleChange('password')} />
                </label>

                <button className="auth-form-submit" onClick={this.handleSubmit}>Sign in</button>
              </form>

              <p>New to lilNotion? <Link to="/signup">Sign up</Link></p>
            </div>
          </section>
          
          <section className="auth-section-wrapper">
            <div className="auth-header-wrapper">
              <h2 className="auth-subtitle">Want to try lilNotion without making an account?</h2>
              <p className="auth-subtext">You can try out lilNotion by logging in as one of our demo users.</p>
            </div>
            <div className="form-wrapper">
              <form onSubmit={this.handleSubmit} className="auth-form">
                <button className="auth-form-submit" onClick={this.handleSubmit}>Log in as demo user</button>
              </form>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default LoginForm;