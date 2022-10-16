const form = document.querySelector(".main-content-wrapper__form");
const email_input = document.querySelector(".main-content-wrapper__form-email-input");
const error = document.querySelector(".main-content-wrapper__form-error");
const error_msg = document.querySelector(".main-content-wrapper__form-error-message");
// Esta funcion se encarga de varias cosas:
/*
1- Que el formulario no recargue el navegador.
2- Tiene asignado el valor del input (inputValue) para compararlo con el regex de la funcion isEmail().
3- Cambia la opacidad de los errores en 1 y el color del borde del input si el email puesto NO coincide con el regex, es decir NO es valido
4- Oculta los mensajes de error y devuelve el color original al border del input en caso de que el email puesto SEA valido. (Si antes fue mal puesto, y luego bien se oculta)
 */ const validateEmail = (e)=>{
    e.preventDefault();
    const inputValue = email_input.value.trim();
    if (!isEmail(inputValue)) {
        email_input.style.border = "1px solid hsl(0, 93%, 68%)";
        error.style.opacity = 1;
        error_msg.style.opacity = 1;
    } else {
        error.style.opacity = 0;
        error_msg.style.opacity = 0;
        email_input.style.border = "1px solid hsl(0, 36%, 70%)";
    }
};
// La funcion que se encarga de comparar lo que esta puesto en el input con la expresion regular (regex).
const isEmail = (email_input)=>{
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_input);
};
// El EventListener que ejecutara la funcion validateEmail cuando se le haga click al boton.
form.addEventListener("submit", validateEmail);

//# sourceMappingURL=index.8f0c9192.js.map
