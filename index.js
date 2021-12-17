function display() {
    var txt = document.getElementById("text_id").value;
    document.getElementById("sk").innerHTML = txt;
}

let text_id = document.querySelector("#text_id");
function send() {
  console.log(text_id.value);
}