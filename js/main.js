/* -- Server status -- */

$(document).ready(function(){
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
  
  function isServerOnline (ip, port = 25565) {
    $.getJSON('https://api.minetools.eu/ping/join.rpimc.xyz/25565', function(data) {
    setTimeout(function(){
      data = JSON.stringify(data);
      console.log(data);
    }, 0);
  });
    // var t = setInterval(runFunction,3000);
  }
  
  isServerOnline();
  
  colorById("server-status-text", "red");
  textById("server-status-text", "- WIP -");

});
