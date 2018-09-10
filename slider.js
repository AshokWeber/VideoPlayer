var n = 0;
var count = 0;
var id;
var videoID;
var title;
var thumb_url;
(function popularVideos() {
    $.ajax({
        type: "GET",
        url: "type.json",
        complete: function(response) {
            const videos = response.responseJSON.videos;
            var popularLength = videos.length;
            for (var i = 0; i < videos.length; i++) {
                videoID = videos[i].youtube_id;
                title = videos[i].title;
                thumb_url = 'https://i.ytimg.com/vi/' + videos[i].youtube_id + '/maxresdefault.jpg';
                Createvideos();
            }
            $(".PopularCount").text('(' + popularLength + ')')
            count++;
        }
    });

    function Createvideos() {
        var li = document.createElement('li');
        li.setAttribute('href', videoID);
        li.href = 'https://youtube.com/embed/?videoID=' + videoID + '';
        li.innerHTML = '<div class="list-left">' +
            '<img src="' + thumb_url + '">' + '<i class="fa fa-play"></i>' +
            '</div>' +
            '<div class="list-right">' +
            '<h3>' + title + '</h3>' +
            /*'<p>' + description + '</p>' +*/
            '</div>'

        $('#results, #results1').append(li);

        setTimeout(function() {
            $('.flexslider').flexslider({
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
        }, 1000);


    }
})();
(function featuredVideos() {
    $.ajax({
        type: "GET",
        url: "type.json",
        complete: function(response) {
            const videos = response.responseJSON.videos;
            var popularLength = videos.length;
            for (var i = 0; i < videos.length; i++) {
                videoID = videos[i].youtube_id;
                title = videos[i].title;
                thumb_url = 'https://i.ytimg.com/vi/' + videos[i].youtube_id + '/maxresdefault.jpg';
                views = videos[i].views;
                Createfeaturedvideos();
            }
            /*$(".PopularCount").text('('+popularLength+')')*/
            count++;
        }
    });

    function Createfeaturedvideos() {
        var li = document.createElement('li');
        li.setAttribute('href', videoID);
        li.href = 'https://youtube.com/embed/?videoID=' + videoID + '';
        li.innerHTML = '<div class="list-left">' +
            '<img src="' + thumb_url + '">' + '<i class="fa fa-play"></i>' +
            '</div>' +
            '<div class="list-right">' +
            '<h3>' + title + '</h3>' + '<h5>' + views + '&nbsp;views <i class="fa fa-check"></i></h5>' + ''
        /*'<p>' + description + '</p>' +*/
        '</div>'

        $('#results2').append(li);
    }
})();
var count1 = 0;
var id0, id1, id2, id3, id4, id5;
(function bannerVideos() {
    $.ajax({
        type: "GET",
        url: "type1.json",
        success: function(result) {
            for (var i = 0; i < result.length; i++) {
                var img_num = result[i];
                console.log(result[1]);
                id1 = img_num.id;
                img_url = img_num.url;
                if (i == 0) {
                    id0 = id1;
                    $(".slide1 img").attr("src", 'https://i.ytimg.com/vi/' + result[0].id + '/maxresdefault.jpg');
                } else if (i == 1) {
                    $(".slide2 img").attr("src", 'https://i.ytimg.com/vi/' + result[1].id + '/maxresdefault.jpg');
                    id2 = id1;
                } else if (i == 2) {
                    id3 = id1;
                    $(".slide3 img").attr("src", 'https://i.ytimg.com/vi/' + result[2].id + '/maxresdefault.jpg');

                } else if (i == 3) {
                    id4 = id1;
                    $(".slide4 img").attr("src", 'https://i.ytimg.com/vi/' + result[3].id + '/maxresdefault.jpg');

                } else if (i == 4) {
                    id5 = id1;
                    $(".slide5 img").attr("src", 'https://i.ytimg.com/vi/' + result[4].id + '/maxresdefault.jpg');
                }
            }
            count1++;
        }
    });
})();
$(document).ready(function() {
    $(".slide1").click(function() {
        $(".slide1 img, .fa-play").hide();
        $(this).find("iframe").attr('src', 'https://stage.videoken.com/embed/?videoID=' + id0 + '&autoplay=1');
        $(".embed-responsive-item").css("z-index", "1");
    });

    $(".slide2").click(function() {
        $(".slide2 img, .fa-play").hide();
        $(this).find("iframe").attr('src', 'https://stage.videoken.com/embed/?videoID=' + id2 + '&autoplay=1');
        $(".embed-responsive-item").css("z-index", "9");
    });
    $(".slide3").click(function() {
        $(".slide3 img, .fa-play").hide();
        $(this).find("iframe").attr('src', 'https://stage.videoken.com/embed/?videoID=' + id3 + '&autoplay=1');
        $(".embed-responsive-item").css("z-index", "9");
    });
    $(".slide4").click(function() {
        $(".slide4 img, .fa-play").hide();
        $(this).find("iframe").attr('src', 'https://stage.videoken.com/embed/?videoID=' + id4 + '&autoplay=1');
        $(".embed-responsive-item").css("z-index", "9");
    });
    $(".slide5").click(function() {
        $(".slide5 img, .fa-play").hide();
        $(this).find("iframe").attr('src', 'https://stage.videoken.com/embed/?videoID=' + id5 + '&autoplay=1');
        $(".embed-responsive-item").css("z-index", "9");
    });
    $(".videoken-button").click(function() {
        $(".embed-responsive-item").css("z-index", "-1");
        $(".fa-play").css("display", "flex !important");
        $(".mySlides").css("z-index", "9");
        $('iframe').attr('src', '');
    });
});
$(document).ready(function() {
    $("#results li, #results1 li, #results2 li").click(function() {
        var get_href = $(this).attr("href");
        $("#myModal").show();
        $('.embedYTVideoModal').html('<iframe class="banner-iframe-pc" allowfullscreen="allowfullscreen" src=https://stage.videoken.com/embed/?videoID=' + get_href + '&autoplay=1 frameBorder="0"></iframe>');
    });
    var modal = document.getElementById('myModal');
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            $('#myModal iframe').attr('src', '');
        }
    }
    var bannerElement = $(".videoken-display-container").height();
    $(".featuredList").height(bannerElement);
    $("#results2").css("max-height", bannerElement - 26);
    $(".close").click(function() {
        $("#myModal").fadeOut();
        $('#myModal iframe').attr('src', '');
    });
});