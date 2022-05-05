/* -- Create global variables -- */
server_status = "loading";

/* -- Define variables -- */
my_server_ip = "join.rpimc.xyz"
my_server_port = 25565

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
    /* tell if the server is online or not */
    if(data.includes('{"error":"')) {
      server_status = "offline";
    } else {
      server_status = "online";
    }
    // console.log(data);
    console.log("Server is " + server_status);
  });
    // var t = setInterval(runFunction,3000);
  }

  function updateServerStatusText () {
    if(server_status === "online") {
      colorById("server-status-text", "green");
      textById("server-status-text", "Online");
    } else {
      colorById("server-status-text", "red");
      textById("server-status-text", "Offline");
    }
    
  }

  /* -- run all functions -- */
  colorById("server-status-text", "loading");
  textById("server-status-text", "Loading...");

  isServerOnline(my_server_ip, my_server_port);
  setInterval(function(){
    isServerOnline(my_server_ip, my_server_port);
    updateServerStatusText();
  }, 6000);

});
