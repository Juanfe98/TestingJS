const text = "hola mundo";

const fruits = ['manzana', 'melon', 'banana'];

const rerverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

const rerverseString2 = (str) => {
  return str.split("").reverse().join("");
};

const reverseStringAsync = str => {
  return new Promise((resolve, reject) => {
    if(!str){
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  })
}

// afterEach(() => console.log('Despues de cada prueba'));
// afterAll(() => console.log('Despues de todas las pruebas'));

// beforeEach(() => console.log('Antes de cada prueba'));
// beforeAll(() => console.log('Antes de todas las prueba'));

it("Should contain hola mundo string",() => {
  expect(text).toMatch(/hola mundo/);;
})

it("Should contain the banana item", () => {
  expect(fruits).toContain("banana");
})

it("Testing callback", () => {
  rerverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  })
})

it("Testing callback no fancy", () => {
  const result = rerverseString2("Hola");
  expect(result).toBe("aloH");
})

it("Testing Promises", async () => {
  const result = await reverseStringAsync('Hola');
  expect(result).toBe("aloH");
})