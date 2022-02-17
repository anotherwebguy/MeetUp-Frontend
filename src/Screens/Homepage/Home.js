import React, { Component } from 'react';
import { connect } from 'react-redux';
import Intro from './Intro';
import ButtonAppBar from './Navbar';
import '../../assets/css/responsive.css';
import '../../assets/css/style.css';
import '../../assets/css/global.css';

class Home extends Component {

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
          <div>
            <ButtonAppBar isAuthenticated={isAuthenticated} />
            <Intro isAuthenticated={isAuthenticated} />
          </div>
        );
    }
}


function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Home);