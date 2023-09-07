var display =document.getElementById('result');
var button=document.getElementsByClassName('button')


var operator1=0;
var operator2=null;
var operator=null;
var result=0;


for(var i=0;i<button.length;i++)
{
    
    button[i].addEventListener('click',function(){
        // console.log(button[i]);
       
        
        var value = this.getAttribute('value');
        if(display.innerHTML=="1619" )
        {
            const calculator = document.getElementById("calculator");
            const rows = calculator.querySelectorAll(".row");
               for (let i = 0; i < rows.length; i++) 
               {
                    rows[i].style.opacity = "0.2";
                 }
               calculator.style.backgroundImage = "url(cat.jpg)";
               calculator.style.backgroundSize = "cover";
        }
   
        if(value=='+' || value=='-' || value=='*' || value=='/')
        {
           operator=value;
           
           operator1=parseFloat(e);
           console.log(operator)
           console.log(operator1+"opreator 1");
           display.innerText=value;
 
        }
       else  if (value=='=')
       {
        let num =e.replace(/[*\-\/+]/g, '');
        console.log(num);
        operator2=parseFloat(num);
        display.innerText=value;
       
        console.log(operator1)
        console.log(operator)
        console.log(operator2)
       
         
        result=(eval(operator1 + operator + operator2));
        display.innerText=result;

        


       }else   if(value=='Del')
       {
           display.innerText = display.innerText.slice(0, -1);
       }
       
        else
        {
            e=display.innerText += value;

        }
        if(value=='C')
        {
            
            display.innerHTML="";
        }
        if(value=="%")
        {
            let num =e.replace(/[*\-\/+]/g, '');
        console.log(num);
        operator2=parseFloat(num);
        display.innerText=value;
        result=eval((operator2/100)*operator1)
        
        console.log(result);
        finalresult=(operator1-result);
        display.innerText=finalresult;

        }
   
    })

}
document.addEventListener('keypress',function(event)
{
    var value=String.fromCharCode(event.keyCode);
    console.log('keydown',value);
    if(display.innerHTML=="lovelif" || display.innerHTML=="LOVELIF" || display.innerHTML=="Lovelif" || display.innerHTML=="1619")
    {
        const calculator = document.getElementById("calculator");
        const rows = calculator.querySelectorAll(".row");
           for (let i = 0; i < rows.length; i++) 
           {
                rows[i].style.opacity = "0.2";
             }
           calculator.style.backgroundImage = "url(cat.jpg)";
           calculator.style.backgroundSize = "cover";
    }
    
    if(value=='+' || value=='-' || value=='*' || value=='/')
        {
           operator=value;
           
           operator1=parseFloat(e);
           console.log(operator)
           console.log(operator1+"opreator 1");
           display.innerText=value;
 
        }
       else  if(event.keyCode==13)
       {
        let num =e.replace(/[*\-\/+]/g, '');
        console.log(num);
        operator2=parseFloat(num);
        display.innerText=value;
       
        console.log(operator1)
        console.log(operator)
        console.log(operator2)
       
         
        result=(eval(operator1 + operator + operator2));
        display.innerText=result;

        


       }else   if(value=='Del' || event.keyCode==66 || value=='b')
       {
           display.innerText = display.innerText.slice(0, -1);
       }
       
        else
        {
            e=display.innerText += value;

        }
        if(value=='C' || value=='c')
        {
            
            display.innerHTML="";
        }
        if(value=="%")
        {
            let num =e.replace(/[*\-\/+]/g, '');
        console.log(num);
        operator2=parseFloat(num);
        display.innerText=value;
        result=eval((operator2/100)*operator1)
        
        console.log(result);
        finalresult=(operator1-result);
        display.innerText=finalresult;

        }
   

})
