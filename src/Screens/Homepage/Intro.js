import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
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
      // <div className='main-div'>
      //   <h1>MeetUp </h1>
      //   <p>
      //     Meet, chat, call, and collaborate in <br /> just one place.
      //   </p>
      //   <br />
      //   {this.props.isAuthenticated ? (
      //     <Link to="/dashboard">
      //       <Button className='btn' color='danger'>
      //         Open MeetUp
      //       </Button>
      //     </Link>
      //   ) : (
      //     <>
      //       {' '}
      //       <Link to='/login'>
      //         <Button className='btn' color='danger'>
      //           Sign In
      //         </Button>
      //       </Link>
      //       <Link to='/register'>
      //         <Button className='btn' outline color='danger'>
      //           Sign Up
      //         </Button>
      //       </Link>{' '}
      //     </>
      //   )}
      // </div>
    );
  }
}

export default Intro;
