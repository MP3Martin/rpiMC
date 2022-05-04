/* -- Server status -- */

function colorById (id, my_color = "black") {
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
  var t = setInterval(runFunction,3000);
}

function runFunction () {
  console.log("test");
}

isServerOnline();

colorById("server-status-text", "green");

