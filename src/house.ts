class Key {
  signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  public key: number;

  constructor(b: Key) {
    this.key = b.signature;
  }

  getKey() {
    return this.key;
  }
}

// abstract class House extends Key {
//   public door: boolean = false;
//   public tenants: string;

//   comeIn(a: Person) {
//     this.tenants = a;
//   }
// }
// Створіть абстрактний клас House, в ньому повинна бути наступна логіка

// властивість door – вона може бути закрита, або відкрита.
// властивість key – об'єкт класу Key.
// конструктор приймає аргумент класу Key та зберігає його у властивість key.
// метод comeIn, який додає об'єкт класу Person у властивість tenants і це спрацьовує лише, якщо door відкрита.
// абстрактний метод openDoor приймає аргумент класу Key
