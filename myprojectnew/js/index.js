//登录事件
$('#entryOne').click(function(e){
  e.preventDefault();
  $('#entry').css('display','block');
});
//注册事件
$('#reg_first').click(function(e){
  e.preventDefault();
  $('#registration').css('display','block');
});
//立即登录
$('.nav_reg div a').click(function(e){
  e.preventDefault();
  $('#registration').css('display','none');
  $('#entry').css('display','block');
});
//登录关闭
$('.entryWay span').click(function(){
  console.log(123);
  $('#entry').css('display','none');
});
//注册关闭
$('.nav_p span').click(function(){
  console.log(456);
  $('#registration').css('display','none');
});



//验证码
function agin(){
  var ctx = c1.getContext("2d");
  var str = "abcdefghijkmnpqrstuvwxyz3456789";
  var str1 = "";
  ctx.clearRect(0,0,120,40);
  ctx.fillStyle=rc(176);
  ctx.fillRect(0,0,120,40);
  ctx.font="bold 27px SimHei";
  for (var i = 0; i < 5; i++) {
    var deg1=Math.floor(Math.random()*15);
    if(deg1%2==1){deg1=deg1+300}
    var char = str[Math.floor(Math.random() * 31)];
    ctx.save();
    ctx.translate(i*20,25);
    ctx.rotate(deg1*Math.PI/180);
    ctx.fillStyle=rc(0);
    ctx.fillText(char,10,0,40);
    ctx.restore();
  }
  for(var j=0;j<5;j++){
    ctx.strokeStyle=rc(120);
    ctx.beginPath();
    ctx.moveTo(Math.floor(Math.random()*200),Math.floor(Math.random()*100));
    ctx.lineTo(Math.floor(Math.random()*200),Math.floor(Math.random()*100));
    ctx.stroke();
  }
  for(var l=0;l<200;l++){
    ctx.strokeStyle=rc(20);
    ctx.strokeRect(Math.floor(Math.random()*200),Math.floor(Math.random()*100),1,1);
  }
  function rc(x){
    var r = Math.floor(Math.random()*80+x);
    var g = Math.floor(Math.random()*80+x);
    var b = Math.floor(Math.random()*80+x);
    return 'rgb('+r+','+g+','+b+')';
  }
}
window.onload =agin();
$('#a1').click(function(){agin();});
//************************************************轮播
//
//$('.ad_1 li').mouseenter(function(){
//
//  var left_ju=$(this).html();
//  console.log(left_ju);
//  console.log(-(2500*(left_ju-1))-575);
//  $('.content').css('left',-(2500*(left_ju-1))-575+'px');
//  //var content = document.getElementsByClassName('content')[0];
//  //content.style.left=-(2500*(left_ju-1))-575+'px';
//});
//轮播侧边栏
$('.isNone').click(function(e){
  e.preventDefault();
  console.log(123);
  $('#search_left').toggle('isBlock');
  $('#search_right').toggle('isBlock');
});

































//详情页
$('.detail_list li img').mouseover(function(){
  //var src=e.target;
  console.log($(this));
  var src1=$(this).attr('src');
  $('.detail_lg img').attr('src',src1);
});
$('.click li').click(function(){
  $(this).addClass('color_active').siblings('li').removeClass('color_active');
});
$('.nav_detail li a').click(function(){
  $(this).addClass('active_red')
         .parent()
         .siblings('li')
         .children('a')
         .removeClass('active_red');
});
//购买数量减
$('.add_sub ul li:first').click(function(){
  var oLi=$(this).next();
  var add=parseInt($(oLi).text());
  if(add>1){
    add-=1;
    $(oLi).text(add);
  }
});
//购买数量加
$('.add_sub ul li:last').click(function(){
  var oLi=$(this).prev();
  var sub=parseInt($(oLi).text());
  if(sub>0){
    sub+=1;
    $(oLi).text(sub);
  }
});



























