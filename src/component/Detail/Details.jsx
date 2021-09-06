import React from 'react';
import {Card,CardContent,Typography, CardHeader} from '@material-ui/core';
import  useStyles from './Styles';
import {Doughnut} from "react-chartjs-2";
import useTransaction from '../../useTransaction';

const Details = ({title}) => {
    const classes=useStyles();
    const {total,chartData} = useTransaction(title);
    return (
        <Card className={title==="income"?classes.income:classes. expences}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h5">
                    ${total}
                </Typography>
                <Doughnut data={chartData}/>
            </CardContent>
        </Card>
    )
}

export default Details
