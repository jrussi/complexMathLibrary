///////////////////////////////////////////////////////////////////////////////
// complexMatrixLib
// v. 1.0
// by JRussi
///////////////////////////////////////////////////////////////////////////////


/* var Matriz = function(linhas,colunas) {
	this.linhas: linhas;
	this.colunas: colunas;
	this.valor;
	//return this;
} */

Array.prototype.calcMatrixMultiplication = function(in0) {
		var valor = [],
		newWidth = in0[0].length,
		newHeight = this.length;
		//iterating through this matrix rows
		for (var row = 0; row < newHeight; row++) {
			valor[row] = [];
			//iterating through in0 matrix columns
			for (var column = 0; column < newWidth; column++) {
			var sum = new Complex(0, 0);
				//calculating sum of pairwise products
				for (var index = 0; index < this[0].length; index++) {
					//sum = calcSoma( calcProduct(this[row][index], in0[index][column])	 , sum);
					sum = sum.calcSum( this[row][index].calcProduct(in0[index][column]) );
				}
			valor[row][column] = sum;
			}
		}
		return valor;
	};
	//--------------------------------------------------------------------------------------//
Array.prototype.calcDeterminant = function(){ //method sig. takes a this (two dimensional array), returns determinant.
	var sum = new Complex(0, 0);
	var s;
	if(this.length==1){	 //bottom case of recursion. size 1 this determinant is itself.
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
		s = new Complex(1, 0);
		}
		else{
			s = new Complex(-1, 0);
		}
		//sum+=s*this[0][i]*(determinant(smaller));// recursive step: determinant of larger determined by smaller.
		sum = sum.calcSum( this[0][i].calcProduct((smaller.calcDeterminant()).calcProduct(s)));// recursive step: determinant of larger determined by smaller.
	}
	return(sum); //returns determinant value. once stack is finished, returns final determinant.
};
//--------------------------------------------------------------------------------------//
Array.prototype.calcInverse = function(){
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
				if(i==j){ I[i][j] = new Complex(1, 0); }
				else{ I[i][j] = new Complex(0, 0); }

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
												e = C[i][j];			 //temp store i'th row
												C[i][j] = C[ii][j];//replace i'th row by ii'th
												C[ii][j] = e;			 //repace ii'th by temp
												e = I[i][j];			 //temp store i'th row
												I[i][j] = I[ii][j];//replace i'th row by ii'th
												I[ii][j] = e;			 //repace ii'th by temp
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
};



Array.prototype.forEach2 = function(func,arg) {//forEach for 2D arrays
	var saida = [];
	for (var i = 0; i < this.length; i++) {
		saida[i] = [];
		for (var j = 0; j < this[0].length; j++) {
			if (arg == undefined) {saida[i][j] = this[i][j][func]();}
			else {saida[i][j] = this[i][j][func](arg[i][j]);}
		}
	}
	saida.line = this.line;
	return saida;
}
//--------------------------------------------------------------------------------------//
/* Array.prototype.forEachMatEscalar = function(func,arg) {//forEach Escalar for 2D arrays
	var saida = [];
	for (var i = 0; i < this.length; i++) {
		saida[i] = [];
		for (var j = 0; j < this[0].length; j++) {
			if (arg == undefined) {saida[i][j] = this[i][j][func]();}
			else {saida[i][j] = this[i][j][func](arg[0][0]);}
		}
	}
	saida.line = this.line;
	return saida;
} */


//var a = new Complex(a,b);

/* var keys = Object.keys(Complex.prototype);

for (var ii=0;ii<keys.length;ii++){
	Matriz.prototype[keys[ii]] = function(func,arg) {//forEach for 2D arrays
	var saida = [];
	for (var i = 0; i < this.length; i++) {
		saida[i] = [];
		for (var j = 0; j < this[0].length; j++) {
			if (arg == undefined) {saida[i][j] = this[i][j][func]();}
			else {saida[i][j] = this[i][j][func](arg[i][j]);}
		}
	}
	return saida;
}
} */
//--------------------------------------------------------------------------------------//
/* Array.prototype.forEachEscalarMat = function(func,arg) {//forEach Escalar for 2D arrays
	var saida = [];
	for (var i = 0; i < this.length; i++) {
		saida[i] = [];
		for (var j = 0; j < this[0].length; j++) {
			if (arg == undefined) {saida[i][j] = this[0][0][func]();}
			else {saida[i][j] = this[0][0][func](arg[i][j]);}
		}
	}
	return saida;
} */
//--------------------------------------------------------------------------------------//
Array.prototype.forEachEscalar = function(func,arg) {//forEach one Escalar, other 2D array - reversible
	var saida = [];
	if ((this.length == 1) && (this[0].length == 1)) {
		for (var i = 0; i < arg.length; i++) {
			saida[i] = [];
			for (var j = 0; j < arg[0].length; j++) {
				saida[i][j] = this[0][0][func](arg[i][j]);
			}
		}
	}
	else {
		for (var i = 0; i < this.length; i++) {
			saida[i] = [];
			for (var j = 0; j < this[0].length; j++) {
				saida[i][j] = this[i][j][func](arg[0][0]);
			}
		}
	}
	return saida;
}
