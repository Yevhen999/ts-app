interface Person {
  name: string;
  age: number;
  [x: string]: string | number;
}

const user: Person = {
  name: "Yevhen",
  age: 35,
  gender: "male",
  country: "Canada",
};
