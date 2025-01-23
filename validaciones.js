import {validarnombre_y_apellido,  validarfechas, formato_ISO} from './utils/validarnombre_y_apellido'
const botonEnviar = document.getElementById('botonEnviar')
// verifica todas las validaciones que la lias todo los tipos string, number,data tiene que estar en javascript
botonEnviar.addEventListener('click', Validaciones)

window.addEventListener('load', () => {
    cargarDatosDeProvincia();
    cargarDatosDeModelos();
});
export const Validaciones = async() =>{
    validarnombre_y_apellido()
    validarfechas()
    formato_ISO()
}


export const cargarDatosDeProvincia = async () => {
    const comunidadElem = document.getElementById('comunidad');
    const provinciaElem = document.getElementById('provincia');

    comunidadElem.addEventListener('change', () => {
        if (comunidadElem.value === 'baleares') {
            cargarProvinciasBaleares(provinciaElem);
        } else {
            provinciaElem.innerHTML = ''; // Limpiar opciones si se selecciona otra comunidad
        }
    });
};

const cargarProvinciasBaleares = (provinciaElem) => {
    const provinciasBaleares = ['Mallorca', 'Menorca', 'Ibiza', 'Formentera'];
    provinciaElem.innerHTML = ''; // Limpiar opciones existentes
    provinciasBaleares.forEach(provincia => {
        const option = document.createElement('option');
        option.value = provincia.toLowerCase();
        option.textContent = provincia;
        provinciaElem.appendChild(option);
    });
};

export const cargarMarcas = async () => { 
// terminar aqui 
const option = 'Ford'
}

export const cargarDatosDeModelos = async () => {
    const marcaElem = document.getElementById('marca');
    const modeloElem = document.getElementById('modelo');

    marcaElem.addEventListener('change', () => {
        if (marcaElem.value === 'ford') {
            cargarModelosFord(modeloElem);
        } else {
            modeloElem.innerHTML = ''; // Limpiar opciones si se selecciona otra marca
        }
    });
};

const cargarModelosFord = (modeloElem) => {
    const modelosFord = ['Fiesta', 'Focus', 'Mustang', 'Explorer'];
    modeloElem.innerHTML = ''; // Limpiar opciones existentes
    modelosFord.forEach(modelo => {
        const option = document.createElement('option');
        option.value = modelo.toLowerCase();
        option.textContent = modelo;
        modeloElem.appendChild(option);
    });
};



