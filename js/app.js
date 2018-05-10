//variables

const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar'); 
const formulario= document.getElementById('enviar-mail');
const btnReset = document.getElementById('resetBtn');
// const errorValidacion = document.getElementById('error-label');




//addeventlisteners
eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded', inicioApp);

    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', resetForm);

}


//functions

function inicioApp(){
    //desabilita el boton enviar
    btnEnviar.disabled = true;
}

//validar que los inputs tengan algo escrito
function validarCampo(){
    //valida que el campono este vacio
    validarLongitud(this); 

    if(this.type ==='email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    //valida que los inputs tengan algo dentropara activar el boton
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
    }
}
//resetea el formulario
function resetForm(e){
    e.preventDefault();
    formulario.reset();
}
//hece la funcion de animacion del envio
function enviarEmail(e){
    e.preventDefault();
    
    const spinnerGif = document.getElementById('spinner');

    spinnerGif.style.display = 'block';

    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    setTimeout(() => {
        spinnerGif.style.display = 'none';

        document.getElementById('loaders').appendChild(enviado);
        
        setTimeout(() => {
            enviado.remove();
            formulario.reset();
         }, 3000);

    }, 3000);

    
}
//valida que los imputs enten llenos
function validarLongitud(campo){
   if(campo.value.length > 0 ){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
   } else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
   }
}

function validarEmail(campo){
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error'); 
                    
    }else{
      
                 campo.style.borderBottomColor = 'red';
                 campo.classList.add('error');
                
    }
}
