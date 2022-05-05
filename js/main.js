/* -- Server status -- */
server_status = "loading";

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
    $.getJSON('https://api.minetools.eu/ping/' + ip + '/' + port, function(data) {
    data = JSON.stringify(data);
    console.log(data);
    /* tell if the server is online or not */
    if(data.includes('{"error":"')) {
      server_status = "offline";
    } else {
      server_status = "online";
    }
  });
    // var t = setInterval(runFunction,3000);
  }

  /* -- run all functions -- */
  colorById("server-status-text", "red");
  textById("server-status-text", "- WIP -");

  isServerOnline("join.rpimc.xyz", 25565);

});
