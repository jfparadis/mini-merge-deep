# merge-deep

> Recursively (deep) merge two JavaScript objects.

## Usage

```
var obj1 = {a: 0, b: 1};
var obj2 = {c: 2, d: 3};
var obj3 = {a: 4, d: 5};

var obj4 = mergeDeep(mergeDeep(obj1, obj2), obj3);

console.log(obj4);
// {a: 4, b: 1, c: 2, d: 5 }
```

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```
