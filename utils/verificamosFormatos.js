export const verificarFormatos = async () => {
  const nombreElem = document.getElementById('nombre');
  const apellidosElem = document.getElementById('apellidos');
  const dniElem = document.getElementById('dni');
  const correoElem = document.getElementById('correo');
  const telefonoElem = document.getElementById('telefono');
  const codigoPostalElem = document.getElementById('codigo_postal');
  const fechaCarnetElem = document.getElementById('fecha_carnet');
  const matriculaElem = document.getElementById('matricula');
  const fechaMatriculacionElem = document.getElementById('fecha_matriculacion');
  const fechaNacimientoElem = document.getElementById('fecha_nacimiento');
  const sexoElem = document.getElementById('sexo');
  const comunidadElem = document.getElementById('comunidad');
  const provinciaElem = document.getElementById('provincia');
  const marcaElem = document.getElementById('marca');
  const modeloElem = document.getElementById('modelo');
  const tipoSeguroElem = document.getElementById('tipo_seguro');
  const tipoVehiculoElem = document.getElementById('tipo_vehiculo');
  const fotoCarnetElem = document.getElementById('foto_carnet');
  const terminosElem = document.getElementById('terminos');

  // Verificar que el nombre es un string
  if (typeof nombreElem.value !== 'string') {
    alert('El campo nombre no está en su formato correcto');
    return;
  }

  // Verificar que los apellidos son un string
  if (typeof apellidosElem.value !== 'string') {
    alert('El campo apellidos no está en su formato correcto');
    return;
  }

  // Verificar que el DNI es un string
  if (typeof dniElem.value !== 'string') {
    alert('El campo DNI no está en su formato correcto');
    return;
  }

  // Verificar que el correo es un string
  if (typeof correoElem.value !== 'string') {
    alert('El campo correo no está en su formato correcto');
    return;
  }

  // Verificar que el teléfono es un string
  if (typeof telefonoElem.value !== 'string') {
    alert('El campo teléfono no está en su formato correcto');
    return;
  }

  // Verificar que el código postal es un string
  if (typeof codigoPostalElem.value !== 'string') {
    alert('El campo código postal no está en su formato correcto');
    return;
  }

  // Verificar que la fecha del carnet es un string
  if (typeof fechaCarnetElem.value !== 'string') {
    alert('El campo fecha del carnet no está en su formato correcto');
    return;
  }

  // Verificar que la matrícula es un string
  if (typeof matriculaElem.value !== 'string') {
    alert('El campo matrícula no está en su formato correcto');
    return;
  }

  // Verificar que la fecha de matriculación es un string
  if (typeof fechaMatriculacionElem.value !== 'string') {
    alert('El campo fecha de matriculación no está en su formato correcto');
    return;
  }

  // Verificar que la fecha de nacimiento es un string
  if (typeof fechaNacimientoElem.value !== 'string') {
    alert('El campo fecha de nacimiento no está en su formato correcto');
    return;
  }

  // Verificar que el sexo es un string
  if (typeof sexoElem.value !== 'string') {
    alert('El campo sexo no está en su formato correcto');
    return;
  }

  // Verificar que la comunidad es un string
  if (typeof comunidadElem.value !== 'string') {
    alert('El campo comunidad no está en su formato correcto');
    return;
  }

  // Verificar que la provincia es un string
  if (typeof provinciaElem.value !== 'string') {
    alert('El campo provincia no está en su formato correcto');
    return;
  }

  // Verificar que la marca es un string
  if (typeof marcaElem.value !== 'string') {
    alert('El campo marca no está en su formato correcto');
    return;
  }

  // Verificar que el modelo es un string
  if (typeof modeloElem.value !== 'string') {
    alert('El campo modelo no está en su formato correcto');
    return;
  }

  // Verificar que el tipo de seguro es un string
  if (typeof tipoSeguroElem.value !== 'string') {
    alert('El campo tipo de seguro no está en su formato correcto');
    return;
  }

  // Verificar que el tipo de vehículo es un string
  if (typeof tipoVehiculoElem.value !== 'string') {
    alert('El campo tipo de vehículo no está en su formato correcto');
    return;
  }

  // Verificar que la foto del carnet es un archivo
  if (
    fotoCarnetElem.files.length === 0 ||
    !(fotoCarnetElem.files[0] instanceof File)
  ) {
    alert('El campo foto del carnet no está en su formato correcto');
    return;
  }

  // Verificar que los términos son un booleano
  if (typeof terminosElem.checked !== 'boolean') {
    alert('El campo términos no está en su formato correcto');
    return;
  }
};
