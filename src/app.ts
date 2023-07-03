class DataStore<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  getItems(): T[] {
    return this.data;
  }
}

interface IPerson {
  name: string;
}

const storeUsers = new DataStore<IPerson>();

storeUsers.addItem({
  name: "Yevhen",
});

storeUsers.addItem({
  name: "John",
});

console.log(storeUsers.getItems());

const ageStore = new DataStore<number>();

ageStore.addItem(21);
ageStore.addItem(35);

console.log(ageStore.getItems());
