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
Complex.re - real part;
Complex.im - imaginary part;
Complex.abs - absolute value;
Complex.phi - angle in degrees;
Complex.phiRad - angle in radians
```js



Use the following ling to render the example:
[Live example]()https://rawgit.com/jrussi/complexMathLibrary/master/example.html)
