// we create custom Hook (useTransaction) humne hi banaya h yah hook for chartDATA in our project

import { useContext } from "react";
import { ExpenseTrackerContext} from "./context/context";
import {incomeCategories,expenseCategories,resetCategories} from "./constants/categories";


//we take one parameter (title) of income categori and expenses categori
const useTransaction =(title)=>{
    resetCategories();//for reset the amount of specific cetegories to 0. (amount ko 0karta hai)
    const { transactions}=useContext(ExpenseTrackerContext);//take transactions for useContext(ExpenseTrackerContext)
    const TransactionPerType = transactions.filter((t)=>t.type===title);
    // [
    //     {id:1, type:"income", amount:25, category:"salary"},
    //     {id:1, type:"income" ,amount:25, category:"salary"}, 
    //     {id:1, type:"income" ,amount:25, category:"bussiness"} 
    //  ]

    // transaction se data filter kar raha ha(jese ager humne title me= income 
    // diya to --income vala data filter hojayega)
    const total= TransactionPerType.reduce((acc,currVal)=>acc += currVal.amount,0);

    // console.log(total);
    
     //value sum karne k liye use kar rahe hai (acc=> k ander initial value 0 hai 
     // or currval->ke ander amount hai to (acc=acc+currval.amount),manlo accval ->19 hai to(acc=>0+19))
    const  categories= title==="income"?incomeCategories:expenseCategories;
   //title===income hua to (categories )k andur incomeCategories ka data aa jayega; 
 
//    console.log(categories);



//    export const incomeCategories = [
//     { type: 'Business', amount: 0, color: incomeColors[0] },
//     { type: 'Investments', amount: 0, color: incomeColors[1] },
//     { type: 'Extra income', amount: 0, color: incomeColors[2] },
//     { type: 'Deposits', amount: 0, color: incomeColors[3] },
//     { type: 'Lottery', amount: 0, color: incomeColors[4] },
//    
//   ];
   
       //[
    //     {id:1, type:"income", amount:25, category:"salary"},
    //     {id:1, type:"income" ,amount:25, category:"salary"}, 
    //     {id:1, type:"income" ,amount:25, category:"bussiness"} 
    //  ]
   
   // loop chalega  (incomeCategories)  or jo data filter hokar aaya  (TransactionPerType) isme
    TransactionPerType.forEach((t)=>{
        const category=categories.find((c)=>c.type===t.category)
        // console.log(category);
        //matlab category me jo bhi type aaya jese aaya salary to uska amount add kardo (t.amount->TransactionPerType ka aayega)
        //amount increment ho raha hai (incomeCategories) ke amount me
        if(category) category.amount +=t.amount;
        //console.log(category.amount);
      //  export const incomeCategories = [
            //     { type: 'Business', amount: 25, color: incomeColors[0] },
            //     { type: 'salary', amount: 50, color: incomeColors[1] },
            //     { type: 'Extra income', amount: 0, color: incomeColors[2] },
           
            //    
            //   ];
    
    });
   
    //incomeCategories  me amount k value 0 badhe h usko hi filteredCategories store karo bas
    //categories ke amount me jo 0 be badha h vo (filteredCategories) me store hojayega
    const filteredCategories =categories.filter((c)=>c.amount > 0);







    //chartData ke andar datasets property hai array or uske undar object

     //  export const incomeCategories = [
            //     { type: 'Business', amount: 25, color: incomeColors[0] },
            //     { type: 'salary', amount: 50, color: incomeColors[1] },
            //     { type: 'Extra income', amount: 0, color: incomeColors[2] },
           
            //    
            //   ];


    const chartData ={
        datasets:[{
            data : filteredCategories.map((c)=> c.amount),//filteredCategories jo bhi amount  h vah data me jayega
            backgroundColor : filteredCategories.map((c)=> c.color)//filteredCategories jo bhi color  h vah backgroundColor me jayega
        }],
        labels: filteredCategories.map((c)=> c.type)//filteredCategories jo bhi type  h vah labels me jayega
    }

  
    
    return {total,chartData}
}

export default useTransaction;