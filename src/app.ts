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
