function gettext(num)
{
 var a=num;
 var textbox=document.getElementById("textbox");
 a=textbox.value+a;
 textbox.value=a;



}
function result(){
    var textbox=document.getElementById("textbox");
    var res=textbox.value;
    
        textbox.value=eval(res);
    

}
function clean(){
    document.getElementById("textbox").value="";
}
