import React from 'react';
import {string} from 'prop-types';
import {Link} from 'react-router-dom';
import {formatRoute} from 'react-router-named-routes';
import {routes} from "../../routes";
import s from './ProductLink.module.css';
import Button from '@material-ui/core/Button';
import PageviewIcon from '@material-ui/icons/Pageview';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';




const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

const ProductLink = ({id, title, image, description, price}) => (
    <Grid item xs={6}>
        <Paper elevation={4}>
            <Grid item xs={12} >
                <Grid container spacing={8}>
                    <Grid item xs={4} sm={4} className={s.divImage}>
                        <img className={s.image} src={image} alt={title}/>
                    </Grid>
                    <Grid item xs={8} sm={8}>
                        <Grid container spacing={8} className={s.divText}>
                            <Grid item xs={12} >
                                <Typography align={"left"} variant={'h5'}>
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <Typography variant={"caption"} align={"left"}>
                                    {description.substr(0, 60) + "..."}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container alignItems={"center"} justify={"flex-start"}>
                                    <Grid item xs={8}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography  align={"left"} variant={"subheading"}>
                                                    Price: {price} грн
                                                </Typography>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Link to={formatRoute(routes.productPage, {id})}>
                                            <Button variant="fab" color="primary" mini>
                                                <PageviewIcon/>
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container className={s.priceStyle}>
                                <Grid item xs={6} sm={6} style={{paddingLeft: 0, paddingRight: 0}} >
                                </Grid>
                                <Grid item xs={4} sm={4} className={s.btnBuy} style={{marginRight: 10, marginBottom: 5}}>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Paper>
    </Grid>
);




ProductLink.propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    typeShow: string,
};

export default withStyles(styles)(ProductLink);