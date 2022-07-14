
var flag=true;
function display(){
    var str=`
    <form class="form" name="f1">
        <h4>
            <label>Name &nbsp;</label><input type="text" name="Name" ><br><br>
            <label>Type &nbsp;</label><select name="Type" id="Type" onchange="myfunc(this.value)">
                <option value="" >select</option>
                <option value="Hoam" >Hoam</option>
                <option value="Car">Car</option>
                <option value="Personal">Personal</option>
            </select><br><br>
            <label >Amount &nbsp;</label><input type="number" name="Amount"><br><br>
            <label>R.O.I &nbsp;</label><input type="number" name="ROI" disabled ><br><br>
            <label>Duration &nbsp;</label><input type="number" name="Duration" min=1 ><br><br>
            <label>EMI &nbsp;</label><input type="number" name="EMI" disabled><br><br>
            <input type="button" name="Calculate" value="Calculate Loan" class="button" onclick="CalculateEMI(Amount.value,ROI.value,Duration.value,Type.value)">
            <input type="button" name="EXIT" value="EXIT" class="button" onclick="hide()">
        </h4>
    </form>
    `
    document.getElementById("d1").innerHTML=str;
    
}
function myfunc(choice){
  switch(choice){   
      case "Hoam":   document.f1.ROI.value=7;
                     break;

      case "Car" :   document.f1.ROI.value=9;
                     break;

      case "Personal":document.f1.ROI.value=12;
                      break; 

  }
}
function hide(){
    document.getElementById("d1").innerHTML= "";
}
function CalculateEMI(p1,r1,n1,choice){
   switch(choice){
        case "Hoam": if(parseInt(n1)>25){ alert("Duration should be less then 25 for Hoam Loan"); return;}
                    break;
        case "Car": if(parseInt(n1)>7){ alert("Duration should be less then 7 for Car Loan"); return ;}
                    break; 
         case "Car": if(parseInt(n1)>5) {alert("Duration should be less then 5 for Personal Loan");return ;}
                    break;                         
   }
   var p=parseInt(p1);
   var n=parseInt(n1);
   var r=parseInt(r1);
   n=n*12;
   var emi= p*r*(1+r)*n/((1 + r)*n - 1);
   document.f1.EMI.value= emi;
   return;
}

