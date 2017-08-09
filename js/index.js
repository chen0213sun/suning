//顶部导航广告
$(function() {
  setTimeout(function() {
    $('#top_adt_big').animate({
      'height': '0'
    }, 2000, function() {
      $('#top_adt').animate({
        'height': '100px'
      }, 1000);
    });
  }, 3000);
});
//下拉菜单
$(function() {
  $('.scrollx').hover(function() {
    $(this).find('.scrolly').stop().slideDown('slow');
  }, function() {
    $(this).find('.scrolly').stop().slideUp('slow');
  });
});
//大图轮播
$(function() {
  //获得元素
  var pics = $('#main_pic .banner-pic ul li');
  var blis = $('#main_pic .banner-ctrl li');
  var slii = $('#main_pic .banner-ctrl .ctrl-dot i');
  var slip = $('#main_pic .banner-ctrl li .title-item .title-list p');
  var lbtn = $('#layout_main_pic #main_pic .banner-prev');
  var rbtn = $('#layout_main_pic #main_pic .banner-next');
  var bbg = $('#layout_main_pic');

  var index = 0;
  var arr = ['#7701A1', '#99CCE1', '#9D5CFE', '#FFFFFF', '#EBEFFB', '#6539E6', '#FDAB01', '#DD073B', '#478FFE', '#CE46CE', '#5E21BD', '#EB1587', '#1A192B', '#FF0E3E', '#FFB500', '#F5091D', '#478FFE'];
  //每秒轮播一次图片
  function chan() {
    //显示当前大图
    pics.css('display', 'none');
    pics.eq(index).css('display', 'block');
    slii.removeClass('yellow');
    slii.eq(index).addClass('yellow');
    //显示ctrl-dot
    slii.parent().removeClass('current');
    slii.eq(index).parent().addClass('current');
    slii.parents('li').find('.bg').removeClass('current');
    slii.eq(index).parents('li').find('.bg').addClass('current');
    bbg.css('background', arr[index]);
    index += 1;
    if (index >= pics.length) {
      index = 0;
    }
  }
  timer = setInterval(chan, 2000);
  //点击效果
  lbtn.click(function(event) {
    clearInterval(timer);
    if (index == 0) {
      index = pics.length;
    }
    index--;
    pics.css('display', 'none');
    pics.eq(index).css('display', 'block');
    slii.removeClass('yellow');
    slii.eq(index).addClass('yellow');
    slii.parent().removeClass('current');
    slii.eq(index).parent().addClass('current');
    slii.parents('li').find('.bg').removeClass('current');
    slii.eq(index).parents('li').find('.bg').addClass('current');
    bbg.css('background', arr[index]);
  });
  rbtn.click(function(event) {
    clearInterval(timer);
    if (index == pics.length-1) {
      index = -1;
    }
    index++;
    pics.css('display', 'none');
    pics.eq(index).css('display', 'block');
    slii.removeClass('yellow');
    slii.eq(index).addClass('yellow');
    slii.parent().removeClass('current');
    slii.eq(index).parent().addClass('current');
    slii.parents('li').find('.bg').removeClass('current');
    slii.eq(index).parents('li').find('.bg').addClass('current');
    bbg.css('background', arr[index]);
  });
  $('.banner-pic').mouseenter(function() {
    clearInterval(timer);
  });
  $('.banner-pic').mouseleave(function() {
    timer = setInterval(chan, 2000);
  });
  blis.mouseenter(function(event) {
    clearInterval(timer);
    //清除自动动时候的li及其子元素上的样式
    slii.parent().removeClass('current');
    slii.parents('li').find('.bg').removeClass('current');
    $(this).addClass('mouse-hover').siblings().removeClass('mouse-hover');
    $(this).find('.title-item p:first-child i').addClass('yellow');
    index = $(this).data('num');
    bbg.css('background', arr[index]);
    pics.css('display', 'none');
    pics.eq(index).css('display', 'block');
  });
  blis.mouseleave(function(event) {
    clearInterval(timer);
    $(this).find('.title-item p:last-child i').removeClass('yellow');
    timer = setInterval(chan, 2000);

    $(this).removeClass('mouse-hover');
    $(this).find('.bg').addClass('current');
    $(this).find('.ctrl-dot').addClass('current');
    slii.eq(index).addClass('yellow');
  });
  $('.banner-ctrl p').mouseenter(function() {
    index = $('.banner-ctrl p').index(this);
    bbg.css('background', arr[index]);
    pics.css('display', 'none');
    pics.eq(index).css('display', 'block');

    		$(this).find('i').removeClass('yellow');
    $(this).siblings().find('i').removeClass('yellow');
    $(this).children('i').addClass('yellow');
  });
  $('.banner-ctrl p').mouseleave(function() {
    slii.eq(index).addClass('yellow');
    slii.eq(index).siblings().removeClass('yellow');
  });
});
//tab切换
$(function(){
  var li_tab=$('.floor_top .tab li');
  li_tab.mouseenter(function(event) {
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    var num=$(this).index();
    $(this).parents('.floor').find('.J-domLazy').eq(num).css('display','block');
		$(this).parents('.floor').find('.J-domLazy').eq(num).siblings('.J-domLazy').css('display','none');
  });
});
//底部社区轮转

$(document).ready(function(){
	var index=0;
	var len=$(".hots-and-share-wai .J-domLazy").length;
	$(".floor-zone-main .switch-prev").click(function(){
		if(index==len-1){index=-1};
		index++;
		$(".hots-and-share-wai .J-domLazy").eq(index).fadeIn().siblings().hide();
	});

	$(".floor-zone-main .switch-next").click(function(){
		if(index==0){index=len}
		index--;
		$(".hots-and-share-wai .J-domLazy").eq(index).fadeIn().siblings().hide();
	});


});
//悬浮菜单
$(function(){
  var Logo=$("#layout_float_nav");
  $(window).scroll(function(event) {
    if($(window).scrollTop()>700){
      Logo.addClass('ScrollNav');
    }else{
      Logo.removeClass('ScrollNav');
    }
  });
});
//左侧滚动显示
$(function(){
  $(window).scroll(function(event) {
    var ling=$(window).scrollTop();
    if(ling>1320){
      $('#float_left').show();
    }
    if(1320<ling && ling<2110){
					$('#float_left ul li').eq(0).find('.icon').hide().siblings('.name').css('display','block');
					$('#float_left ul li').eq(0).siblings('li').find('.icon').css('display','block').siblings('.name').hide();
				}else if(ling<2700){
					$('#float_left ul li').eq(1).find('.icon').hide().siblings('.name').css('display','block');
					$('#float_left ul li').eq(1).siblings('li').find('.icon').css('display','block').siblings('.name').hide();
				}else if(ling<3160){
					$('#float_left ul li').eq(2).find('.icon').hide().siblings('.name').css('display','block');
					$('#float_left ul li').eq(2).siblings('li').find('.icon').css('display','block').siblings('.name').hide();
				}else if(ling<3696){
					$('#float_left ul li').eq(3).find('.icon').hide().siblings('.name').css('display','block');
					$('#float_left ul li').eq(3).siblings('li').find('.icon').css('display','block').siblings('.name').hide();
				}else if(ling<4224){
					$('#float_left ul li').eq(4).find('.icon').hide().siblings('.name').css('display','block');
					$('#float_left ul li').eq(4).siblings('li').find('.icon').css('display','block').siblings('.name').hide();
				}else if(ling<4752){
					$('#float_left ul li').eq(5).find('.icon').hide().siblings('.name').css('display','block');
					$('#float_left ul li').eq(5).siblings('li').find('.icon').css('display','block').siblings('.name').hide();
				}else if(ling<5280){
					$('#float_left ul li').eq(6).find('.icon').hide().siblings('.name').css('display','block');
					$('#float_left ul li').eq(6).siblings('li').find('.icon').css('display','block').siblings('.name').hide();
				}else if(ling<5808){
					$('#float_left ul li').eq(7).find('.icon').hide().siblings('.name').css('display','block');
					$('#float_left ul li').eq(7).siblings('li').find('.icon').css('display','block').siblings('.name').hide();
				}else if(ling<6336){
					$('#float_left ul li').eq(8).find('.icon').hide().siblings('.name').css('display','block');
					$('#float_left ul li').eq(8).siblings('li').find('.icon').css('display','block').siblings('.name').hide();
				}else if(ling<6864){
					$('#float_left ul li').eq(9).find('.icon').hide().siblings('.name').css('display','block');
					$('#float_left ul li').eq(9).siblings('li').find('.icon').css('display','block').siblings('.name').hide();
				}
				if(ling>6880 || ling<1320){
					$('#float_left').hide();
				}
  });
});
$(function(){
			$('#float_left ul li').hover(function(){
				$(this).find('.icon').hide().siblings('.name').css({'display':'block','background':'#fff','color':'#666'});
			},function(){

				$(this).find('.icon').css({'display':'block','background':'#f4f4f4','color':'#B8B8B8'}).siblings('.name').hide();
			})
		})
//右侧滚动出
$(function(){
  $('#right_float .yidong').hover(function(){
    $(this).find('.l_rw').stop().animate({
      'width':'50px'
    }, 400);
  },function(){
    $(this).find('.l_rw').stop().animate({
      'width':'0px'
    },400);
  });
});
$(document).ready(function(){

	$('#right_float .yidong').hover(function(){

		$(this).find('.l_rw3').stop().animate({
			'width':'132px'
		},400);
	},function(){
		$(this).find('.l_rw3').stop().animate({
			'width':'0px'
		},400);
		});



});
$(document).ready(function(){

	$('#right_float .yidong').hover(function(){

		$(this).find('.l_rw2').stop().animate({
			'width':'75px'
		},400);
	},function(){
		$(this).find('.l_rw2').stop().animate({
			'width':'0px'
		},400);
		});



});
