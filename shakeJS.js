//Initialize Variables


//Todo: Wrap up shake inside the $$ object. 

//The main object : $$
var $$ = {
	Shake_SetIntrvl:,
	Shake_count:1,
	Shake_Progress:0,
	Shake_left:,
	Max_Shake:,
	
	AlignCenter: function(divObject) {
		var totalwidth = document.body.offsetWidth;	
		var obj = divObject.style.width;
		var objwidth = obj.replace("px","");
		var left = eval((eval(totalwidth)/2) - (eval(objwidth)/2));
		var leftstr = left.toString() + "px";
		divObject.style.left = leftstr;
	},
	setLeft: function(width, divObj) {
		divObj.style.left = width; 
	
	},

	shakeCore: function(currentWidth ,ShakeDistance, shakeObj){
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
			this.setLeft(Shake_left, shakeObj);
		}
		
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
			var str_wala = "this.shakeCore( \""+currentWidth+"\", "+ShakeDistance+",\""+ShakeObj+"\")";
			Shake_SetIntrvl = setInterval(str_wala,shakeDelay);	
		}
		
		if(Shake_Progress==0){
		Shake_left = shakeObj.style.left;
		make_shake(shakeObj.style.left, shakeDistance, shakeObj.getAttribute("id")); 
		}
	}
};

//End of File
