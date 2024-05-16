const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = { //En mayusculas ya que las Id que estan en validar campo estan en mayusculas
    Nombre: false,
    Usuario: false,
    Correo: false,
    
}

const validarFormulario = (evento) => {
    switch (evento.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, evento.target, 'Nombre');
            break;
        case "usuario":
            validarCampo(expresiones.usuario, evento.target, 'Usuario');
            break;
        case "correo":
            validarCampo(expresiones.correo, evento.target, 'Correo');
            break;

    }
}



const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo${campo}`).classList.remove('formulario-incorrecto');
        document.getElementById(`grupo${campo}`).classList.add('formulario-correcto');
        document.querySelector(`#grupo${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo${campo} .mensajeError`).classList.remove('mensajeError-activo');
        campos[campo] = true;
    }
    else {
        document.getElementById(`grupo${campo}`).classList.add('formulario-incorrecto');
        document.querySelector(`#grupo${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo${campo} i`).classList.remove('fa-clipboard-check');
        document.querySelector(`#grupo${campo} .mensajeError`).classList.add('mensajeError-activo');
        campos[campo] = false;
    }
}




inputs.forEach((input) => { //CADA INPUT TENDRA UN EVENTO
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();//NO PASARA NADA CUANDO SE PRESIONE EL BOTON7//

    if (campos.Nombre && campos.Correo && campos.Usuario ) {
        formulario.reset();

        document.getElementById('mensajeExito').classList.add('mensajeExito-activo');
        setTimeout(() => {
            document.getElementById('mensajeExito').classList.remove('mensajeExito-activo');
        }, 4000);

        document.querySelectorAll('.formulario-correcto').forEach((icono) => {
            icono.classList.remove('formulario-correcto');
        });

        document.getElementById('formularioMensaje').classList.remove('formularioMensaje-activo');
    }
    else {
        document.getElementById('formularioMensaje').classList.add('formularioMensaje-activo');
    }

}); 