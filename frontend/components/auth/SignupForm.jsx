import React from 'react';
import AuthNavBarContainer from '../navbar/AuthNavBarContainer';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  async handleSubmit(e) {
    e.preventDefault();
    // create new user
    const user = Object.assign({}, this.state);
    const { currentUser } = await this.props.signup(user);
    console.log(currentUser)
    // create placeholder data
    const { page } = await this.props.createPage({
      userId: currentUser.id,
      title: '',
      blockIds: [],
    });
    console.log(page);

    const { block } = await this.props.createBlock({
      userId: currentUser.id,
      pageId: page.id,
      blockType: 'paragraph',
      text: '',
    });
    console.log(block);
  }

  loginDemo(e) {
    e.preventDefault();
    this.resetInputs();

    const demo1 = { firstName: 'Doug', lastName: 'Engelbart', email: 'doug@engelbart.com', password: 'password' };
    const demo2 = { firstName: 'Ada', lastName: 'Lovelace', email: 'ada@lovelace.com', password: 'password' };
    const demo = Math.random() < 0.5 ? demo1 : demo1;
    
    const demoFirstName = demo.firstName.split('');
    const demoLastName = demo.lastName.split('');
    const demoEmail = demo.email.split('');
    const demoPassword = demo.password.split('');
    const time = 60;

    demoFirstName.forEach((char, i) => {
      setTimeout(() => {
        let firstName = document.getElementById('first-name-input').value;
        firstName += char;
        document.getElementById('first-name-input').value = firstName;
      }, time * (i));
    });

    demoLastName.forEach((char, i) => {
      setTimeout(() => {
        let lastName = document.getElementById('last-name-input').value;
        lastName += char;
        document.getElementById('last-name-input').value = lastName;
      }, time * (i + demoFirstName.length));
    });
    
    demoEmail.forEach((char, i) => {
      setTimeout(() => {
        let email = document.getElementById('email-input').value;
        email += char;
        document.getElementById('email-input').value = email;
      }, time * (i + demoFirstName.length + demoLastName.length));
    });

    demoPassword.forEach((char, i) => {
      setTimeout(() => {
        let password = document.getElementById('password-input').value;
        password += char;
        document.getElementById('password-input').value = password;
      }, time * (i + demoFirstName.length + demoLastName.length + demoEmail.length));
    });
    
    const submitDelay = 100 + time * (demoFirstName.length + demoLastName.length + demoEmail.length + demoPassword.length);

    setTimeout(() => this.props.loginDemo(demo), submitDelay);
    // setTimeout(() => this.props.history.push('/'), submitDelay);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  resetInputs() {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    document.getElementById('first-name-input').value = '';
    document.getElementById('last-name-input').value = '';
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
                <h1 className="auth-title">Sign up</h1>
              </div>
              {this.renderErrors()}
              <div className="form-wrapper">
                <form onSubmit={this.handleSubmit} className="auth-form">
                  <label>First name
                    <input type="text" required value={this.state.firstName} placeholder="Your first name" onChange={this.handleChange('firstName')} id="first-name-input" />
                  </label>
          
                  <label>Last name
                    <input type="text" required value={this.state.lastName} placeholder="Your last name" onChange={this.handleChange('lastName')} id="last-name-input" />
                  </label>
                  <label>Email
                    <input type="email" required value={this.state.email} placeholder="Your email address" onChange={this.handleChange('email')} id="email-input" />
                  </label>
                  <label>Password
                    <input type="password" required value={this.state.password} placeholder="Your password" onChange={this.handleChange('password')} id="password-input" />
                  </label>
                  <p className="input-subtext">Password needs to be six or more characters.</p>
                  <div className="spacer-8"></div>
                  <button className="auth-submit-primary" type="submit">Create a new account</button>
                </form>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
              </div>
            </section>
            <div className="auth-section-divider"></div>
            <section className="auth-section-wrapper">
              <div className="auth-header-wrapper">
                <h2 className="auth-subtitle">Want to use lilNotion without making an account?</h2>
                <p className="auth-subtext">You can try lilNotion now by logging in as one of our demo users.</p>
              </div>
              <div className="form-wrapper">
                <form onSubmit={this.loginDemo} className="auth-form">
                  <button className="auth-submit-demo" type="submit">Log in as demo user</button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default SignupForm;
