//javaScript

/*date picker & format set to dd/mm/yyyy*/
var dt=new Date(); 
document.querySelector('#date').innerHTML=(("0"+dt.getDate()).slice(-2)) +"/"+ (("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ (dt.getFullYear());