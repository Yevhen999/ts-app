interface IUser {
  name: string;
  age: number;
}

function createPerson(name: string): IUser {
  const person: Partial<IUser> = {
    name,
  };

  person.age = 35;

  return person as IUser;
}
