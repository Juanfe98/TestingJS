# Testing React Applications

## Enzyme

### Maneras de renderizar un componente para realizar las pruebas.

1. shallow(): permite testear un componente sin siquiera pasar por el DOM rendering que hace React. La ventaja de este método es que, al no requerir un entorno de navegador para funcionar, es muy rápido.

2. mount(): sí realiza un render en el DOM del componente, lo cual nos permite testear interacciones del usuario (eventos).

3. render(): lo que hace es devolver la estructura HTML estática resultante del render del componente, y nos permite navegarla a través de un wrapper de la popular librería cheerio.

### Método debug en testing

debug(): Uno de los métodos que más útil me resultó fue`wrapper.debug()`, que te permite imprimir en la consola cómo se renderizó el componente y así saber dónde le estás pifiando