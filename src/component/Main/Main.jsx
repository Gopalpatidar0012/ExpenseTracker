import React from 'react';
import {CardHeader,CardContent,Typography, Card, Divider, Grid} from "@material-ui/core";
import useStyles from './Style';
import Form from './Form/Form';
import Lists from "./List/Lists.jsx"
const Main = () => {
    const classes=useStyles();
    return (
        <Card className={classes.root} >
            <CardHeader title="expences tracker" subheader="powerd by speechley" />
        <CardContent>
            <Typography variant="h5" align="center" >
               total balance $100
            </Typography>
            <Typography variant="subtitle1" style={{lineHeight:"1.5em",marginTop:"20px"}}>try saying: add income for category salary</Typography>
       <Divider/>
       {/* form */}
       <Form/>
        </CardContent>
        <CardContent className={classes.cartContent}>
            <Grid container spacing={2} >
            <Grid item xs={12}>
               {/* list */}
               <Lists/>
            </Grid>
            </Grid>
        </CardContent>
        </Card>
    )
}

export default Main
