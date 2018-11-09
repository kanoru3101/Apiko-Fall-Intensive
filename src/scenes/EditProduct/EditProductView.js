import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from "@material-ui/core/Button/Button";
import { Fields } from 'redux-form'


const styles = theme => ({
    formStyle : {
        fontFamily: "Arial Black"
    },
    boxInput : {
        paddingBottom: 15
    },
    imageDiv : {
        justifyItems: "center",
        alignItems: "center",

    }
});



const EditProductView = ({item, onChange, onSubmit}) => {


   return(
       <form className={styles.formStyle} onSubmit={onSubmit}>
           <Grid container spacing={24}>
               <Grid item xs={12} className={styles.boxInput}>
                   <Grid container spacing={16}>
                       <Grid item xs={2}>
                           <InputLabel htmlFor={item.title}>Title</InputLabel>
                       </Grid>
                       <Grid item xs={8}>
                           <Input name='title' fullWidth value={item.title} onChange={onChange('title')}/>
                       </Grid>
                   </Grid>
               </Grid>
               <Grid item xs={12} className={styles.boxInput}>
                   <Grid container spacing={16}>
                       <Grid item xs={2}>
                           <InputLabel htmlFor={item.description}>Description</InputLabel>
                       </Grid>
                       <Grid item xs={8}>
                           <TextField fullWidth multiline rows={4} name='description' value={item.description} />
                       </Grid>
                   </Grid>
               </Grid>
               <Grid item xs={12} className={styles.boxInput}>
                   <Grid container spacing={16} className={styles.imageDiv}>
                       <Grid item xs={2}>
                           <InputLabel htmlFor={item.image}>Image</InputLabel>
                       </Grid>

                       <Grid item xs={7} >
                           <Input name='image' fullWidth value={item.image} />
                       </Grid>
                       <Grid item xs={2}>
                           <img src={item.image} alt={item.title} style={{maxHeight: 100, }}/>
                       </Grid>
                   </Grid>
               </Grid>
               <Grid item xs={12} className={styles.boxInput}>
                   <Grid container >
                       <Grid item xs={2}>
                           <InputLabel htmlFor={item.price}>Price</InputLabel>
                       </Grid>
                       <Grid item xs={2}>
                           <Input name='price' fullWidth value={item.price} />
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

};


export default EditProductView;