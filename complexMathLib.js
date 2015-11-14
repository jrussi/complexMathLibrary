var Complex = function(re,im, options) {
	if (options === undefined){
		var options = [];
	}
	
	if (options.indexOf('polar')<0){ // cartesiano
		this.re = re;
		this.im = im;
		this.abs = Math.pow(re*re+im*im, 0.5);
		this.phi = Math.atan2(im,re)*180/Math.PI;
		this.phiRad = Math.atan2(im,re);
		//this.line = 0;
	}
	else{ // polar
		this.abs = re;
		if (options.indexOf('rad')<0){ // graus
			this.phi = im;
			this.phiRad = im*Math.PI/180;
		}
		else{
			this.phiRad = im;
			this.phi = im*180/Math.PI;
		}
		this.re = this.abs*Math.sin(this.phi);
		this.im = this.abs*Math.cos(this.phi);
		//this.line = 0;
	}
	
	
	return this;
}

Complex.prototype = {
	//---Um argumento-----------------------------------------------------------------------//
	getRe: function() {return new Complex(this.re, 0)},
	//--------------------------------------------------------------------------------------//
	getIm: function() {return new Complex(0, this.im)},
	//--------------------------------------------------------------------------------------//
	getAbs: function() {return new Complex(this.abs, 0)},
	//--------------------------------------------------------------------------------------//
	getPhi: function() {return new Complex(this.phi, 0)},
	//--------------------------------------------------------------------------------------//
	getPhiRad: function() {return new Complex(this.phiRad, 0)},
	//--------------------------------------------------------------------------------------//
	getConj: function() {return new Complex(this.re, -this.im)},
	//--------------------------------------------------------------------------------------//
	getLN: function() {return	new Complex(Math.log(this.abs), Math.atan2(this.im, this.re))},
	//--------------------------------------------------------------------------------------//
	getExp: function() {return new Complex(Math.exp(this["re"])*Math.cos(this["im"]),
		Math.exp(this["re"])*Math.sin(this["im"]))},
	//--------------------------------------------------------------------------------------//
	getInv: function() {return new Complex((1/this.abs)*Math.cos(-this.phiRad),
		(1/this.abs)*Math.sin(-this.phiRad))},
	//--------------------------------------------------------------------------------------//
	getSqrt: function() {return new Complex(Math.sqrt(this.abs)*Math.cos(this.phiRad/2),
		Math.sqrt(this.abs)*Math.sin(this.phiRad/2))},
	//--------------------------------------------------------------------------------------//
	getSqr: function() {return new Complex(this.re*this.re-this.im*this.im,
		this.re*this.im*2)},
	//--------------------------------------------------------------------------------------//
	getASin: function(modoGraus) {var valor = new Complex(1-(this.re*this.re-this.im*this.im), -this.re*this.im*2);
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
	getACos: function(modoGraus) {
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
	getATan: function(modoGraus) {
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
	getSin: function(modoGraus) {//ok
		if ((modoGraus)&&(this.im==0)) {
			return new Complex(Math.sin(this.re*Math.PI/180), 0);
		}
		else {
			return new Complex(Math.sin(this.re)*Math.cosh(this.im), Math.cos(this.re)*Math.sinh(this.im));
		}
	},
	//--------------------------------------------------------------------------------------//
	getCos: function(modoGraus) {//ok
		if ((modoGraus)&&(this.im==0)) {
			return new Complex(Math.cos(this.re*Math.PI/180), 0);
		}
		else {
			return new Complex(Math.cos(this.re)*Math.cosh(this.im), -Math.sin(this.re)*Math.sinh(this.im));
		}
	},
	//--------------------------------------------------------------------------------------//
	getTan: function(modoGraus) {
		if ((modoGraus)&&(this.im==0)) {
			return new Complex(Math.tan(this.re*Math.PI/180), 0);
		}
		else {
			return new Complex(Math.sin(this.re)*Math.cos(this.re)/(Math.pow(Math.cos(this.re),2)+Math.pow(Math.sinh(this.im),2)),
				Math.sinh(this.im)*Math.cosh(this.im)/(Math.pow(Math.cos(this.re),2)+Math.pow(Math.sinh(this.im),2)));
		}
	},
	//--------------------------------------------------------------------------------------//
	getNeg: function() {return new Complex(-this.re, -this.im)},
	//--------------------------------------------------------------------------------------//
//---Dois argumentos--------------------------------------------------------------------//
calcMinus: function(in0) {return new Complex(this.re-in0.re, this.im-in0.im);},
//--------------------------------------------------------------------------------------//
calcSoma: function(in0) {return new Complex(this.re+in0.re, this.im+in0.im);},
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


///--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------//
Object.prototype.calcPolar = function(positivo) {
	if (this.im == -0) {this.im = 0;}
/* 	var valor = {line:this.line, re:this.re, im:this.im, abs:Math.sqrt(Math.pow(this.re,2)+Math.pow(this.im,2),2),
		phi:Math.atan2(this.im,this.re)*180/Math.PI, phiRad:Math.atan2(this.im,this.re)}; */
		var valor = new Complex(this.re, this.im);
		valor.line = this.line;
	//if (positivo) {if (valor.phiRad<0) {valor.phiRad += 2*Math.PI;}};
	return valor;
};
//--------------------------------------------------------------------------------------//




/* 


//--------------------------------------------------------------------------------------//
//---Um argumento - Matriz--------------------------------------------------------------//
Object.prototype.calcProdutoMatricial = function(in0) {
//function calcProductMatriz(input1, input0) {
    var valor = [],
    newWidth = in0[0].length,
    newHeight = this.length;
    //iterating through this matrix rows
    for (var row = 0; row < newHeight; row++) {
        valor[row] = [];
        //iterating through in0 matrix columns
        for (var column = 0; column < newWidth; column++) {
            var sum = {line: 0, re:0, im:0};
            //calculating sum of pairwise products
            for (var index = 0; index < this[0].length; index++) {
                //sum = calcSoma( calcProduct(this[row][index], in0[index][column])  , sum);
                sum = sum.calcSoma( this[row][index].calcProduct(in0[index][column]) );
            }
            valor[row][column] = sum;
        }
    }
    return valor;
}
//--------------------------------------------------------------------------------------//
Object.prototype.determinante = function(){ //method sig. takes a this (two dimensional array), returns determinant.
	var sum={re: 0 , im: 0};
	var s;
	if(this.length==1){  //bottom case of recursion. size 1 this determinant is itself.
		return(this[0][0]);
	}
	for(var i=0;i<this.length;i++){ //finds determinant using row-by-row expansion
		var smaller= [];//new int[this.length-1][this.length-1]; //creates smaller this- values not in same row, column
		for(var a=1;a<this.length;a++){
			smaller[a-1]=[];
			for(var b=0;b<this.length;b++){
				if(b<i){
					smaller[a-1][b]=this[a][b];
				}
				else if(b>i){
					smaller[a-1][b-1]=this[a][b];
				}
			}
		}
		if(i%2==0){ //sign changes based on i
			s={re:1, im:0};
		}
		else{
			s={re:-1, im:0};
		}
		//sum+=s*this[0][i]*(determinant(smaller));// recursive step: determinant of larger determined by smaller.
		sum = sum.calcSoma( this[0][i].calcProduct((smaller.determinante()).calcProduct(s)));// recursive step: determinant of larger determined by smaller.
	}
	return(sum); //returns determinant value. once stack is finished, returns final determinant.
}
//--------------------------------------------------------------------------------------//
Object.prototype.inversa = function(){
	    // I use Guassian Elimination to calculate the inverse:
    // (1) 'augment' the matrix (left) by the identity (on the right)
    // (2) Turn the matrix on the left into the identity by elemetry row ops
    // (3) The matrix on the right is the inverse (was the identity matrix)
    // There are 3 elemtary row ops: (I combine b and c in my code)
    // (a) Swap 2 rows
    // (b) Multiply a row by a scalar
    // (c) Add 2 rows

    //if the matrix isn't square: exit (error)
    if(this.length !== this[0].length){return;}

    //create the identity matrix (I), and a copy (C) of the original
    var i=0, ii=0, j=0, dim=this.length, e=0, t=0;
    var I = [], C = [];
    for(i=0; i<dim; i+=1){
        // Create the row
        I[I.length]=[];
        C[C.length]=[];
        for(j=0; j<dim; j+=1){

            //if we're on the diagonal, put a 1 (for identity)
            if(i==j){ I[i][j] = {line: 0, re:1, im:0}; }
            else{ I[i][j] = {line: 0, re:0, im:0}; }

            // Also, make the copy of the original
            C[i][j] = this[i][j];
        }
    }

    // Perform elementary row operations
    for(i=0; i<dim; i+=1){
        // get the element e on the diagonal
        e = C[i][i];

        // if we have a 0 on the diagonal (we'll need to swap with a lower row)
        if((e["re"]==0)&&(e["im"]==0)){
            //look through every row below the i'th row
            for(ii=i+1; ii<dim; ii+=1){
                //if the ii'th row has a non-0 in the i'th col
                if((C[ii][i]["re"] != 0)&&(C[ii][i]["im"] != 0)){
                    //it would make the diagonal have a non-0 so swap it
                    for(j=0; j<dim; j++){
                        e = C[i][j];       //temp store i'th row
                        C[i][j] = C[ii][j];//replace i'th row by ii'th
                        C[ii][j] = e;      //repace ii'th by temp
                        e = I[i][j];       //temp store i'th row
                        I[i][j] = I[ii][j];//replace i'th row by ii'th
                        I[ii][j] = e;      //repace ii'th by temp
                    }
                    //don't bother checking other rows since we've swapped
                    break;
                }
            }
            //get the new diagonal
            e = C[i][i];
            //if it's still 0, not invertable (error)
            if(e["re"]==0){
            	alert("Matriz não pode ser invertida!");
            	return false;
            }
        }

        // Scale this row down by e (so we have a 1 on the diagonal)
        for(j=0; j<dim; j++){
            C[i][j] = C[i][j].calcDivision(e); //apply to original matrix
            I[i][j] = I[i][j].calcDivision(e); //apply to identity
        }

        // Subtract this row (scaled appropriately for each row) from ALL of
        // the other rows so that there will be 0's in this column in the
        // rows above and below this one
        for(ii=0; ii<dim; ii++){
            // Only apply to other rows (we want a 1 on the diagonal)
            if(ii==i){continue;}

            // We want to change this element to 0
            e = C[ii][i];

            // Subtract (the row above(or below) scaled by e) from (the
            // current row) but start at the i'th column and assume all the
            // stuff left of diagonal is 0 (which it should be if we made this
            // algorithm correctly)
            for(j=0; j<dim; j++){
                C[ii][j] = C[ii][j].calcMinus(C[i][j].calcProduct(e)); //apply to original matrix
                I[ii][j] = I[ii][j].calcMinus(I[i][j].calcProduct(e)); //apply to identity
            }
        }
        //console.log(C);
        //console.log(I);
    }

    //we've done all operations, C should be the identity
    //matrix I should be the inverse:
    return I;
} */
