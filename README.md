# complexMathLibrary
JS Complex Math Library

This is a complex math library written in javascript.

Usage:
First thing, create a compplex number:

Ex1: Creating a number = 4 + j5 (j is the imaginary number)
var cmpx1 = new Complex(4,5);//uses rectangular notation

Ex2: Creating a number with random integer real and imaginary parts
var cmpx2 = new Complex(Math.random().toFixed(1)*10, Math.random().toFixed(1)*10);

When a complex number is created the following properties are filled automatically:
["re"]: real part;
["im"]: imaginary part;
["abs"]: absolute value;
[""]:
