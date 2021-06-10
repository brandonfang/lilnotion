import React from 'react';
import AuthNavBarContainer from '../navbar/AuthNavBarContainer';

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: props.currentUser.firstName + "'s lilNotion",
      domain: '',
      creatorId: props.currentUser.id,
      iconString: '',
      hasImage: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const workspace = Object.assign({}, this.state);
    this.props.processForm(workspace).then((response) => (
      this.props.history.push(`/${this.state.domain}`)
    ));
  }

  handleName() {
    return (e) => this.setState({ name: e.target.value });
  }

  handleDomain() {
    return (e) => this.setState({ domain: e.target.value }, this.removeSpacesFromDomain);
  }

  removeSpacesFromDomain() {
    console.log(this.state.domain);
    return this.setState({ domain: this.state.domain.replace(/\s/g, '') });;
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

        <div className="auth-page-wrapper">
          <section className="auth-section-wrapper">
            <div className="auth-header-wrapper">
              <h1 className="auth-title">Create your workspace</h1>
            </div>

            {this.renderErrors()}

            <div className="form-wrapper">
              <form onSubmit={this.handleSubmit} className="auth-form">
                <label>Workspace name
                  <input type="text" required value={this.state.name} placeholder="Your workspace name" onChange={this.handleName()} id="workspace-name-input" />
                </label>

                <p className="input-subtext">You can use your name or the name of your company.</p>

                <label>Domain
                  <div className="input-domain-wrapper">
                    <div className="domain-prefix">lilnotion.com/</div>
                    <input className="input-domain" type="text" required value={this.state.domain} placeholder="URL" onChange={this.handleDomain()} id="workspace-domain-input" />
                  </div>
                </label>

                <p className="input-subtext">No spaces allowed.</p>

                <div>Add a logo (optional)</div>
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
 