var n = 0;
var count = 0;
var id;
var videoID;
var title;
var thumb_url;
  (function popularVideos(){
    $.ajax({
    type: "GET",
    url: "type.json",
    complete: function (response) {
        const videos = response.responseJSON.videos;
        var popularLength = videos.length;
      for(var i=0;i<videos.length;i++){
        videoID = videos[i].youtube_id;
        title = videos[i].title;
        thumb_url = 'https://i.ytimg.com/vi/' + videos[i].youtube_id + '/mqdefault.jpg';
        Createvideos();
      }
      $(".PopularCount").text('('+popularLength+')')
      count ++;
    }
  });

function Createvideos(){
var li=document.createElement('li');
li.href='https://youtube.com/embed/?videoID=' + videoID + '';
li.innerHTML = '<a class="" href="https://youtube.com/embed/?videoID=' + videoID + '?rel=0">'+
                     '<div class="list-left">' +
                             '<img src="' + thumb_url + '">'+
                         '</div>' +
                         '<div class="list-right">' +
                             '<h3>' + title + '</h3>' +
                             /*'<p>' + description + '</p>' +*/
                         '</div> </a>'

$('#results, #results1').append(li);

                       setTimeout(function(){ $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 260,
        itemMargin: 20,
        pausePlay: true,
        controlNav: true,
        slideshow: false,
      });
            $('.flex-next').html('<span class="fa fa-chevron-right"></span>');
      $('.flex-prev').html('<span class="fa fa-chevron-left"></span>');
  },1000);


}
})();
var count1 = 0;
var id1;
var id2, id3, id4, id5;
(function bannerVideos(){
$.ajax({
    type: "GET",
    url: "type1.json",
    success: function (result) {
      for(var i=0;i<result.length;i++){
        var img_num = result[i];
        id1 = img_num.id;
        img_url = img_num.url;
        if(i==1){
        }
        else if(i==2){
            id2= id1;
        }
        else if(i==3){
            id3= id1;
        }
        else if(i==4){
            id4= id1;
        }
        else{
            id5= id1;
        }

      }
      count1 ++;
    }
  });
})();
$(document).ready(function(){
$(".slide1").click(function(){
$(".slide1 img, .fa-play-circle").hide();
$(this).find("iframe").attr('src','https://videoken.com/embed/?videoID='+id1+'&autoplay=1&autoplay=1');
$(".embed-responsive-item").css("z-index","1");
});
$(".slide2").click(function(){
$(".slide2 img, .fa-play-circle").hide();
$(this).find("iframe").attr('src','https://videoken.com/embed/?videoID='+id2+'&autoplay=1');
$(".embed-responsive-item").css("z-index","1");
});$(".slide3").click(function(){
$(".slide3 img, .fa-play-circle").hide();
$(this).find("iframe").attr('src','https://videoken.com/embed/?videoID='+id3+'&autoplay=1');
$(".embed-responsive-item").css("z-index","1");
});$(".slide4").click(function(){
$(".slide4 img, .fa-play-circle").hide();
$(this).find("iframe").attr('src','https://videoken.com/embed/?videoID='+id4 +'&autoplay=1');
$(".embed-responsive-item").css("z-index","1");
});$(".slide5").click(function(){
$(".slide5 img, .fa-play-circle").hide();
$(this).find("iframe").attr('src','https://videoken.com/embed/?videoID='+id5+'&autoplay=1');
$(".embed-responsive-item").css("z-index","1");
});
$(".videoken-button").click(function(){
$(".embed-responsive-item").css("z-index","-1");
$(".fa-play-circle").css("display","flex !important");
$(".mySlides").css("z-index","1");
});
});