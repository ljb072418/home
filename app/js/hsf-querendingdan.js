$(document).ready(function(){
	$('.hsf-qrdd-success').css("display","none");						
	$('.hsf-qrdd-yinghangka').on("click",function(){
		$('.hsf-qrdd-baowei').css("display","none");
		$('.hsf-qrdd-success').css("display","none");					
		$('.hsf-qrdd-querenzhifu').css("display","block");
	})
	$('.hsf-qrdd-querenanniu').on("click",function(){
		$('.hsf-qrdd-querenzhifu').css("display","none");
		$('.hsf-qrdd-success').css("display","none");					
		$('.hsf-qrdd-xuanzeihangka').css("display","block");
	})
	$('.hsf-qrdd-tianjia').on("click",function(){
		$('.hsf-qrdd-success').css("display","none");					
		$('.hsf-qrdd-xuanzeihangka').css("display","none");
		$('.hsf-qrdd-tianjiayinhangka').css("display","block");
	})
	$('.hsf-qrdd-circles').on("click",function(){
		$('.hsf-qrdd-xuanzeihangka').css("display","none");
		$('.hsf-qrdd-success').css("display","none");					
		$('.hsf-qrdd-baowei').css("display","block");
	})
	$('.hsf-bottom').on("click",function(){
		$('.hsf-qrdd-success').css("display","none");			
		$('.hsf-qrdd-tianjiayinhangka').css("display","none");
		$('.tu').css("display","block");		
		$('.hsf-qrdd-zhiwenshibie').css("display","block");
	})
	$('.hsf-qrdd-yinhangkabottom').on("click",function(){
		$('.hsf-qrdd-xuanzeihangka').css("display","none");
		$('.hsf-qrdd-baowei').css("display","none");		
		$('.hsf-qrdd-tianjiayinhangka').css("display","none");
		$('.hsf-qrdd-tianjiayinhangka').css("display","none");
		$('.hsf-qrdd-success').css("display","none");
		$('.tu').css("display","block");
	})
	
//	支付方式的转换
$('.tu').on("click",function(){
		$('.tu').css("display","none");					
		$('.hsf-qrdd-success').css("display","block");
	})

$('.hsf-qrdd-guanbi').click(function(){
	$('.hsf-qrdd-threeshibie').css("display","none");
		$('.hsf-qrdd-success').css("display","none");
		$('.tu').css("display","none");		
		$('.hsf-qrdd-baowei').css("display","block");
})
$('.hsf-qrdd-threeshibie').click(function(){
	$('.hsf-qrdd-threeshibie').css("display","none");
		$('.hsf-qrdd-success').css("display","block");
})
$('.hsf-success-next').click(function(){
	$('.hsf-qrdd-success').css("display","none");				
	$('.hsf-success-look').removeClass("actives");
	$('.hsf-success-next').addClass("actives");
})
$('.hsf-success-look').click(function(){
	$('.hsf-qrdd-success').css("display","none");				
	$('.hsf-success-next').removeClass("actives");
	$('.hsf-success-look').addClass("actives");
})
$('.hsf-success-nexts').click(function(){
	$('.hsf-qrdd-success').css("display","none");				
	$('.hsf-success-looks').removeClass("actives");
	$('.hsf-success-nexts').addClass("actives");
})
$('.hsf-success-looks').click(function(){
		$('.hsf-qrdd-success').css("display","none");			
	
	$('.hsf-success-nexts').removeClass("actives");
	$('.hsf-success-looks').addClass("actives");
})
	$('.hsf-success-nexts').on("click",function(){
		$('.hsf-qrdd-querenzhifu').css("display","none");
		$('.hsf-qrdd-success').css("display","none");				
		$('.hsf-qrdd-xuanzeihangka').css("display","block");
	})
		$('.hsf-success-looks').on("click",function(){
		$('.hsf-qrdd-success').css("display","none");		
		$('.hsf-qrdd-querenzhifu').css("display","none");
		$('.hsf-qrdd-baowei').css("display","block");
	})
		$('.fanhui').on("click",function(){
		$('.hsf-qrdd-tianjiayinhangka').css("display","none");
		$('.hsf-qrdd-success').css("display","none");		
		$('.hsf-qrdd-xuanzeihangka').css("display","block");
	})


})

