import React from 'react';
import {productPropTypes} from "../../common/propTypes";
import s from './ProductComponent.module.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from "@material-ui/core/Button/Button";



export const ProductComponentView = ({id, title, description, image, price, onChange, onSubmit}) => (
<form onSubmit={onSubmit} className={s.formStyle}>
    <Grid container spacing={24}>
        <Grid item xs={12} className={s.boxInput}>
            <Grid container spacing={16}>
                <Grid item xs={2}>
                    <InputLabel htmlFor={title}>Title</InputLabel>
                </Grid>
                <Grid item xs={8}>
                    <Input name='title' fullWidth value={title} onChange={onChange('title')}/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} className={s.boxInput}>
            <Grid container spacing={16}>
                <Grid item xs={2}>
                    <InputLabel htmlFor={description}>Description</InputLabel>
                </Grid>
                <Grid item xs={8}>
                    <TextField fullWidth multiline rows={4} name='description' value={description} onChange={onChange('description')}/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} className={s.boxInput}>
            <Grid container spacing={16} className={s.imageDiv}>
                <Grid item xs={2}>
                    <InputLabel htmlFor={image}>Image</InputLabel>
                </Grid>
                <Grid item xs={7} >
                    <Input name='image' fullWidth value={image} onChange={() => onChange('image')}/>
                </Grid>
                <Grid item xs={2}>
                    <img src={image} alt={title} style={{maxHeight: 100, }}/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} className={s.boxInput}>
            <Grid container >
                <Grid item xs={2}>
                    <InputLabel htmlFor={price}>Price</InputLabel>
                </Grid>
                <Grid item xs={2}>
                    <Input name='price' fullWidth value={price} onChange={() => onChange('price')}/>
                </Grid>
                <Grid item xs={4}/>
                <Grid item xs={2}>
                    <Button variant="fab" color="primary" mini type='submit' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71
                                 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41
                                 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                        </svg>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
</form>

);


ProductComponentView.propTypes = productPropTypes;

