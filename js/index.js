/**
 * Created by bjwsl-001 on 2017/3/20.
 */
//进度条方法
//var timer=null;
function plan(nid, color_d, color_u, font_color, lang) {
  var ctx = nid.getContext("2d");
  var x = -90;
  var y = 0;
  var timer = setInterval(function () {
    ctx.lineWidth = 8;
    ctx.strokeStyle = color_d;
    ctx.beginPath();
    ctx.arc(100, 100, 70, 0, 360 * Math.PI / 180);
    ctx.stroke();
    ctx.strokeStyle = color_u;
    ctx.beginPath();
    ctx.arc(100, 100, 70, -90 * Math.PI / 180, x * Math.PI / 180);
    x += 3.6;
    ctx.stroke();
    ctx.fillStyle = font_color;
    ctx.textBaseline = "top";
    ctx.font = "bold 26px Arial";
    ctx.clearRect(60, 60, 75, 75);
    ctx.fillText(y + '%', 80, 80, 100);
    y += 1;
    if (y > lang) {
      clearInterval(timer);
    }
  }, 30);
}
//定时器重叠问题，
$(document).scroll(function(){
  var hei= $(document).scrollTop();
  console.log(hei);
  var top1= $('#floor3').offset();
  var topT=Math.ceil(top1.top);
  if(hei==topT){
    plan(c1, '#ddd', '#77e99f', '#77e99f', 90);//html
    plan(c2, '#ddd', '#d9849a', '#d9849a', 88);//css
    plan(c3, '#ddd', '#f5a472', '#f5a472', 85);//jquery
    plan(c4, '#ddd', '#dbda7b', '#dbda7b', 80);//bootstrap
    plan(c5, '#ddd', '#abc866', '#abc866', 80);//angularJs
    plan(c6, '#ddd', '#61b2a2', '#61b2a2', 84);//php
    plan(c7, '#ddd', '#bd89e9', '#bd89e9', 82);//ionic
    plan(c8, '#ddd', '#63b8db', '#63b8db', 78);//nodeJs
  }

});
plan(c1, '#ddd', '#77e99f', '#77e99f', 90);//html
plan(c2, '#ddd', '#d9849a', '#d9849a', 88);//css
plan(c3, '#ddd', '#f5a472', '#f5a472', 85);//jquery
plan(c4, '#ddd', '#dbda7b', '#dbda7b', 80);//bootstrap
plan(c5, '#ddd', '#abc866', '#abc866', 80);//angularJs
plan(c6, '#ddd', '#61b2a2', '#61b2a2', 84);//php
plan(c7, '#ddd', '#bd89e9', '#bd89e9', 82);//ionic
plan(c8, '#ddd', '#63b8db', '#63b8db', 78);//nodeJs

$(document).scroll(function () {
  var high = $(document).scrollTop();
  console.log(high);

  if (high >=2600) {
    $('h2.animated').addClass('fadeInUp');
    $('.animated').addClass('fadeInRight');
    $('.animated').addClass('fadeInRight');
  }
  else{
    $('h2.animated').removeClass('fadeInUp');
    $('.animated').removeClass('fadeInRight');
    $('.animated').removeClass('fadeInRight');
  }
  //导航固定
  var top1= $('#floor1').offset();
  var topT=Math.ceil(top1.top);
  if (high >=topT) {
    $('#navbar-example').addClass('navbar-fixed-top');
    $('#toUp').css('opacity',1);
  } else {
    $('#navbar-example').removeClass('navbar-fixed-top');
    $('#toUp').css('opacity',0);
  }
});
//点击跳楼
$('#scroll_down li a').click(function () {
  var tid = $(this).attr('href');
    console.log(tid);
     var top1= $(tid).offset();
  var topT=Math.ceil(top1.top);
      console.log(topT);
  $('html,body').animate({scrollTop:topT}, 700);
});
//进入一楼
//$('#btn_start').click(function () {
//  var sm = $(this).attr('gd');
//  $('html,body').animate({scrollTop: sm}, 700);
//});
$('#btn_start').click(function () {
  var tid = $(this).attr('toOne');
  var top1= $(tid).offset();
  var topT=Math.ceil(top1.top);
  $('html,body').animate({scrollTop:topT}, 700);
});
//置顶
$('#toUp').click(function () {
  var sm = $(this).attr('gd');
  $('html,body').animate({scrollTop: sm}, 700);
});


//留言功能
$('#btn').click(function(){
  var u_name=$('#uName').val();
  var my_email=$('#myEmail').val();
  var my_text=$('#myText').val();
  if(u_name&&my_email&&my_text){
    console.log(88888);
    $.ajax({
      type:"post",
      url:"php/msg.php",
      data:{uName:u_name,myEmail:my_email,myText:my_text},
      success:function(d){
        console.log(d);
        if(d.code==1){
          console.log('进来了');
          $('#uName').val('');
          $('#myEmail').val('');
          $('#myText').val('');
          $('.none').show();
        }


      }
    })

  }
  else{
    console.log('错误了');
  }
  setTimeout(function(){$('.none').hide();},3000);
});

























