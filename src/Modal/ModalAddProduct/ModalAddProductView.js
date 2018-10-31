import s from "../Modal.module.css";
import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from "@material-ui/core/Button/Button";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import {withStyles} from "@material-ui/core/styles";

const ModalAddProductView = ({value, id, title, description, price, image, handleChange, onSubmit, handleCloseModal}) =>(
        <form onSubmit={onSubmit}>
            <Grid container>
                <Grid item xs={12} className={s.boxInput}>
                    <Grid container spacing={16}>
                        <Grid item xs={2}>
                            <InputLabel htmlFor={title}>Title</InputLabel>
                        </Grid>
                        <Grid item xs={7}>
                            <Input name='title' fullWidth value={title} onChange={event => handleChange(event)}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={s.boxInput}>
                    <Grid container spacing={16}>
                        <Grid item xs={2}>
                            <InputLabel htmlFor={description}>Description</InputLabel>
                        </Grid>
                        <Grid item xs={7}>
                            <TextField multiline={true}
                                       rows={2}
                                       fullWidth
                                       rowsMax={6}
                                       name='description'
                                       value={description}
                                       onChange={event => handleChange(event)}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={s.boxInput}>
                    <Grid container spacing={16} className={s.imageDiv}>
                        <Grid item xs={2}>
                            <InputLabel htmlFor={image}>Image</InputLabel>
                        </Grid>
                        <Grid item xs={7} >
                            <Input  name='image' fullWidth value={image} onChange={event => handleChange(event)}/>
                        </Grid>
                        <Grid item xs={2}>
                            <img src={image} alt={title} style={{height: 100}}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={s.boxInput}>
                    <Grid container spacing={16} className={s.imageDiv}>
                        <Grid item xs={2}>
                            <InputLabel htmlFor={price}>Price</InputLabel>
                        </Grid>
                        <Grid item xs={7} >
                            <Input  name='price' value={price} onChange={event => handleChange(event)}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={16} className={s.imageDiv}>
                        <Grid item xs={1}>
                            <Button variant="fab" color="primary" mini type='submit' >
                                <AddIcon/>
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="fab" color="secondary" mini onClick={() => handleCloseModal}>
                                <CloseIcon/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
);

export default withStyles(s)(ModalAddProductView);