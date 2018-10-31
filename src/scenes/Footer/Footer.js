import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core/styles";


const styles = {
    root: {

        backgroundColor: 'red',
        bottom: 0,
        top: 'auto',
        position: 'absolute',
        zIndex: 1,

        left: 0,
        right: 0,
        margin: '0 auto',
    },

};


const Footer = () => (
    <div className={styles.root}>
        <AppBar position="static" color="default" bottom='0'>
            <Toolbar>
                <Typography variant="title">Create by Kanoru</Typography>
            </Toolbar>
        </AppBar>
    </div>
);

export default withStyles(styles)(Footer)