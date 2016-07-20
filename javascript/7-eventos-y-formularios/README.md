# Ejercicios de eventos y formularios


1. A partir de la página web proporcionada, completar el código JavaScript para que:
Cuando se pinche sobre el primer enlace, se oculte su sección relacionada 
Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos 
Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace 
Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: propiedad innerHTML) 


2. Realiza el ejercicio anterior pasando this como parámetro (y sin pasar un nº 1, 2 o 3). Pista: puedes utilizar la función de DOM previousSibling.


3. Adapta el ejercicio 2 para no tener que utilizar this, usando manejadores semánticos.


4. Crear un programa que nos muestre las coordenadas del ratón dentro del navegador y dentro de la página en la que estamos. Deben quedar claras las diferencias entre las propiedades screen, page y client del evento. 


5. Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. Para determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador() proporcionada.


6. Divide la pantalla en 4 zonas iguales con colores rojo, amarillo, azul y verde. Al pulsar sobre una de ellas, debe aparecer un alert que nos indique el color del área sobre la que se ha hecho clic.


7. Modifica la siguiente función para crear tres cajas de texto, para insertar números, caracteres o ambos. El máximo número de caracteres que puede haber en cada caja son 10.  Comprueba las discrepancias entre distintos navegadores, por ejemplo Chrome y Firefox.
function permite(elEvento, permitidos) {
// Variables que definen los caracteres permitidos
  var numeros = "0123456789";
  var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  var numeros_caracteres = numeros + caracteres;
  var teclas_especiales = [8, 37, 39, 46];
  // 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha
  // Seleccionar los caracteres a partir del parámetro de la función
  switch(permitidos) {
    case 'num':
      permitidos = numeros;
      break;
    case 'car':
      permitidos = caracteres;
      break;
    case 'num_car':
      permitidos = numeros_caracteres;
      break;
  }
  // Obtener la tecla pulsada 
  var evento = elEvento || window.event;
  var codigoCaracter = evento.charCode || evento.keyCode;
  var caracter = String.fromCharCode(codigoCaracter);
  // Comprobar si la tecla pulsada es alguna de las teclas especiales
  // (teclas de borrado y flechas horizontales)
  var tecla_especial = false;
  for(var i in teclas_especiales) {
    if(codigoCaracter == teclas_especiales[i]) {
      tecla_especial = true;
      break;
    }
  }
  // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
  // o si es una tecla especial
  return permitidos.indexOf(caracter) != -1 || tecla_especial;
}
// Sólo números
<input type="text" id="texto" onkeypress="return permite(event, 'num')" />
// Sólo letras
<input type="text" id="texto" onkeypress="return permite(event, 'car')" />
// Sólo letras o números
<input type="text" id="texto" onkeypress="return permite(event, 'num_car')" />


8. Crear una caja de texto donde quepan 100 caracteres, y que a medidas que escribamos nos avise del número de caracteres que quedan libres. Además, se debe permitir pulsar las teclas Backspace, Supr. y las flechas horizontales cuando se haya llegado al máximo número de caracteres. 


9. Crea dos formularios. El primero pedirá  al usuario su nombre, apellido, teléfono, correo electrónico y dni. El segundo pedirá su dirección: dirección, código postal, localidad y provincia. Comprueba mediante expresiones regulares y lanzando un alert que:
Nombre y apellido no tengan números y no estén vacíos.
Que el DNI sea de la forma nueve digitos + letra.
Que el teléfono tenga nueve digitos exclusivamente.
Que el correo electrónico sea de la forma texto@texto.texto
Coloca el foco en el segundo elemento del primer formulario por defecto (apellido).

  La validación se debe hacer mediante clases asociadas a los elementos del   formulario.  Por ejemplo:
  <input type="text" id="nombre" name="nombre" class="requerido texto" />


10. Modifica el ejercicio anterior para que cada vez que haya un error aplique un estilo al campo que origina el error y no envíe el formulario. Cada vez que se le de a enviar, debe “borrar” los errores previos.