/* -- Server status -- */

function colorById (id, my_color = "black") {
  my_color = my_color.toLowerCase();
  if (my_color === "black") {
    document.getElementById(id).style.color = "#000000";
  } else if (my_color === "loading") {
    document.getElementById(id).style.color = "#FFAE42";
  } else if (my_color === "green") {
    document.getElementById(id).style.color = "#00FF00";
  } else if (my_color === "red") {
    document.getElementById(id).style.color = "#FF0000";
  }
}

function textById (id, my_content = "") {
  document.getElementById(id).textContent = my_content;
}

function httpGet(theUrl)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", theUrl, false );
    xmlhttp.send();    
}

function isServerOnline (ip, port = 25565) {
  console.log(httpGet("https://api.minetools.eu/ping/join.rpimc.xyz/25565"));
  // var t = setInterval(runFunction,3000);
}

isServerOnline();

colorById("server-status-text", "red");
textById("server-status-text", "- WIP -");

$(document).ready(function(){
  $.getJSON('https://api.minetools.eu/ping/join.rpimc.xyz/25565', function(data) {
    setTimeout(function(){
      console.log(data);
    }, 7000);
  });
});
