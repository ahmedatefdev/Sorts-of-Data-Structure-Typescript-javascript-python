var HashTable = /** @class */ (function () {
    function HashTable(size) {
        this.data = new Array(size);
    }
    //hash keys
    HashTable.prototype.Hash = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++)
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        return hash;
    };
    HashTable.prototype.Set = function (key, value) {
        var hash = this.Hash(key);
        if (!this.data[hash])
            this.data[hash] = [];
        this.data[hash].push([key, value]);
        return this.data;
    };
    HashTable.prototype.Get = function (key) {
        var currentBuick = this.data[this.Hash(key)];
        if (currentBuick !== undefined)
            for (var i = 0; i < currentBuick.length; i++)
                if (currentBuick[i][0] === key)
                    return currentBuick[i][1];
        return undefined;
    };
    HashTable.prototype.GetKeys = function () {
        return this.data.reduce(function (pv, cv) {
            if (cv)
                return pv.concat(cv.map(function (arr2) { return arr2[0]; }));
            else
                return pv;
        }, []);
    };
    return HashTable;
}());
var myHashTable = new HashTable(50);
myHashTable.Set("grapes", 10000);
console.log(myHashTable.Set("grapess", 1000645130));
console.log(myHashTable.Get("grapes"));
console.log(myHashTable.Get("grapess"));
myHashTable.Set("apples", 9);
myHashTable.Get("apples");
console.log(myHashTable.GetKeys());
