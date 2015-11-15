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
Complex.re | real part;
Complex.im | imaginary part;
Complex.abs | absolute value;
Complex.phi | angle in degrees;
Complex.phiRad | angle in radians

The following properties are defined and can be accessed by the command:
´´´js
Complex.Method
´´´

####(a) One argument:

Method|Returns
-------|-----
getRe|real part
getIm|imaginary part
getAbs|absolute value
getPhi|angle in degrees;
getPhiRad|angle in radians
getConj|returngs the conjugate
getLN|logarithm (base e)
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

	//---Dois argumentos--------------------------------------------------------------------//
	calcMinus: function(in0) {return new Complex(this.re-in0.re, this.im-in0.im);},
	//--------------------------------------------------------------------------------------//
	calcSum: function(in0) {return new Complex(this.re+in0.re, this.im+in0.im);},
	//--------------------------------------------------------------------------------------//
	calcDivision: function(in0) {
		var den = in0;
		return new Complex((this.re*den.re+this.im*den.im)/(Math.pow(den.re,2)+Math.pow(den.im,2)),
			(den.re*this.im-den.im*this.re)/(Math.pow(den.re,2)+Math.pow(den.im,2)));},
	//--------------------------------------------------------------------------------------//
	calcProduct: function(in0) {return new Complex(this.re*in0.re-this.im*in0.im, this.re*in0.im+this.im*in0.re);},
	//--------------------------------------------------------------------------------------//
	calcXPowerY: function(in0) {
		var valor1 = Math.pow(this.abs,in0.re)*Math.exp(-in0.im*this.phiRad);
		var valor2 = in0.re*this.phiRad + in0.im*Math.log(this.abs);
		return new Complex(valor1*Math.cos(valor2), valor1*Math.sin(valor2));
	},
	//--------------------------------------------------------------------------------------//
	calcXRootY: function(in0) {
		var valor0 = new Complex(1/in0.abs*Math.cos(-in0.phiRad), 1/in0.abs*Math.sin(-in0.phiRad));
		var valor1 = Math.pow(this.abs,valor0.re)*Math.exp(-valor0.im*this.phiRad);
		var valor2 = valor0.re*this.phiRad + valor0.im*Math.log(this.abs);
		return new Complex(valor1*Math.cos(valor2), valor1*Math.sin(valor2));
	},
}



Use the following ling to render the example:
[Live example](https://rawgit.com/jrussi/complexMathLibrary/master/example.html)
