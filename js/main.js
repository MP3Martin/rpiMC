/* -- Server status -- */
function isServerOnline (ip, port = 25565) {
  var t = setInterval(runFunction,3000);
}

function runFunction () {
  console.log("test");
}

isServerOnline();

document.getElementById("server-status-text").style.color = "#FFAE42";
