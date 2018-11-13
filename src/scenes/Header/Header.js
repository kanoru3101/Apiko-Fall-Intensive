import {Link} from "react-router-dom";
import {routes} from "../../routes";
import React from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as appOperations from '../../modules/app/appOperations';




const styles = {
    root: {
        flexGrow: 1,
    },
    typography: {
        paddingRight: 30,
    }
};

const SingIn = (props) => {

    const clearToken = (token) => {
        props.removeToken(token);
    };

    const handleButton = () => {

        if (props.token) {
            return <Link to={props.location.pathname}><button onClick={() => {clearToken(props.token)}}>logout</button></Link>;
        }
        else {
            return <Link to={routes.login}><button>login/register</button></Link>;
        }
    };

    return(
        <div>
            {props.token && <div>{props.user.firstName}</div>}
            {handleButton()}
        </div>
    );
};




const Header = (props) => {
      return (
        <div className={styles.root}>
            <AppBar position="static" color="default">
                <Toolbar>

                    <Typography variant="h6" color="inherit" style={styles.typography} >
                        <Link to={routes.home}>Home</Link>
                    </Typography>

                    <Typography variant="h6" color="inherit" style={styles.typography} >

                        <Link to={routes.admin} >Admin</Link>
                    </Typography>

                    <Typography variant="h6" color="inherit" style={styles.typography} >
                        <Link to={{pathname: routes.cart, state: { modal: true }}}>Cart ({props.cartItemsCount})</Link>
                    </Typography>


                    <Typography variant="h6" color="inherit" style={styles.typography} >
                        <SingIn {...props}/>
                    </Typography>


                </Toolbar>
            </AppBar>
        </div>

    );
};

const mapStateToProps = (state, props) => ({
    cartItemsCount: state.cart.items.length,
    token: state.app.token,
    user: state.app.user,
    location: props.location,
});

const mapStateToDispatch = {
    removeToken: appOperations.removeToken,
};

export default connect(mapStateToProps, mapStateToDispatch)(withStyles(styles)(Header));