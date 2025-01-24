export const validarnombre_y_apellido = async () => {
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellidos');

  if (nombre.value.length > 30 || apellido.value.length > 30) {
    nombre.style.background = 'red';
    window.alert('nombre o apellido incorrectos maximo 30 caracteres');
    return;
  }

  if (!/^[a-zA-Z]+$/.test(nombre.value)) {
    nombre.style.background = 'red';
    window.alert('solo puedes poner letras y sin espacios');
    return;
  }
};

export const validarfechas = async () => {
  const fecha_nacimiento_elem = document.getElementById('fecha_nacimiento');
  const fecha_carnet_elem = document.getElementById('fecha_carnet');
  const fecha_matricula_elem = document.getElementById('fecha_matriculacion');

  const fecha_nacimiento = new Date(fecha_nacimiento_elem.value);
  const fecha_carnet = new Date(fecha_carnet_elem.value);
  const fecha_matricula = new Date(fecha_matricula_elem.value);
  const fecha_actual = new Date();

  const edadMinima = new Date(
    fecha_actual.getFullYear() - 18,
    fecha_actual.getMonth(),
    fecha_actual.getDate(),
  );

  if (fecha_nacimiento > edadMinima) {
    fecha_nacimiento_elem.style.background = 'red';
    window.alert('Debes tener al menos 18 años');
    return;
  }

  if (fecha_carnet < fecha_actual) {
    fecha_carnet_elem.style.background = 'red';
    window.alert('Tu Carnet está caducado');
    return;
  }

  if (fecha_matricula < fecha_actual) {
    fecha_matricula_elem.style.background = 'red';
    window.alert(
      'La fecha de matriculación no puede ser anterior a la fecha actual',
    );
    return;
  }
};

export const formato_ISO = async () => {
  const matricula_elem = document.getElementById('matricula');
  const codigo_postal_elem = document.getElementById('codigo_postal');
  const fichero_elem = document.getElementById('foto_carnet');

  if (!/^[0-9]{4}[- ]?[A-Z]{3}$/.test(matricula_elem.value)) {
    matricula_elem.style.background = 'red';
    window.alert('no es una matricula posible en España');
    return;
  }

  if (isNaN(codigo_postal_elem.value) || codigo_postal_elem.value.length != 5) {
    codigo_postal_elem.style.background = 'red';
    window.alert('tu codigo postal es demasiado largo');
    return;
  }

  const file = fichero_elem.files[0];
  if (!file || file.type !== 'image/jpeg') {
    fichero_elem.style.background = 'red';
    window.alert('El fichero debe ser una imagen en formato JPG');
    return;
  }
};
