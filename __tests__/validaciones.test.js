/**
 * @jest-environment jsdom
 */
import { validarnombre_y_apellido } from '../utils/validarnombre_y_apellido'
// has cambiado la forma en la que se exporta necesitas cambiar las funciones 
// añade un test 
describe('validarnombre_y_apellido-test', () => {

	afterEach(async() => {
		jest.clearAllMocks();
		jest.resetAllMocks();
		jest.restoreAllMocks();
	});

    let nombre, apellido;

    beforeEach(() => {
        document.body.innerHTML = `
            <input id="nombre" value="John">
            <input id="apellidos" value="Doe">
        `;
        nombre = document.getElementById('nombre');
        apellido = document.getElementById('apellidos');
    });


    test('should alert if nombre or apellido length is greater than 30', async () => {
        nombre.value = 'a'.repeat(31)
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        await validarnombre_y_apellido();

        expect(alertMock).toHaveBeenCalledWith('nombre o apellido incorrectos maximo 30 caracteres');
        expect(nombre.style.background).toBe('red');
    });

     test('should alert if nombre contains non-string characters', async () => {
        nombre.value = 12345;
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        await validarnombre_y_apellido();

        expect(alertMock).toHaveBeenCalledWith('solo puedes poner letras y sin espacios');
        expect(nombre.style.background).toBe('red');
    });

});