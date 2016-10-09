function Tip(){
	
	this.show = function(element,text){
		$("<div class='tip_out'><div class='tip'>"+text+"</div><div class='arrow-down'></div></div>").appendTo("body");
		//获取input对象的 位置 和 宽度
		var element_top  = $(element).offset().top;
		var element_left = $(element).offset().left;
		var element_width = $(element).width();
		
		
		
		var textHeight = $(".tip").height();
		var textWidth =  $(".tip").width();
		console.log(textHeight+" "+element_width+" "+(element_width/2-textHeight/2));
		
		$(".tip_out").css("position","absolute");
		$(".tip_out").css("left",element_left-(element_width/2-textHeight/2));
		$(".tip_out").css("top",element_top-textHeight-10);
		
		
		
	}
	
}