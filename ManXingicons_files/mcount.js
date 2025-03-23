  //百度统计(总)
var _hmt = _hmt || [];
var _hmUrl = 'https://hm.baidu.com/hm.js?';
$(function () {//tongji
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?2c5b3db18ee468080dd56d3ddf4ddc5a";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
});


//百度统计个人
if (typeof _webInfo != "undefined") {//add tongji for everyBJ
  var bjname = _webInfo.Username;
  var hm = document.createElement("script");
  if (bjname != '') {
    switch (bjname){
      case 'wjh':
      hm.src = _hmUrl+"71a386ad3b066d4fc29383d8fb7b6b26";
      break; 
      case 'xxl':
      hm.src = _hmUrl+"7edf7cb51f77f68b020b3a3564e88023";
      break; 
      case 'fanbin':
      hm.src = _hmUrl+"3029f9fd7a6dfb501e028a44d95e5e83";
      break; 
      case 'chenlong':
      hm.src = _hmUrl+"abc68739482770cd72ecbb5dc5ffa138";
      break; 
      case 'xjj':
      hm.src = _hmUrl+"e222eab0aa6a01041f8233e21f0bd28f";
      break; 
      case 'xww':
      hm.src = _hmUrl+"b45e95caff3b691ed9fb0732af6e887f";
      break;  
    }
    if (hm.src != '') {
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    }
  }
}