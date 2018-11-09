import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button/Button";
import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add"
import BackspaceIcon from "@material-ui/icons/Backspace";


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },

    title: {
        align: 'left'
    }

});



const ProductPageView = ({item}) => (

    <Grid container spacing={16} justify={"center"} style={{margin: 0}}>
        {console.log('id', item)}

            <Grid item sm={5}>
                <img src={item.image} style={{maxWidth: 250}} alt={item.title}/>
            </Grid>
            <Grid item sm={7}>
                <Grid container spacing={8}>
                    <Paper style={{paddingLeft: 10, paddingBottom: 15}}>
                        <Grid item xs={12} >
                                <Typography style={styles.title} variant={"headline"}>
                                    {item.title}
                                </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid item xs={12} style={{paddingTop: 10}}>
                                <Typography align={"left"} variant={"subtitle1"}>
                                    Опис:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} style={{textJustify: 'center'}}>
                                <Typography align={"justify"} style={{width: '95%'}}>
                                    {item.description}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{paddingTop: 10}}>
                            <Grid container spacing={16}>
                                <Grid item xs={6}>
                                    <Typography variant={"subtitle1"} align={"left"}>
                                        Ціна: {item.price} грн
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button variant={"raised"} color="primary" mini onClick={() => {}}>
                                        <BackspaceIcon/>
                                    </Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button variant={"raised"} color="primary" mini onClick={() => {}}>
                                        <AddIcon/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

    </Grid>
);

export default ProductPageView;