
var listitem=1;
function addToList(){
    if(listitem>=4){
        listitem=1;
    }
//var listitem=document.getElementById("idname");
 var node=document.createElement("li");
     if( listitem==1){
         var unitnode ="The Marine";
     }
     if(listitem==2){
         var unitnode ="The Valkyrie";
     }
     if(listitem==3){
         var unitnode ="The Siege Tank";
     }
     listitem++;
      
var newnode =document.createElement("LI");
    textnode= document.createTextNode(unitnode);
 newnode.appendChild(textnode);
 document.getElementById("units").appendChild(newnode);
    }


count=1;
function removeFromList(){
var list=document.getElementById("units");
list.removeChild(list.childNodes[count]);
}


function fmarine() {
          document.getElementById("display").innerHTML = "The Marine #1:Praveen SONI";
        }

function fvalkyrie() {
            document.getElementById("display").innerHTML = "The valkarie #2:Praveen SONI";
          } 
      
function fsiegetank() {
            document.getElementById("display").innerHTML = "The Siege tank #3:Praveen SONI";
          }            
          
          
   
        

