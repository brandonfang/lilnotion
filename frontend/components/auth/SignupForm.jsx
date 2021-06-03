import React from 'react';
import NavBarContainer from '../navbar/NavBarContainer';
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
      <>
        <NavBarContainer />

        <div className="auth-page-wrapper">
          <section className="auth-section-wrapper">
            <div className="auth-header-wrapper">
              <h1 className="auth-title">Sign up</h1>
            </div>

            <div className="form-wrapper">
              <form onSubmit={this.handleSubmit} className="auth-form">
                <label>First name
                  <input type="text" value={this.state.email} placeholder="Enter your first name" onChange={this.handleChange('firstName')} />
                </label>
                
                <label>Last name
                  <input type="text" value={this.state.email} placeholder="Enter your last name" onChange={this.handleChange('lastName')} />
                </label>
                <label>Email
                  <input type="text" value={this.state.email} placeholder="Enter your email address" onChange={this.handleChange('email')} />
                </label>

                {this.props.errors.email ? <p className="login-errors">{this.props.errors.email}</p> : ''}

                <label>Password
                  <input type="password" value={this.state.password} placeholder="Enter your password" onChange={this.handleChange('password')} />
                </label>

                <button className="auth-form-submit" onClick={this.handleSubmit}>Sign in</button>
              </form>

              <p>Already have an account? <Link to="/login">Log in</Link></p>
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

export default SignupForm;
