import React from 'react'
import Details from './component/Detail/Details';
import { Grid } from '@material-ui/core';
import useStyles from "./Style";
import Main from './component/Main/Main';

const App = () => {
    const classes=useStyles();
    return (
        <div>
           <Grid className={classes.grid} container spacing={2} alignItems="center" justify="center" style={{height:"100vh"}}>
           <Grid item xs={12} sm={4}>
           <Details title="income"/>
           </Grid>
           <Grid item xs={12} sm={3}>
           <Main/>
           </Grid>
           <Grid item xs={12} sm={4}>
           <Details title="expences"/>
           </Grid>
           

           </Grid>
        </div>
    )
}

export default App
