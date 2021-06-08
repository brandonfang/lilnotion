import React from 'react';
import AuthNavBarContainer from '../navbar/AuthNavBarContainer';
import { Link } from 'react-router-dom';

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    // const firstName = props.currentUser.firstName;
    this.state = {
      workspaceName: "'s lilNotion",
      workspaceDomain: '',
      userId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const workspace = Object.assign({}, this.state);
    this.props.processForm(workspace);
    // this.props.history.push('/');
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
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
    // add constraint on domain input; no spaces allowed

    return (
      <>
        <AuthNavBarContainer />

        <div className="auth-page-wrapper">
          <section className="auth-section-wrapper">
            <div className="auth-header-wrapper">
              <h1 className="auth-title">Create your workspace</h1>
            </div>

            {this.renderErrors()}

            <div className="form-wrapper">
              <form onSubmit={this.handleSubmit} className="auth-form">
                <label>Workspace name
                  <input type="text" required value={this.state.workspaceName} placeholder="Your workspace name" onChange={this.handleChange('workspaceName')} id="workspace-name-input" />
                </label>

                <p className="input-subtext">You can use your name or the name of your company.</p>

                <label>Domain
                  <div className="input-domain-wrapper">
                    <div className="domain-prefix">lilnotion.com/</div>
                    <input className="input-domain" type="text" required value={this.state.workspaceDomain} placeholder="URL" onChange={this.handleChange('workspaceDomain')} id="workspace-domain-input" />
                  </div>
                </label>

                <p className="input-subtext">No spaces allowed.</p>

                <div>Add a logo</div>
                {/* <div className="workspace-logo-preview">
                  <img src="" />
                </div> */}
                <input type="file" id="workspace-logo" /> 
                <label htmlFor="workspace-logo">Choose an image</label>

                <p className="input-subtext">Upload an image.</p>

                <div className="spacer-8"></div>

                <button className="auth-submit-primary" type="submit">Create a new workspace</button>

                <div className="post-form-text">You can always edit these options in your workspace settings.</div>
              </form>

            </div>
          </section>
        </div>
      </>
    );
  }
}
 
export default Onboarding;
 