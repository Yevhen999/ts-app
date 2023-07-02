interface Person {
  name: string;
  additionInfo?: {
    someInfo: string;
  };
}

const user: Person = {
  name: "Yevhen",
};

user?.additionInfo?.someInfo;
