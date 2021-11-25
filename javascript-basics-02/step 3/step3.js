document.getElementById("name").addEventListener("change",test)
function test(){
    const text=document.querySelector("#text");
    const enter_text=document.querySelector("#name");
    text.innerHTML=enter_text.value;
    enter_text.value="";

}