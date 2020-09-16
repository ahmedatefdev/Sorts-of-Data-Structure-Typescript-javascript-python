class HashTable {
  data: any[][];
  constructor(size) {
    this.data = new Array(size);
  }

  private Hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++)
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    return hash;
  }

  public Set(key: string, value: any) {
    const hash = this.Hash(key);
    if (!this.data[hash]) this.data[hash] = [];
    this.data[hash].push([key, value]);
    return this.data;
  }

  public Get(key: string) {
    let currentBuick = this.data[this.Hash(key)];
    if (currentBuick !== undefined)
      for (let i = 0; i < currentBuick.length; i++)
        if (currentBuick[i][0] === key) return currentBuick[i][1];
    return undefined;
  }

  public GetKeys() {
    return this.data.reduce((pv, cv) => {
      if (cv) return pv.concat(cv.map((arr2) => arr2[0]));
      else return pv;
    }, []);
  }
}

const myHashTable = new HashTable(50);
myHashTable.Set("grapes", 10000);
console.log(myHashTable.Set("grapess", 1000645130));
console.log(myHashTable.Get("grapes"));
console.log(myHashTable.Get("grapess"));
myHashTable.Set("apples", 9);
myHashTable.Get("apples");
console.log(myHashTable.GetKeys());
