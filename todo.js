
var c=0;

function taskcounter(event)
    {
        
        if(event.checked==true)
        {
            c++;
        }
        else{
            c--;
        }
        if(c===5)
        {
            alert("Congrats 5 tasks have been successfully completed")
        }
    }



function ajax()
{

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
           var output ="";
           for(var i=0;i<response.length;i++)
           {
               
               output +="<li>"+"<Input type='checkbox' onclick='taskcounter(this)'>"+response[i].title+"</Input>"+"</li>";
            
            }
             document.getElementById("demo").innerHTML = output;
           
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }
    
    