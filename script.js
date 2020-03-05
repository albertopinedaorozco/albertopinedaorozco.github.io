/* ELEMENTOS HTML */

inputPeso = document.getElementById("Peso")
inputEstatura = document.getElementById("Estatura")
Boton = document.getElementById("Boton")
BotonCancelar = document.getElementById("BotonCancelar")
resultado = document.getElementById("resultado")

BotonCancelar.style.visibility = "hidden";

/* LISTADO DE EVENTOS */



inputPeso.addEventListener("keypress", (event)=>{
    if (event.keyCode === 13) { 
        calcularImc();
        limpiarCampos();
        inputPeso.focus();
        
    } 
})

inputEstatura.addEventListener("keypress", (event)=>{
    if (event.keyCode === 13) { 
        calcularImc();
        limpiarCampos();
        inputPeso.focus();
    } 
})

Boton.addEventListener("click", (event)=>{
    calcularImc();
    
})

BotonCancelar.addEventListener("click", (event)=>{
    limpiarCampos();
    inputPeso.focus();
   
    
    BotonCancelar.style.visibility = "hidden";
    Boton.style.visibility = "visible";
    resultado.innerHTML = "";
    inputPeso.disabled = false;
    inputEstatura.disabled = false;

})


/* LISTADO DE FUNCIONES */

function calcularImc() {
        
    var Peso = document.getElementById("Peso").value;
    var Estatura = document.getElementById("Estatura").value;
    
    if (Peso!="" && Estatura != ""){
        if (Peso >=1 && Estatura >=1) {
            IMC = Peso/(Estatura*Estatura)
            if (IMC<18.5) {
              var Estado='Bajo Peso'
            }else if (IMC<=24.9 && IMC>=18.5) {
              var Estado='Normal'
            }else if (IMC<=29.9 && IMC>=25) {
              var Estado='Sobrepeso'
            }else if (IMC<=34.9 && IMC>=30) {
              var Estado='Obesidad I'
            }else if (IMC<=39.9 && IMC>=35) {
              var Estado='Obesidad II'
            }else if (IMC<=49.9 && IMC>=40) {
              var Estado='Obesidad III'
            }else if (IMC>=50) {
              var Estado='Obesidad IV'
            }
              
              resultado.innerHTML = '<h3>Datos ingresados:</h3><div class="alert alert-secondary" role="alert"> <p> Estatura:<strong>'+ Estatura  +'</strong> mt  </p> <p> Peso:<strong>'+ Peso  +'</strong> kg  </p> </div>' + '<h3>Resultado:</h3><div class="alert alert-warning" role="alert"> Su IMC  es: <strong>'+ IMC.toFixed(2) +'</strong>, actualmente se encuentra en estado: <strong>' + Estado+'</strong>.</div>';
              Boton.style.visibility = "hidden";
              BotonCancelar.style.visibility = "visible";
              limpiarCampos();
    
              inputPeso.disabled = true;
              inputEstatura.disabled = true;
            }else {
              window.alert('Favor introducir valores mayores de 0.')
            }
      }else{
        window.alert('Por favor diligencie los campos')
        inputPeso.focus();
      }
    
   }

   function limpiarCampos(){
        inputPeso.value = "";
        inputEstatura.value = "";
   }