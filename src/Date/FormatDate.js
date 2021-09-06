const FormatDate=(da)=>{
     const d=new Date(da);
     let month=`${d.getMonth()+1}`;//because month start form 0 jan=0 feb=1.......dec=11;
     let day=`${d.getDate()}`;
     const year=d.getFullYear() ;

     if(month.length<2){
          month=`0${month}`
     }
     if(day.length<2){
          day=`0${day}`;
     }

     return [year,month,day].join("-");
}

export default FormatDate;