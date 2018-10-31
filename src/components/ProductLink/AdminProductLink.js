import React from 'react';
import {string} from 'prop-types';
import {Link} from 'react-router-dom';
import {formatRoute} from 'react-router-named-routes';
import {routes} from "../../routes";
import s from './ProductLink.module.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';





const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

const AdminProductLink = ({id, title, image, description, price, typeShow, deleteProduct}) => {
    if (typeShow === 'ADMIN'){
        return(
            <Grid container spacing={16} className={s.itemAdmin}>

                <Grid item xs={2} >
                    <img style={{width: 50}} src={image} alt={title}/>
                </Grid>

                <Grid item xs={8} className={s.titleAdmin}>
                    <Link to={formatRoute(routes.productPage, {id})}>
                        {title}
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <Grid container spacing={16}>
                        <Grid item xs={5}>
                            <Link to={formatRoute(routes.adminProduct, {id})}>
                                <Button variant="fab" color="primary"  aria-label="Edit" mini>
                                    <EditIcon/>
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={5}>
                            <Button variant="fab" mini color="secondary" aria-label="Delete" onClick={() => deleteProduct(id)}>
                                <DeleteIcon />
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        );
    }
};



AdminProductLink.propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    typeShow: string,
};

export default withStyles(styles)(AdminProductLink);