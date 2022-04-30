# Learning JEST

Jest nos sirve para realizar pruebas unitarias

## Useful commands

`jest --watch`: Pondra en modo listen todas las pruebas que hayan en el proyecto

`jest --coverage`: Genera un reporte en HTML, en el cual podemos ver varias instantes del desarrollo de pruebas.

## Teting a text

```typescript
const text = "hola mundo";

it("Should contain hola mundo string",() => {
  expect(text).toMatch(/hola mundo/);;
})
```
## Testing items inside an array

```typescript
const fruits = ['manzana', 'melon', 'banana'];

it("Should contain the banana item", () => {
  expect(fruits).toContain("banana");
})
```

## Testing a Callback

```typescript

const rerverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

const rerverseString2 = (str) => {
  return str.split("").reverse().join("");
};

it("Testing callback", () => {
  rerverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  })
})

it("Testing callback no fancy", () => {
  const result = rerverseString2("Hola");
  expect(result).toBe("aloH");
})

```

## Testing a Promise

```typescript
const reverseStringAsync = str => {
  return new Promise((resolve, reject) => {
    if(!str){
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  })
}

it("Testing Promises", async () => {
  const result = await reverseStringAsync('Hola');
  expect(result).toBe("aloH");
})
```