# complexMathLibrary
JS Complex Math Library

This is a complex math library written in javascript.

##Usage:
First thing, create a compplex number:

Ex1: Creating a number = 4 + j5 (j is the imaginary number)
```js
var cmpx1 = new Complex(4,5);//uses rectangular notation
```

Ex2: Creating a number with random integer real and imaginary parts
```js
var cmpx2 = new Complex(Math.random().toFixed(1)*10, Math.random().toFixed(1)*10);
```

When a complex number is created the following properties are filled automatically:
```js
cmpx1["re"] - real part;
cmpx1["im"] - imaginary part;
cmpx1["abs"] - absolute value;
cmpx1[""]:
```js
