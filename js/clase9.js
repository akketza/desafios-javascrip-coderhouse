function handle(e) {
  if (e.keyCode === 13) {
    let value = document.getElementById("value").value;
    document.getElementById("print").innerHTML = `${value}`;
  }
}
