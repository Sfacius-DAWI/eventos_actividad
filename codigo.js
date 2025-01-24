import {
  validarnombre_y_apellido,
  validarfechas,
  formato_ISO,
} from './utils/validar_datos.js';
import { calcularSeguro } from './utils/calcularSeguro.js';

window.addEventListener('DOMContentLoaded', () => {
  alert('todo esta correctamente cargado');
  cargarComunidades();
  cargarProvincias();
  cargarMarcas();
  cargarModelos();

  document
    .getElementById('comunidad')
    .addEventListener('change', actualizarProvincias);
  document
    .getElementById('marca')
    .addEventListener('change', actualizarModelos);
});

export const Validaciones = async () => {
  await validarnombre_y_apellido();
  await validarfechas();
  await formato_ISO();
  await calcularSeguro(); // Asegúrate de que esta sea la última operación
};

document
  .getElementById('botonEnviar')
  .addEventListener('click', async (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    await Validaciones(); // Llamar a Validaciones, que incluye calcularSeguro al final
  });

export const cargarComunidades = () => {
  const comunidadSelect = document.getElementById('comunidad');
  const comunidades = [
    'Andalucía',
    'Aragón',
    'Asturias',
    'Islas Baleares',
    'Canarias',
    'Cantabria',
    'Castilla y León',
    'Castilla-La Mancha',
    'Cataluña',
    'Extremadura',
    'Galicia',
    'Madrid',
    'Murcia',
    'Navarra',
    'La Rioja',
    'País Vasco',
    'Comunidad Valenciana',
    'Ceuta',
    'Melilla',
  ];

  comunidadSelect.innerHTML =
    '<option disabled selected>Seleccione una comunidad</option>';
  comunidades.forEach((comunidad) => {
    const option = document.createElement('option');
    option.value = comunidad.toLowerCase();
    option.textContent = comunidad;
    comunidadSelect.appendChild(option);
  });
};

export const cargarProvincias = () => {
  const provinciaSelect = document.getElementById('provincia');
  provinciaSelect.innerHTML =
    '<option disabled selected>Seleccione una provincia</option>';
};

export const actualizarProvincias = () => {
  const comunidadSeleccionada = document.getElementById('comunidad').value;
  const provinciaSelect = document.getElementById('provincia');
  const provincias = {
    andalucía: [
      'Almería',
      'Cádiz',
      'Córdoba',
      'Granada',
      'Huelva',
      'Jaén',
      'Málaga',
      'Sevilla',
    ],
    aragón: ['Huesca', 'Teruel', 'Zaragoza'],
    asturias: ['Asturias'],
    'islas baleares': ['Mallorca', 'Menorca', 'Ibiza', 'Formentera'],
    canarias: ['Las Palmas', 'Santa Cruz de Tenerife'],
    cantabria: ['Cantabria'],
    'castilla y león': [
      'Ávila',
      'Burgos',
      'León',
      'Palencia',
      'Salamanca',
      'Segovia',
      'Soria',
      'Valladolid',
      'Zamora',
    ],
    'castilla-la mancha': [
      'Albacete',
      'Ciudad Real',
      'Cuenca',
      'Guadalajara',
      'Toledo',
    ],
    cataluña: ['Barcelona', 'Girona', 'Lleida', 'Tarragona'],
    extremadura: ['Badajoz', 'Cáceres'],
    galicia: ['A Coruña', 'Lugo', 'Ourense', 'Pontevedra'],
    madrid: ['Madrid'],
    murcia: ['Murcia'],
    navarra: ['Navarra'],
    'la rioja': ['La Rioja'],
    'país vasco': ['Álava', 'Bizkaia', 'Gipuzkoa'],
    'comunidad valenciana': ['Alicante', 'Castellón', 'Valencia'],
    ceuta: ['Ceuta'],
    melilla: ['Melilla'],
  };

  provinciaSelect.innerHTML = '';
  if (provincias[comunidadSeleccionada]) {
    provincias[comunidadSeleccionada].forEach((provincia) => {
      const option = document.createElement('option');
      option.value = provincia.toLowerCase();
      option.textContent = provincia;
      provinciaSelect.appendChild(option);
    });
  }
};

export const cargarMarcas = () => {
  const marcaSelect = document.getElementById('marca');
  const marcas = [
    'Ford',
    'Audi',
    'BMW',
    'Chevrolet',
    'Citroën',
    'Dacia',
    'Fiat',
    'Honda',
    'Hyundai',
    'Jeep',
    'Kia',
    'Lexus',
    'Mazda',
    'Mercedes-Benz',
    'Mini',
    'Nissan',
    'Opel',
    'Peugeot',
    'Renault',
    'Seat',
    'Skoda',
    'Toyota',
    'Volkswagen',
    'Volvo',
  ];

  marcaSelect.innerHTML =
    '<option disabled selected>Seleccione una marca</option>';
  marcas.forEach((marca) => {
    const option = document.createElement('option');
    option.value = marca.toLowerCase();
    option.textContent = marca;
    marcaSelect.appendChild(option);
  });
};

export const cargarModelos = () => {
  const modeloSelect = document.getElementById('modelo');
  modeloSelect.innerHTML =
    '<option disabled selected>Seleccione un modelo</option>';
};

export const actualizarModelos = () => {
  const marcaSeleccionada = document.getElementById('marca').value;
  const modeloSelect = document.getElementById('modelo');
  const modelos = {
    ford: ['Fiesta', 'Focus', 'Mustang', 'Explorer'],
    audi: [
      'A1',
      'A3',
      'A4',
      'A5',
      'A6',
      'A7',
      'A8',
      'Q2',
      'Q3',
      'Q5',
      'Q7',
      'Q8',
      'e-tron',
    ],
    bmw: [
      'Serie 1',
      'Serie 2',
      'Serie 3',
      'Serie 4',
      'Serie 5',
      'Serie 6',
      'Serie 7',
      'X1',
      'X2',
      'X3',
      'X4',
      'X5',
      'X6',
      'X7',
      'Z4',
      'i3',
      'i4',
      'iX',
    ],
  };

  modeloSelect.innerHTML = '';
  if (modelos[marcaSeleccionada]) {
    modelos[marcaSeleccionada].forEach((modelo) => {
      const option = document.createElement('option');
      option.value = modelo.toLowerCase();
      option.textContent = modelo;
      modeloSelect.appendChild(option);
    });
  }
};
