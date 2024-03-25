document.addEventListener("DOMContentLoaded",()=>{

    const formulario = document.getElementById("formularioInicioSesion");
    formulario.addEventListener("submit",(event)=>{
        event.preventDefault();
        const{cedula, contrasena}= obtenerDatosFormulario();
        const esValido= validarContrasena(contrasena) && validarCedula(cedula);
        esValido ? manejarExito(): manejarError();

    });

});

const obtenerDatosFormulario=()=>{

    const cedula=document.getElementById("cedula").value.trim();
    const contrasena=document.getElementById("contrasena").value.trim();

    return {cedula,contrasena};

};


const validarCedula = (cedula) =>/^\d{2}-\d{4}-\d{4}$/.test(cedula);

const validarContrasena = (contrasena) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/.test(contrasena);


const manejarExito=()=>{
    alert("Inicio de sesión exitoso");
    limpiarCampoTexto();
}

const manejarError=()=>{
    alert("Los datos no son validos");
}

const limpiarCampoTexto=()=>{

    const campos= document.querySelectorAll("#formulario input[type='email'], #formulario input[type='password']");
    campos.forEach((campo)=>campo.value="");
}