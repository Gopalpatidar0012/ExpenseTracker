import React from 'react';
import { List,ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction,IconButton,Slide } from '@material-ui/core';
import {Delete,MoneyOff} from "@material-ui/icons";
import { useContext } from 'react';
import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from "./Style";
const Lists = () => {
    const classes=useStyles();
    const {deleteTransection, transactions}= useContext( ExpenseTrackerContext);
    // console.log(globle);
  
    return (
       <List dense={false} className={classes.list}>
       {transactions.map((transection)=>(
           <Slide direction="down" in mountOnEnter unmountOnExit key={transection.id}> 
             <ListItem>
                 <ListItemAvatar>
                     <Avatar className={transection.type=="income"? classes.avatarIncome:classes.avatarExpense}>
                         <MoneyOff/>
                     </Avatar>
                 </ListItemAvatar>
                 <ListItemText primary={transection.category} secondary={`${transection.amount}-${transection.date}`}/>
                 <ListItemSecondaryAction >
                     <IconButton edge="end" aria-label="delete" onClick={()=>deleteTransection(transection.id)}>
                         <Delete/>
                     </IconButton>
                 </ListItemSecondaryAction>
             </ListItem>
           </Slide>
       ))}
           
       </List>
    );
}

export default Lists
