/**
 * @jest-environment jsdom
 */
import {  validarfechas } from '../utils/validarnombre_y_apellido';

describe('validarfechas', () => {
    let fecha_nacimiento_elem, fecha_carnet_elem, fecha_matriculacion_elem;

    beforeEach(() => {
        document.body.innerHTML = `
            <input id="fecha_nacimiento" type="date" />
            <input id="fecha_carnet" type="date" />
            <input id="fecha_matriculacion" type="date" />
        `;
        fecha_nacimiento_elem = document.getElementById('fecha_nacimiento');
        fecha_carnet_elem = document.getElementById('fecha_carnet');
        fecha_matriculacion_elem = document.getElementById('fecha_matriculacion');
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.resetAllMocks();
        jest.restoreAllMocks();
    });

    test('should alert if fecha_nacimiento is less than 18 years ago', async () => {
        fecha_nacimiento_elem.value = '2010-01-01';
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        await validarfechas();

        expect(alertMock).toHaveBeenCalledWith('Debes tener al menos 18 años');
        expect(fecha_nacimiento_elem.style.background).toBe('red');
    });

    test('should alert if fecha_carnet is in the past', async () => {
        fecha_carnet_elem.value = '2000-01-01';
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        await validarfechas();

        expect(alertMock).toHaveBeenCalledWith('Tu Carnet está caducado');
        expect(fecha_carnet_elem.style.background).toBe('red');
    });

    test('should alert if fecha_matriculacion is in the past', async () => {
        fecha_matriculacion_elem.value = '2000-01-01';
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        await validarfechas();

        expect(alertMock).toHaveBeenCalledWith('La fecha de matriculación no puede ser anterior a la fecha actual');
        expect(fecha_matriculacion_elem.style.background).toBe('red');
    });
});