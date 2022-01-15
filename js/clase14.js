$(document).ready(function () {
  console.log("el dom ta ready");

  $("#alertaBoton").click(function () {
    alert("se envio correctamente");
  });

  $("body").append(
    '<div class="column"><div class="formulario"><button class="column" id="btn1">PERSONAJE RANDOM DE HARRY POTTER</button></div></div>'
  );

  const APIURL = "https://hp-api.herokuapp.com/api/characters";

  $("#fadeIn").click(function () {
    $("#alerta").fadeIn();
  });

  $("#btn1").click(() => {
    $.ajax({
      method: "GET",
      url: APIURL,
      success: function (respuesta) {
        console.log(respuesta);
        $("body").append(
          `<div class="column formulario hijos">${JSON.stringify(
            respuesta[Math.floor(Math.random() * 407)].name
          )}</div>`
        );
      },
    });
  });
});
