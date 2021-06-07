import React from 'react';
import AuthNavBarContainer from '../navbar/AuthNavBarContainer';
import { Link } from 'react-router-dom';

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      domain: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.props.history.push('/');
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <>
        <AuthNavBarContainer />

        <div className="auth-page-wrapper">
          <section className="auth-section-wrapper">
            <div className="auth-header-wrapper">
              <h1 className="auth-title">Create your workspace</h1>
              <p>You can always change these settings later.</p>
            </div>

            <div className="form-wrapper">
              <form onSubmit={this.handleSubmit} className="auth-form">
                <label>Workspace name
                  <input type="text" required value={this.state.workspaceName} placeholder="Your workspace name" onChange={this.handleChange('workspaceName')} id="workspace-name-input" />
                </label>

                <p className="input-subtext">The name of your company or organization.</p>

                <label>Domain
                  <input type="text" required value={this.state.workspaceDomain} placeholder="Your workspace domain" onChange={this.handleChange('workspaceDomain')} id="workspace-domain-input" />
                </label>

                <label>Add a logo
                  <input type="file" value={this.state.logo} placeholder="Your workspace logo" onChange={this.handleChange('logo')} id="logo-input" />
                </label>

                {/* <p className="input-subtext">You can change always change this later.</p> */}


                {this.props.errors.logo ? <p>{this.props.errors.logo}</p> : ''}

                <div className="spacer-8"></div>

                <button className="auth-submit-primary" type="submit">Create a new workspace</button>
              </form>

            </div>
          </section>

          {/* <div className="auth-section-divider"></div> */}


        </div>
      </>
    );
  }
}
 
export default Onboarding;
 