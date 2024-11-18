const { enviarMensaje, mensajes } = require('../src/js/unitTest');

describe('Pruebas de la función enviarMensaje', () => {
  beforeEach(() => {
    // Limpia los mensajes antes de cada prueba
    mensajes.length = 0;
  });

  test('Debe enviar un mensaje correctamente', () => {
    const resultado = enviarMensaje('Usuario1', 'Hola, mundo!');
    expect(resultado).toHaveProperty('usuario', 'Usuario1');
    expect(resultado).toHaveProperty('texto', 'Hola, mundo!');
    expect(resultado).toHaveProperty('fecha');
    expect(mensajes.length).toBe(1);
  });

  test('Debe lanzar un error si falta el usuario', () => {
    expect(() => enviarMensaje('', 'Hola, mundo!')).toThrow('Usuario y texto son obligatorios');
  });

  test('Debe lanzar un error si falta el texto', () => {
    expect(() => enviarMensaje('Usuario1', '')).toThrow('Usuario y texto son obligatorios');
  });
});
