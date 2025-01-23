/**
 * @jest-environment jsdom
 */
import {formato_ISO} from '../utils/validarnombre_y_apellido'

describe('formatosISO.test.js', () => {

    let matricula_elem, codigo_postal_elem, foto_carnet_elem;

    beforeEach(()=> {
        document.body.innerHTML  =`
        <input id="codigo_postal" type="text" />
        <input id="matricula" type="text" />
        <input id="foto_carnet" type="file" />
        `;

        matricula_elem = document.getElementById('matricula');
        codigo_postal_elem = document.getElementById('codigo_postal');
        foto_carnet_elem = document.getElementById('foto_carnet');
    });


    afterEach(async() => {
		jest.clearAllMocks();
		jest.resetAllMocks();
		jest.restoreAllMocks();
	});

    

    test('si la matricula no esta en formato ISO lanza una alerta', async () => {
        matricula_elem.value = 'No es un formato adecuado';
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        await formato_ISO();

        expect(alertMock).toHaveBeenCalledWith('no es una matricula posible en España');
        expect(matricula_elem.style.background).toBe('red')
    });

    test('tu codigo postal es demasiado largo', async () => {
        codigo_postal_elem.value = '4444444444'
        matricula_elem.value = '1234 ABC'
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        await formato_ISO();

        expect(alertMock).toHaveBeenCalledWith('tu codigo postal es demasiado largo');
        expect(codigo_postal_elem.style.background).toBe('red')


    })



})