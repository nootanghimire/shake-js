//Initialize Variables

var Shake_SetIntrvl;
var Shake_count = 1;	
var Shake_Progress = 0;
var Shake_left;
var Max_Shake;

//a helper function
var setLeft = function(width, divObj) {
		divObj.style.left = width; 
	
	};


//The shake function (core part)
var shake = function(currentWidth ,ShakeDistance, shakeObj){
		shakeObj = document.getElementById(shakeObj);
		Shake_Progress = 1;
		currentLeft=currentWidth.replace("px","");
		var finalDistance = eval(currentLeft) - ((Math.pow(-1,Shake_count))*(ShakeDistance));
		shakeObj.style.left= finalDistance +"px";
		toSend = Shake_count + 1;
		Shake_count=toSend;
		if(Shake_count>Max_Shake){
			clearInterval(Shake_SetIntrvl);
			Shake_count = 1;
			Shake_Progress = 0;
			setLeft(Shake_left, shakeObj);
		}
		
	};
//Todo: Wrap up shake inside the $$ object. And make it private

//The main object : $$
var $$ = {
	
	
	AlignCenter: function(divObject) {
		var totalwidth = document.body.offsetWidth;	
		var obj = divObject.style.width;
		var objwidth = obj.replace("px","");
		var left = eval((eval(totalwidth)/2) - (eval(objwidth)/2));
		var leftstr = left.toString() + "px";
		divObject.style.left = leftstr;
	},	
	
	shake: function(shakedivName, shakeDistance, shakeDelay, shakeTotal) {
			if(shakeDistance == NaN || ShakeDistance == undefined) {
				shakeDistance = 10;
			}			
			if(shakeDelay == NaN || shakeDelay == undefined) {
				shakeDelay =90;
			}
			if(shakeTotal == NaN || shakeTotal == undefined) {
				shakeTotal = 6;
			}
		shakeObj = document.getElementById(shakedivName);
		Max_Shake = shakeTotal;
		function make_shake(currentWidth, ShakeDistance, ShakeObj) {
			var str_wala = "shake( \""+currentWidth+"\", "+ShakeDistance+",\""+ShakeObj+"\")";
			Shake_SetIntrvl = setInterval(str_wala,shakeDelay);	
		}
		
		if(Shake_Progress==0){
		Shake_left = shakeObj.style.left;
		make_shake(shakeObj.style.left, shakeDistance, shakeObj.getAttribute("id")); 
		}
	}
};

//End of File
