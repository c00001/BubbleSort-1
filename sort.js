// main
var array = [],
	len = 10,
	step = [],
	stepN = 0,
	a = [];
for (var i=0;i<len;i++){
	array[i] = Math.random();
	a[i] = array[i];
}
var putArrayInStep = function(c,m){
	step[stepN] = {
		compare: c,
		move: m
	};
	stepN++;
}
for (var i=0;i<a.length-1;i++){
	for (var j=0;j<a.length-1-i;j++){
		if (a[j] > a[j+1]){
			var t = a[j];
			a[j] = a[j+1];
			a[j+1] = t;
			putArrayInStep(j,1);
		}else{
			putArrayInStep(j,0);
		}
	}
}
// css
var css = document.styleSheets[0];
var addCss = function (sheet, selectorText, cssText, position) {
	var pos = position || sheet.cssRules.length;
	if (sheet.insertRule) {
		sheet.insertRule(selectorText + "{" + cssText + "}", pos);
	} else if (sheet.addRule) {//IE
		sheet.addRule(selectorText, cssText, pos);
	}
};
addCss(css,"div","width: "+(100/len)+"%");
for (var i=0;i<len;i++){
	addCss(css,".div"+i,"height: "+(100*array[i])+"%");
}
// animate
var div = [];
for (var i=0;i<len;i++){
	div[i] = document.createElement("div");
	div[i].classList.add("div"+i);
	document.body.appendChild(div[i]);
}