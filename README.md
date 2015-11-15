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
	getASin| function(modoGraus) {var valor = new Complex(1-(this.re*this.re-this.im*this.im), -this.re*this.im*2);
		var valor = new Complex(Math.sqrt(valor.abs)*Math.cos(valor.phiRad/2), Math.sqrt(valor.abs)*Math.sin(valor.phiRad/2));
		var valor = new Complex(-this.im+valor.re, this.re+valor.im);
		var saida = new Complex(valor.phiRad, -Math.log(valor.abs));
		if ((modoGraus)&&(this.im==0)&&(this.re>=-1)&&(this.re<=1)) {
			return new Complex(saida["re"]*180/Math.PI, 0);
		}
		else {
			return saida;
		}
	},
	//--------------------------------------------------------------------------------------//
	getACos| function(modoGraus) {
		var valor = new Complex(1-(this.re*this.re-this.im*this.im), -this.re*this.im*2);
		var valor = new Complex(Math.sqrt(valor.abs)*Math.cos(valor.phiRad/2), Math.sqrt(valor.abs)*Math.sin(valor.phiRad/2));
		var valor = new Complex(this.re+valor.im, this.im-valor.re);
		var saida = new Complex(-valor.phiRad, Math.log(valor.abs));
		if ((modoGraus)&&(this.im==0)&&(this.re>=-1)&&(this.re<=1)) {
			return new Complex(saida["re"]*180/Math.PI, 0);
		}
		else {
			return saida;
		}
	},
	//--------------------------------------------------------------------------------------//
	getATan| function(modoGraus) {
		var valor1 = new Complex(1+this.im, -this.re);
		var valor2 = new Complex(1-this.im, this.re);
		var valor = new Complex(Math.log(valor1.abs)-Math.log(valor2.abs), valor1.phiRad-valor2.phiRad);
		var saida = new Complex(-valor.im/2, valor.re/2);
		if ((modoGraus)&&(this.im==0)&&(this.re>=-1)&&(this.re<=1)) {
			return new Complex(saida["re"]*180/Math.PI, 0);
		}
		else {
			return saida;
		}
	},
	//--------------------------------------------------------------------------------------//
	getSin| function(modoGraus) {//ok
		if ((modoGraus)&&(this.im==0)) {
			return new Complex(Math.sin(this.re*Math.PI/180), 0);
		}
		else {
			return new Complex(Math.sin(this.re)*Math.cosh(this.im), Math.cos(this.re)*Math.sinh(this.im));
		}
	},
	//--------------------------------------------------------------------------------------//
	getCos| function(modoGraus) {//ok
		if ((modoGraus)&&(this.im==0)) {
			return new Complex(Math.cos(this.re*Math.PI/180), 0);
		}
		else {
			return new Complex(Math.cos(this.re)*Math.cosh(this.im), -Math.sin(this.re)*Math.sinh(this.im));
		}
	},
	//--------------------------------------------------------------------------------------//
	getTan| function(modoGraus) {
		if ((modoGraus)&&(this.im==0)) {
			return new Complex(Math.tan(this.re*Math.PI/180), 0);
		}
		else {
			return new Complex(Math.sin(this.re)*Math.cos(this.re)/(Math.pow(Math.cos(this.re),2)+Math.pow(Math.sinh(this.im),2)),
				Math.sinh(this.im)*Math.cosh(this.im)/(Math.pow(Math.cos(this.re),2)+Math.pow(Math.sinh(this.im),2)));
		}
	},
	//--------------------------------------------------------------------------------------//
	getNeg| function() {return new Complex(-this.re, -this.im)},
	//--------------------------------------------------------------------------------------//
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
