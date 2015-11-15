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
