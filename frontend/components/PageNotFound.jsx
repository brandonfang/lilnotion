import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NavBarContainer from './navbar/NavBarContainer'

const PageNotFound = () => {
  return (
    <>
      <NavBarContainer />
      <div className="auth-page-wrapper">
        <section className="auth-section-wrapper">
          <div className="auth-header-wrapper">
            <h1 className="auth-title title-404">404: Page Not Found</h1>
            <Link className="auth-subtitle" to="/">
              Home Page
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.currentUserId],
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageNotFound)
