import React,{useState,useContext} from 'react';
import {v4 as uuidv4} from "uuid";
import { TextField,Typography,Grid,Button,FormControl,InputLabel,Select,MenuItem } from '@material-ui/core';
import useStyles from "./Style";
import {  ExpenseTrackerContext } from '../../../context/context';
import {incomeCategories,expenseCategories} from "../../../constants/categories";
import FormatDate from '../../../Date/FormatDate';

 const initialState=
        {
            amount:"",
            category:"",
            type:"income",
            date:FormatDate(new Date()),
        };

    // console.log(FormatDate);
const Form = () => {
    const classes=useStyles();
    const[formData,SetformData]=useState(initialState);
    const {  addTransaction}=useContext( ExpenseTrackerContext);  //samaj na haaaa
   
     const createTransaction=()=>{
         const transaction={...formData,amount:Number(formData.amount),id:uuidv4()}
         addTransaction(transaction);

        // SetformData(initialState);    //ess me mene pahle SetformData(initialState) kiya tha to mera income or expenses ka icon chenge nahi horaha tha
                                        // lekin ab horaha ha  (pahle initialstate ka data show ho raha tha )
        SetformData(transaction);

     }

    
    //console.log(formData);

    const selectCategories=formData.type === "income"?incomeCategories:expenseCategories;
   // console.log(selectCategories);
    return (
       <Grid container spacing={2}>
       <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>

        </Typography>
       </Grid>
       <Grid item xs={6}>
        <FormControl fullWidth>
            <InputLabel>type</InputLabel>
            <Select value={formData.type} onChange={(e)=>SetformData({...formData,type:e.target.value})}>
                <MenuItem value="income">income</MenuItem>
                <MenuItem value="expences">expenses</MenuItem>
            </Select>
        </FormControl>
       </Grid>
       <Grid item xs={6}>
       <FormControl fullWidth>
           <InputLabel >category</InputLabel>
           <Select value={formData.category} onChange={(e)=> SetformData({...formData,category:e.target.value})} >
           {selectCategories.map((c)=>( <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>))}
          
           </Select>

       </FormControl>
       </Grid>
       <Grid item xs={6}>
       <TextField type="number" label="Amount"  value={formData.amount} onChange={(e)=>SetformData({...formData,amount:e.target.value})} fullWidth/>
       </Grid>
       <Grid item xs={6}>
            
           <TextField type="date" label="Date" value={formData.date} onChange={(e)=>SetformData({...formData,date:FormatDate(e.target.value)})} fullWidth/>
       </Grid>
       <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
       </Grid>
    )
}

export default Form
