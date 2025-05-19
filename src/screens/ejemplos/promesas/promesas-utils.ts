export function getPromise(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 5) + 1;

      if (randomNumber === 3) {
        reject(new Error(`Number 3 detected! Exception thrown.`));
      } else {
        resolve(randomNumber);
      }
    }, 1000);
  });
}

export function isParPromise(numero: number): Promise<boolean> {
  return new Promise(function (resolve, reject) {
    if (numero === 0) {
      reject(new Error("CERO NO TIENE PARIDAD"));
    } else {
      resolve(numero % 2 === 0);
    }
  });
}
