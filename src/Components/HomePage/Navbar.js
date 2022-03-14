import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import '../../assets/css/responsive.css';
import '../../assets/css/style.css';
import '../../assets/css/global.css';
import Logo from '../../assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:'6rem' ,
  },
  menuButton: {
    marginLeft : theme.spacing(5) ,
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  button:{
    backgroundColor:'white',
    width:'5rem'
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <header>
            <div className="logo">
                <Link href="/">
                    <a>
                        <img src={Logo} width={80} height={90} />         
                    </a>   
                </Link>
            </div>
            <div className="btn-try">
            {!props.isAuthenticated && <Link to='/login'>
              <button type="button" class="btn btn-primary btn-lg">
                <b>Login</b>
               </button>
             </Link>}
            </div>
        </header>
  );
}
