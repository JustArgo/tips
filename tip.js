$.fn.tip = function(options){
	var text = "用户名不能为空";
	var element = this;
	var config = {
		
	};
	if(typeof options=='string'){
		text = options;
	}else if(typeof options=='object'){
		$.extend(config,options);
	}
	
	
	var defaultConfig = {
		position:"left",
	}
		var className = "arrow-down";
		var tipItem = "";
		if(config.position=='top'){
			tipItem = "<div class='tip_out'><div class='tip'>"+text+"</div><div class='"+className+"'></div></div>";
		}else if(config.position=='bottom'){
			className = "arrow-up";
			tipItem = "<div class='tip_out'><div class='"+className+"'></div><div class='tip'>"+text+"</div></div>";
		}else if(config.position=='left'){
			className = "arrow-right";
			tipItem = "<div class='tip_out'><div class='"+className+" pull-right'></div><div class='tip pull-left'>"+text+"</div></div>";
		}else if(config.position=='right'){
			className = "arrow-left";
			tipItem = "<div class='tip_out'><div class='"+className+" pull-left'></div><div class='tip pull-right'>"+text+"</div></div>";
		}
		$(tipItem).appendTo("body");
		//获取input对象的 位置 和 宽度
		var element_top  = $(element).offset().top;
		var element_left = $(element).offset().left;
		var element_inner_width = $(element).innerWidth();
		var element_outer_width = $(element).outerWidth();
		var element_inner_height = $(element).innerHeight();
		var element_outer_height = $(element).outerHeight();
		console.log("element_inner_width:"+element_inner_width+" element_outer_width:"+element_outer_width);
		console.log("element_inner_height:"+element_inner_height+" element_outer_height:"+element_outer_height);
		
		console.log("element_top:"+element_top+" element_left:"+element_left);
		
		var textHeight = $(".tip").height();
		var textWidth =  $(".tip").outerWidth();
		var text_outer_height = $(".tip").outerHeight();
		
		
		console.log("textHeight:"+textHeight+" textWidth:"+textWidth);
		
		console.log(textHeight+" "+element_outer_width+" "+(element_outer_width/2-textHeight/2));
		
		$(".tip_out").css("position","absolute");
		if(config.position=='top'){
			//$(".tip_out").css("top",158);
			//$(".tip_out").css("left",108);
			$(".tip_out").css("left",element_left+(element_outer_width/2-textWidth/2));
			$(".tip_out").css("top",element_top-textHeight-10);
		}else if(config.position=='bottom'){
			$(".tip_out").css("left",element_left-(element_outer_width/2-textWidth/2));
			$(".tip_out").css("top",element_top+textHeight+10);
		}else if(config.position=='right'){
			$(".tip_out").css("left",element_left+element_inner_width+5);
			$(".tip_out").css("top",element_top+(element_outer_height-text_outer_height)/2);
		}else if(config.position=='left'){
			$(".tip_out").css("left",element_left-element_inner_width-5);
			$(".tip_out").css("top",element_top+(element_outer_height-text_outer_height)/2);
		}
		
		//处理 左右 的 margin
		if(config.position=='right'||config.position=='left'){
			$("."+className).css("margin-top",textHeight/2-5/2);
		}
		
	
}