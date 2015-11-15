# complexMathLib.js
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

##Complex type
When a complex number is created the following properties are filled automatically:

Property | Meaning
-----------|-----------
Complex.re | real part
Complex.im | imaginary part
Complex.abs | absolute value
Complex.phi | angle in degrees
Complex.phiRad | angle in radians

##Methods
The following properties are defined:

####(a) One argument:
These methods can be accessed by the command:
```js
Complex.Method
```

Method|Returns
-------|-----
getRe|real part
getIm|imaginary part
getAbs|absolute value
getPhi|angle in degrees
getPhiRad|angle in radians
getConj|complex conjugate
getLN|natural logarithm
getExp|exponential
getInv|inverse value
getSqrt|square root
getSqr|square power
getASin|ArcSine
getACos|ArcCosine
getATan|ArcTangent
getSin|Sine
getCos|Cosine
getTan|Tangent
getNeg|Negates the number

####(b) Two arguments:
These methods can be accessed by the command:
```js
Complex.Method(second_argument)
```

Method|Returns|Example
----------|--------|---------
calcMinus|A - B|A.calcMinus(B)
calcSum|A + B|A.calcSum(B)
calcDivision|A / B|A.calcMinus(B)
calcProduct|A * B|A.calcMinus(B)
calcXPowerY|X ^ Y|X.calcXPowerY(Y)
calcXRootY|X ^ (1/Y)|X.calcXRootY(Y)


Use the following ling to render the example:
[Live example](https://rawgit.com/jrussi/complexMathLibrary/master/example.html)

#ComplexMatrixLib.js

This is a complex matrix library written in javascript.

##Usage:
First thing, create a complex matrix:

Ex1: Creating a number = 4 + j5 (j is the imaginary number)
```js
var cmpx11 = new Complex(4,5);
var cmpx12 = new Complex(2,6);
var cmpx21 = new Complex(4,4);
var cmpx22 = new Complex(1,5);

var mat = [[cmpx11, cmpx12], [cmpx21, cmpx22]];
```

Method|Returns|Example
----------|--------|---------
calcMatrixMultiplication|[M1]x[M2]|M1.calcMatrixMultiplication(M2)
calcDeterminant|determinant(M1)|M1.determinant()
calcInverse|1 / M1|M1.calcInverse()

###Credits:
Matrix multiplication was adapted from http://stackoverflow.com/questions/27205018/multiply-2-matrices-in-javascript
Matrix determina was adapted from http://professorjava.weebly.com/matrix-determinant.html.
Inverse matrix code was adapted from Andrew Ippoliti's Blog.
