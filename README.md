# Stub creation

> A simple stub creating program, creating nested functions and properties

[![Build Status](https://travis-ci.org/czrm/stub.svg?branch=master)](https://travis-ci.org/czrm/stub)

## Definition

The stub method receives a string defining the stub and a return value, e.g. `stub('a.b.c.d', 1) \\ a.b.c.d is equal to 1`

## Usage

Create a stub with single property

```javascript
let a = stub('b', 1)
console.log(a.b) // 1
```

Create a stub with multiple nested properties

```javascript
let a = stub('b.c.d.e', 1)
console.log(a.b.c.d.e) // 1
```

You can also call functions

```javascript
let a = stub('b()', 1)
console.log(a.b()) // 1
```

and nested functions

```javascript
let a = stub('b().c().d()', 1)
console.log(a.b().c().d()) // 1
```

You can use functions and objects

```javascript
let a = stub('b.c().d.e()', 1)
console.log(a.b.c().d.e()) // 1
```

## Contributing

Feel free to contribute, just fork this repo, make the changes and submit a PR with the changes.
Make sure to describe the changes you made, and adress/link any issues or discussion about the changes.

## Authors

* **Cezar Mauricio** - [czrm](https://github.com/czrm)

See also the list of [contributors](https://github.com/czrm/stub/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
