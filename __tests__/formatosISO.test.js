/**
 * @jest-environment jsdom
 */
import { formato_ISO } from '../utils/validar_datos';

describe('formatosISO.test.js', () => {
  let matricula_elem, codigo_postal_elem, foto_carnet_elem;

  beforeEach(() => {
    document.body.innerHTML = `
        <input id="codigo_postal" type="text" />
        <input id="matricula" type="text" />
        <input id="foto_carnet" type="file" />
        `;

    matricula_elem = document.getElementById('matricula');
    codigo_postal_elem = document.getElementById('codigo_postal');
    foto_carnet_elem = document.getElementById('foto_carnet');
  });

  afterEach(async () => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  test('si la matricula no esta en formato ISO lanza una alerta', async () => {
    matricula_elem.value = 'no es valida';
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    await formato_ISO();

    expect(alertMock).toHaveBeenCalledWith(
      'no es una matricula posible en España',
    );
    expect(matricula_elem.style.background).toBe('red');
  });

  test('tu codigo postal es demasiado largo', async () => {
    codigo_postal_elem.value = '28001444';
    matricula_elem.value = '1234 ABC';
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    await formato_ISO();

    expect(alertMock).toHaveBeenCalledWith(
      'tu codigo postal es demasiado largo',
    );
    expect(codigo_postal_elem.style.background).toBe('red');
  });

  test('El fichero debe ser una imagen en formato JPG', async () => {
    codigo_postal_elem.value = '28001';
    matricula_elem.value = '1234 ABC';
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    await formato_ISO();

    expect(alertMock).toHaveBeenCalledWith(
      'El fichero debe ser una imagen en formato JPG',
    );
    expect(codigo_postal_elem.style.background).toBe('');
  });

  test('el fichero es una imagen en formato JPG', async () => {
    matricula_elem.value = '1234 ABC';
    codigo_postal_elem.value = '28001';

    // Simular la selección de un archivo .jpg
    const file = new File([''], 'foto.jpg', { type: 'image/jpeg' });
    Object.defineProperty(foto_carnet_elem, 'files', {
      value: [file],
    });
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    await formato_ISO();

    expect(alertMock).not.toHaveBeenCalled();
    expect(foto_carnet_elem.style.background).toBe('');
  });
});
