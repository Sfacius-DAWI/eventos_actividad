export const calcularSeguro = async () => {
  const fechaNacimientoElem = document.getElementById('fecha_nacimiento');
  const fechaCarnetElem = document.getElementById('fecha_carnet');
  const tipoVehiculoElem = document.getElementById('tipo_vehiculo');
  const tipoSeguroElem = document.getElementById('tipo_seguro');
  const fechaActual = new Date();

  const fechaNacimiento = new Date(fechaNacimientoElem.value);
  const fechaCarnet = new Date(fechaCarnetElem.value);
  const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  const anosConCarnet = fechaActual.getFullYear() - fechaCarnet.getFullYear();
  const anosVehiculo =
    fechaActual.getFullYear() -
    parseInt(
      document.getElementById('fecha_matriculacion').value.split('-')[0],
    );

  let precioBase;
  switch (tipoSeguroElem.value) {
    case 'terceros':
      precioBase = 500;
      break;
    case 'terceros_ampliado':
      precioBase = 650;
      break;
    case 'con_franquicia':
      precioBase = 750;
      break;
    case 'todo_riesgo':
      precioBase = 1000;
      break;
    default:
      precioBase = 500;
  }

  let penalizacionVehiculo;
  switch (tipoVehiculoElem.value) {
    case 'diesel':
      penalizacionVehiculo = 0.2;
      break;
    case 'gasolina':
      penalizacionVehiculo = 0.15;
      break;
    case 'hibrido':
      penalizacionVehiculo = 0.05;
      break;
    case 'electrico':
      penalizacionVehiculo = 0;
      break;
    default:
      penalizacionVehiculo = 0;
  }

  let precioFinal = precioBase;

  if (edad < 25) {
    precioFinal += precioBase * 0.1;
  }

  if (anosConCarnet > 5) {
    precioFinal -= precioBase * 0.1;
  }

  precioFinal += precioBase * penalizacionVehiculo;

  if (anosVehiculo > 10) {
    precioFinal += precioBase * 0.01 * (anosVehiculo - 10);
  }

  const precios = [
    { tipo: 'Terceros', precio: calcularPrecio('terceros') },
    { tipo: 'Terceros Ampliado', precio: calcularPrecio('terceros_ampliado') },
    { tipo: 'Con Franquicia', precio: calcularPrecio('con_franquicia') },
    { tipo: 'Todo Riesgo', precio: calcularPrecio('todo_riesgo') },
  ];

  mostrarTarjetasSeguro(precios);
};

const calcularPrecio = (tipoSeguro) => {
  const fechaNacimientoElem = document.getElementById('fecha_nacimiento');
  const fechaCarnetElem = document.getElementById('fecha_carnet');
  const tipoVehiculoElem = document.getElementById('tipo_vehiculo');
  const fechaActual = new Date();

  const fechaNacimiento = new Date(fechaNacimientoElem.value);
  const fechaCarnet = new Date(fechaCarnetElem.value);
  const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  const anosConCarnet = fechaActual.getFullYear() - fechaCarnet.getFullYear();
  const anosVehiculo =
    fechaActual.getFullYear() -
    parseInt(
      document.getElementById('fecha_matriculacion').value.split('-')[0],
    );

  let precioBase;
  switch (tipoSeguro) {
    case 'terceros':
      precioBase = 500;
      break;
    case 'terceros_ampliado':
      precioBase = 650;
      break;
    case 'con_franquicia':
      precioBase = 750;
      break;
    case 'todo_riesgo':
      precioBase = 1000;
      break;
    default:
      precioBase = 500;
  }

  let penalizacionVehiculo;
  switch (tipoVehiculoElem.value) {
    case 'diesel':
      penalizacionVehiculo = 0.2;
      break;
    case 'gasolina':
      penalizacionVehiculo = 0.15;
      break;
    case 'hibrido':
      penalizacionVehiculo = 0.05;
      break;
    case 'electrico':
      penalizacionVehiculo = 0;
      break;
    default:
      penalizacionVehiculo = 0;
  }

  let precioFinal = precioBase;

  if (edad < 25) {
    precioFinal += precioBase * 0.1;
  }

  if (anosConCarnet > 5) {
    precioFinal -= precioBase * 0.1;
  }

  precioFinal += precioBase * penalizacionVehiculo;

  if (anosVehiculo > 10) {
    precioFinal += precioBase * 0.01 * (anosVehiculo - 10);
  }

  return precioFinal;
};

const mostrarTarjetasSeguro = (precios) => {
  const contenedor = document.getElementById('contenedorTarjetas');
  contenedor.innerHTML = '';

  precios.forEach((precio, index) => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-seguro';
    tarjeta.style.backgroundColor =
      index === precios.tipoSeguroSeleccionado ? 'lightblue' : 'white';

    const tipoSeguro = document.createElement('h3');
    tipoSeguro.textContent = precio.tipo;

    const precioSeguro = document.createElement('p');
    precioSeguro.textContent = `Precio: ${precio.precio.toFixed(2)}€`;

    const botonDescartar = document.createElement('button');
    botonDescartar.textContent = 'Descartar';
    botonDescartar.addEventListener('click', () => {
      tarjeta.remove();
    });

    const botonContratar = document.createElement('button');
    botonContratar.textContent = 'Contratar';
    botonContratar.addEventListener('click', () => {
      window.alert(
        'Gracias por contratar. Atentamente tu asesor de seguros Santiago Facius',
      );
    });
    botonContratar.addEventListener('mouseover', () => {
      botonContratar.style.backgroundColor = 'green';
      botonContratar.style.transform = 'scale(1.1)';
    });
    botonContratar.addEventListener('mouseout', () => {
      botonContratar.style.backgroundColor = '';
      botonContratar.style.transform = 'scale(1)';
    });

    tarjeta.appendChild(tipoSeguro);
    tarjeta.appendChild(precioSeguro);
    tarjeta.appendChild(botonDescartar);
    tarjeta.appendChild(botonContratar);
    contenedor.appendChild(tarjeta);
  });
};
