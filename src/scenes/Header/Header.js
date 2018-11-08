import {Link} from "react-router-dom";
import {routes} from "../../routes";
import React from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {ModalContainer} from "../../Modal/Modal";



const styles = {
    root: {
        flexGrow: 1,
    },
    typography: {
        paddingRight: 30,
    }
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
                        <Link to={routes.admin}>Admin</Link>
                    </Typography>


                    <Typography variant="h6" color="inherit" style={styles.typography} >
                        <Link to={routes.cart}>Cart ({props.cartItemsCount})</Link>
                    </Typography>


                </Toolbar>
            </AppBar>
        </div>

    );
};

const mapStateToProps = (state) => ({
    cartItemsCount: state.cart.items.length,
});


export default connect(mapStateToProps)(withStyles(styles)(Header));