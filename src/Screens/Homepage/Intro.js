import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/responsive.css';
import '../../assets/css/style.css';
import '../../assets/css/global.css';
import companyLogo from '../../assets/images/collab.png';

class Intro extends Component {
  render() {
    return (
      <section className="hero-section">
            <div className="container-hero">

                <div className="content-hero">

                    <div className="left-side">
                        <h1>Meet and chat with friends and family</h1>
                        <p>Meet, chat, call, and collaborate in just one place.<br /> Stay connected with everyone across your life with MeetUp.</p>
                        <form>
                            <div >
                            {' '}
                            <Link to='/login'>
                               <button type="button" class="btn btn-primary btn-lg" >Sign In</button>
                            </Link> &nbsp;
                            <Link to='/register'>
                               <button type="button" class="btn btn-outline-primary btn-lg" >Sign Up</button>
                            </Link>
                            {' '}
                            </div>
                        </form>
                    </div>


                    <div className="right-side">
                        <img src={companyLogo} layout="fill" />
                    </div>

                </div>

            </div>
        </section>
    );
  }
}

export default Intro;
