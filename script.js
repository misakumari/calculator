function getHistory(){
    return document.getElementById("history-value").innerHTML;
}
function printHistory(num){
    return document.getElementById("history-value").innerHTML=num;
}
function getoutput()
{   return document.getElementById("output-value").innerHTML;
}
function printOutput(num)
{   if(num==""){
    return document.getElementById("output-value").innerHTML=num;
    }
    else{
    return document.getElementById("output-value").innerHTML=getFormatted(num);
    }
    }
function getFormatted(num){
    if(num=="-"){
        return "";
    }
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
var operator= document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }                       
        if(this.id=="backspace"){
            var output=reverseNumberFormat(getoutput()).toString();
            if(output){
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            
            var output=getoutput();
            var history=getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!="" ||history!=""){
                output=output==""?output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}
var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getoutput())
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    })
}