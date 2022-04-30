# Testing React Applications

## Snapshot JEST testing

[Snapshot docs](https://jestjs.io/docs/snapshot-testing)

Son muy utilizados cuando no queremos que el UI cambie inesperadamente.

Basicamente lo que hace es crear una copia de lo que renderiza un componente y de ahí en adelante lo compara siempre con esa. Cuando el componente cambie su UI este test va a fallar, notificando que el snapshot no corresponde.

### Como hacemos cuando queramos cambiar el UI?

Al cambiarlo, el test va a fallar porque no corresponde el snapshot. Por esto se debe realizar la actualizacion del snapshot con el ultimo cambio realizado.

Se realiza ejecutando el siguiente comando: 

`jest --updateSnapshot` --> Ejecuta la actualización de todos los snapshots

`jest -u <NOMBRE_DEL_TEST>` --> Ejecuta la actualización de el snapshot especificado.

## Enzyme

### Maneras de renderizar un componente para realizar las pruebas.

1. shallow(): permite testear un componente sin siquiera pasar por el DOM rendering que hace React. La ventaja de este método es que, al no requerir un entorno de navegador para funcionar, es muy rápido.

2. mount(): sí realiza un render en el DOM del componente, lo cual nos permite testear interacciones del usuario (eventos).

3. render(): lo que hace es devolver la estructura HTML estática resultante del render del componente, y nos permite navegarla a través de un wrapper de la popular librería cheerio.

### Método debug en testing

debug(): Uno de los métodos que más útil me resultó fue`wrapper.debug()`, que te permite imprimir en la consola cómo se renderizó el componente y así saber dónde le estás pifiando

### Simular evento al testear

ProductMock es un ejemplo de la data que debe recibir el componente como prop, que en este caso es un objeto -> Producto.

En el siguiente codigo estamos testeando que siempre que se de click al boton la función handleAddToCart debe ser llamada.

```javascript
it('button should execute the function passed as proo', () => {
  const handleAddToCart = jest.fn(); //Simulamos el evento
  const product = mount(
    <ProviderMock>
      <Product product={ProductMock} handleAddToCart={handleAddToCart} />
    </ProviderMock>
  );
  product.find('button').simulate('click');
  expect(handleAddToCart).toHaveBeenCalledTimes(1);
});
```
