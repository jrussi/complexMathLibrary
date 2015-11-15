///////////////////////////////////////////////////////////////////////////////
// complexIOLib
// v. 1.0
// by JRussi
///////////////////////////////////////////////////////////////////////////////

function parseComplex(cmd) {
	cmd = cmd.replace('"','');
	cmd = cmd.replace('\'','');
	cmd = cmd.replace(',','.');
	//document.getElementById('tdBatch').innerHTML += "cmd = '" + cmd + "';// Enter<br>";
	cmd = cmd.replace(/([+-])/g,'|$1');
	var res = cmd.split(/[|]/);
	if (cmd.match(/(i|I|j|J)/)) {
		for (var i = 0; i < res.length; i++) {
			if (res[i].indexOf('j')<0) {
				var ptReal =  res[i].replace('j',"");
			}
			else {
				var ptIm =  res[i].replace('j',"");
				if (ptIm == '') {	ptIm = '1'}
				if (ptIm == '-') {	ptIm = '-1'}
				if (ptIm == '+') {	ptIm = '1'}
			}
		};
	var valor = new Complex((parseFloat(ptReal)||0), (parseFloat(ptIm)||0));
	}
	else {
		if (cmd.match(/(@)/)) {
			var ptMod=cmd.substring(0,cmd.indexOf('@'));
			var ptAng=cmd.substring(cmd.indexOf('@')+1,cmd.length);
			var valor = new Complex((parseFloat(ptMod)*Math.cos(parseFloat(ptAng)*Math.PI/180)||0), (parseFloat(ptMod)*Math.sin(parseFloat(ptAng)*Math.PI/180)||0));
		}
		else {
			if (cmd.match(/(;)/)) {
				var ptReal=cmd.substring(0,cmd.indexOf(';'));
				var ptIm=cmd.substring(cmd.indexOf(';')+1,cmd.length);
				var valor = new Complex((parseFloat(ptReal)||0), (parseFloat(ptIm)||0));
			}
			else {
				var ptReal=cmd;
				var ptIm=0;
				var valor = new Complex((parseFloat(ptReal)||0), (parseFloat(ptIm)||0));
			}
		}
	}
	return valor;
}


function formatMatrix(matriz,polar) {
	//newdiv = document.createElement('div');

	tbl = document.createElement('table');
	tbl.className ="page";
	tbl.style.display = "inline-block";
	//var body = document.body.appendChild(tbl);
	var color = "black";
	var colorBack = "#BBFFBB";

	for(var i = 0; i < matriz.length; i++) {
		var tr = tbl.insertRow(-1);
		for(var j = -1; j <= matriz[0].length; j++) {
			if ((j == -1)||(j == matriz[0].length)) {
				if (i == 0){
					if ((matriz.length > 1)||(matriz[0].length > 1)) {
						var td = tr.insertCell(-1);
						if (j == -1) {
							td.style.borderLeft = "2px solid " + color;// "[";
						}
						else {
							td.style.borderRight = "2px solid " + color;// "]";
						}
						td.style.width = "1px";
						td.style.borderTop = "2px solid " + color;
						td.style.borderBottom = "2px solid " + color;
						td.rowSpan = matriz.length;
						td.style.backgroundColor = colorBack;
					}
				}
			}
			else {
				var td = tr.insertCell(-1);
				td.innerHTML = formatNum(matriz[i][j],polar);
				td.style.textAlign = "center";
				td.style.backgroundColor = colorBack;
				td.style.color = color;
			}
		}
	}

	function formatNum(valor,polar) {
		if (typeof(polar)==undefined){
			var polar = false;
		}
		if (!polar) {
			var pt1 = (valor["re"] != 0)?(trimZero(valor["re"])):((valor["im"] != 0)?(""):("0"));
			var pt2 = (valor["im"] != 0)?((valor["im"] > 0)?("+j"):("-j")):("");
			var pt3 = (valor["im"] != 0)?(trimZero(Math.abs(valor["im"]))):("");
			var saida = pt1+pt2+pt3;
			if (saida.substr(0,1)=='+') {saida = saida.substr(1,saida.length-1);}
		}
		else {
			var saida = valor["abs"].toFixed(2) + '<u><b>/</b>' + valor["phi"].toFixed(2) + 'º</u>';
		}
		return saida;
	}

	function trimZero(valor) {
		str = valor.toFixed(2);
		return (str.indexOf('.00') < 0)?(str):(valor.toFixed(0))
	}

	return tbl;
}
