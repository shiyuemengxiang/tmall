﻿$(function(){
				 		//导航滑过样式
				 		$('.sort .sort_l>div,.sort .sort_r,.sort_end img').hover(function(){
				 			$('.sort .sort_r,.sort_end img').css({'display':'block'});
				 			
				 		},function(){$('.sort .sort_r,.sort_end img').css({'display':'none'});})
				 		//滑过品牌分类改变透明度
				 		$('.act img').hover(function(){
				 			$(this).css({'opacity':'0.6'});
				 		},function(){$(this).css({'opacity':'1'});})
				 		//滑过yhq区域的li显示优惠券
				 		$('.yhq li').hover(function(){
				 			$(this).find('.con').show();
				 		},function(){$(this).find('.con').hide();})
				 		//滑过右边栏显示提示文字
				 		$('.bar3 a').hover(function(){
				 		$(this).find('div').fadeIn();
				 		},function(){
				 		$(this).find('div').hide();
				 		})
						//滚动条到达一定位置显示电梯导航条
						$(window).scroll(function(){
							var top=$(document).scrollTop();
							if(top>540){
								$('.leftbar').fadeIn();
							}else{
								$('.leftbar').fadeOut();
							}
							// 滚动条到一定位置电梯导航条背景颜色更换
							if(top>1380 && top<2140){
								$('.lbar2').addClass('cor1');
							}
							if(top>2140 && top<2940){
								$('.lbar2').removeClass('cor1');
								$('.lbar3').addClass('cor2');
							}
							if(top>2940 && top<3640){
								$('.lbar3').removeClass('cor2');
								$('.lbar4').addClass('cor3');
							}
							if(top>3640 && top<4460){
								$('.lbar4').removeClass('cor3');
								$('.lbar5').addClass('cor4');
							}
							if(top>4460 && top<5180){
								$('.lbar5').removeClass('cor4');
								$('.lbar6').addClass('cor5');
							}
							if(top>5180 && top<6000){
								$('.lbar6').removeClass('cor5');
								$('.lbar7').addClass('cor6');
							}
							if(top>6000 && top<6800){
								$('.lbar7').removeClass('cor6');
								$('.lbar8').addClass('cor7');
							}
							if(top>6800){
								$('.lbar8').removeClass('cor7');
								$('.lbar9').addClass('cor8');
							}
							//不在该范围内取消色块
							if(top<6800 && top>6000){
								$('.lbar9').removeClass('cor8');
								$('.lbar8').addClass('cor7');
								
							}
							if(top<6000 && top>5180){
								$('.lbar8').removeClass('cor7');
								$('.lbar7').addClass('cor6');
							}
							if(top<5180 && top>4460){
								$('.lbar7').removeClass('cor6');
								$('.lbar6').addClass('cor5');
							}
							if(top<4460 && top>3640){
								$('.lbar6').removeClass('cor5');
								$('.lbar5').addClass('cor4');
							}
							if(top<3640 && top>2940){
								$('.lbar5').removeClass('cor4');
								$('.lbar4').addClass('cor3');
							}
							if(top<2940 && top>2140){
								$('.lbar4').removeClass('cor3');
								$('.lbar3').addClass('cor2');
							}
							if(top<2140 && top>1380){
								$('.lbar3').removeClass('cor2');
								$('.lbar2').addClass('cor1');
							}
							if(top<1380 ){
								$('.lbar2').removeClass('cor1');
							}
							//固定搜索导航条控制
							if(top>1250){
								$('.fixednav').show();
							}else{
								$('.fixednav').fadeOut();
							}
						})
						//给元素添加锚点的id
						$(function(){
							$('.tmsurper').attr('id','tmsurper');
							$('.tmhk').attr('id','tmhk');
							$('.mlrs').attr('id','mlrs');
							$('.cdkw').attr('id','cdkw');
							$('.jjsh').attr('id','jjsh');
							$('.dzac').attr('id','dzac');
							$('.hwcx').attr('id','hwcx');
							$('.love').attr('id','love');
						})
						//解决点击和滑动出现两种色块bug
						$('.leftbar div').click(function(){
//							$(this).siblings().removeClass("[class^=cor]");
//							$(window).scroll()=null;
//							$(this).siblings().css('background-color','#626262')
							//改bug暂时不想处理别问我为什么,就这样
						})
				//tab选项卡效果
						//自动轮播效果
							var s=0;
							//控制自动切换的函数
							var run=function(){
							var lis=$('.tmtab li');
							var cons=$('.tmtab .con');
								s++;
								if(s==2){s=0}
								lis.eq(s).css({'background-color':'#00b262','color':'#fff'}).siblings('li').css({'background-color':'#f1f1f1','color':'#000'});
								cons.css({'background-image':'url("img/tmtab'+(s+1)+'.png")'})
						}
							var timer=setInterval(run,2000);
									//手工滑过切换的效果
							var lis=$('.tmtab li');
							var cons=$('.tmtab .con');
							lis.hover(function(){
								clearInterval(timer);
								var xuhao=$(this).index();
								$(this).siblings('li').css({'background-color':'#f1f1f1','color':'#000'});
								
								$(this).css({'background-color':'#00b262','color':'#fff'});
								if(xuhao==0){
									cons.css({'background-image':'url("img/tmtab1.png")'});
								}
								if(xuhao==1){
									cons.css({'background-image':'url("img/tmtab2.png")'});
								}
							},function(){
								//恢复定时器
								timer=setInterval(run,2000);
							})
						
				 		})