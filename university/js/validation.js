window.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  var nombreInput = document.querySelector("input[type='text']");
  var emailInput = document.querySelector("input[type='email']");
  var contraseñaInput = document.querySelector("input[type='password']");
  var edadInput = document.querySelector("input[type='number']");
  var telefonoInput = document.querySelector("input[type='tel']");
  var direccionInput = document.querySelector("input[type='text']");
  var ciudadInput = document.querySelector("input[type='text']");
  var codigoPostalInput = document.querySelector("input[type='number']");
  var dniInput = document.querySelector("input[type='number']");
  var botonEnviar = document.querySelector("button");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });

  nombreInput.addEventListener("blur", function () {
    validateNombre();
  });

  emailInput.addEventListener("blur", function () {
    validateEmail();
  });

  contraseñaInput.addEventListener("blur", function () {
    validateContraseña();
  });

  edadInput.addEventListener("blur", function () {
    validateEdad();
  });

  telefonoInput.addEventListener("blur", function () {
    validateTelefono();
  });

  direccionInput.addEventListener("blur", function () {
    validateDireccion();
  });

  ciudadInput.addEventListener("blur", function () {
    validateCiudad();
  });

  codigoPostalInput.addEventListener("blur", function () {
    validateCodigoPostal();
  });

  dniInput.addEventListener("blur", function () {
    validateDNI();
  });

  function validateForm() {
    validateNombre();
    validateEmail();
    validateContraseña();
    validateEdad();
    validateTelefono();
    validateDireccion();
    validateCiudad();
    validateCodigoPostal();
    validateDNI();
    submitForm();
  }

  function validateNombre() {
    var nombre = nombreInput.value.trim();
    if (nombre.length < 6 || nombre.indexOf(" ") === -1) {
      showError(
        nombreInput,
        "El nombre completo debe tener al menos 6 letras y un espacio entre medio."
      );
    } else {
      removeError(nombreInput);
    }
  }

  function validateEmail() {
    var email = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError(emailInput, "Ingresa un correo electrónico válido.");
    } else {
      removeError(emailInput);
    }
  }

  function validateContraseña() {
    var contraseña = contraseñaInput.value.trim();
    var contraseñaRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!contraseñaRegex.test(contraseña)) {
      showError(
        contraseñaInput,
        "La contraseña debe tener al menos 8 caracteres y contener letras y números."
      );
    } else {
      removeError(contraseñaInput);
    }
  }

  function validateEdad() {
    var edad = parseInt(edadInput.value.trim(), 10);
    if (isNaN(edad) || edad < 18) {
      showError(edadInput, "Debes tener al menos 18 años.");
    } else {
      removeError(edadInput);
    }
  }

  function validateTelefono() {
    var telefono = telefonoInput.value.replace(/\D/g, "");
    if (telefono.length < 7) {
      showError(telefonoInput, "Ingresa un número de teléfono válido.");
    } else {
      removeError(telefonoInput);
    }
  }

  function validateDireccion() {
    var direccion = direccionInput.value.trim();
    if (direccion.length < 5 || !/^[a-zA-Z0-9 ]+$/.test(direccion)) {
      showError(
        direccionInput,
        "La dirección debe tener al menos 5 caracteres y contener letras, números y un espacio."
      );
    } else {
      removeError(direccionInput);
    }
  }

  function validateCiudad() {
    var ciudad = ciudadInput.value.trim();
    if (ciudad.length < 3) {
      showError(ciudadInput, "La ciudad debe tener al menos 3 caracteres.");
    } else {
      removeError(ciudadInput);
    }
  }

  function validateCodigoPostal() {
    var codigoPostal = codigoPostalInput.value.trim();
    if (codigoPostal.length < 3) {
      showError(
        codigoPostalInput,
        "El código postal debe tener al menos 3 caracteres."
      );
    } else {
      removeError(codigoPostalInput);
    }
  }

  function validateDNI() {
    var dni = dniInput.value.trim();
    var dniLength = dni.length;
    if (dniLength !== 7 && dniLength !== 8) {
      showError(dniInput, "El DNI debe tener 7 u 8 dígitos.");
    } else {
      removeError(dniInput);
    }
  }

  function showError(input, message) {
    var parent = input.parentNode;
    var error = parent.querySelector(".error-message");
    if (!error) {
      error = document.createElement("p");
      error.className = "error-message";
      parent.appendChild(error);
    }
    error.textContent = message;
    parent.classList.add("error");
  }

  function removeError(input) {
    var parent = input.parentNode;
    var error = parent.querySelector(".error-message");
    if (error) {
      parent.removeChild(error);
    }
    parent.classList.remove("error");
  }

  function submitForm() {
    // Aquí puedes agregar la lógica para enviar el formulario si todos los campos son válidos
    alert("Formulario enviado correctamente");
  }
});
