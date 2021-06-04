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
      // errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentDidMount() {
  }

  handleSubmit(e) {
    e.preventDefault();
    const { formAction, history } = this.props;
    const user = Object.assign({}, this.state);
    formAction(user);
    history.push("/");
  }

  demoLogin (e) {
    e.preventDefault();
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  resetErrors() {
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

  render() {    
    return (
      <>
        <NavBarContainer />

        <div className="auth-page-wrapper">
          <section className="auth-section-wrapper">
            <div className="auth-header-wrapper">
              <h1 className="auth-title">Sign up</h1>
            </div>

            <div className="form-wrapper">
              {/* {this.renderErrors()} */}
              {console.log(this.props)}

              <form onSubmit={this.handleSubmit} className="auth-form">
                <label>First name
                  <input type="text" value={this.state.firstName} placeholder="Your first name" onChange={this.handleChange('firstName')} />
                </label>
                
                <label>Last name
                  <input type="text" value={this.state.lastName} placeholder="Your last name" onChange={this.handleChange('lastName')} />
                </label>

                <label>Email
                  <input type="email" value={this.state.email} placeholder="Your email address" onChange={this.handleChange('email')} />
                </label>

                {this.props.errors.email ? <p>{this.props.errors.email}</p> : ''}

                <label>Password
                  <input type="password" value={this.state.password} placeholder="Your password" onChange={this.handleChange('password')} />
                  <p className="input-message">Password needs to be six or more characters.</p>
                </label>

                <button className="auth-form-submit" type="submit">Create a new account</button>
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
              <form onSubmit={this.demoLogin} className="auth-form">
                <button className="auth-form-submit" type="submit">Log in as demo user</button>
              </form>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default SignupForm;
