function change(){
    var password=document.getElementById("password").value;
    var confirmation=document.getElementById("confirmation").value;
  
    if(confirmation!=password){
        document.getElementById("confirmation").style.borderColor="red";
    }
    else{
        document.getElementById("confirmation").style.borderColor="none";
    }
}