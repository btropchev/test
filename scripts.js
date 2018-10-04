
    $(function (){
        $(".container").mouseover(function() {
           $("#mySidenav")
               .css("width", "40%")
               .css("display", "flex");
           $(".container").css("display", "none");
           $("#secondArticle").css("display","none");
        });
    });

    $(function(){
        $(".sidenav").mouseleave(function(){
            $("#mySidenav").css("width","0");
            $(".container").css("display", "inline-block");
            $("#secondArticle").css("display","inline-block");
        });
    });


    $(function (){
        $("#twoArt").mouseover(function () {
            $("#firstImageSide").css("display", "inline-block");
        })
            .mouseleave(function () {
                $("#firstImageSide").css("display", "none");
            });
    });

    $(function (){
        $("#threeArt").mouseover(function () {
            $("#secondImageSide").css("display", "inline-block");
        })
            .mouseleave(function () {
                $("#secondImageSide").css("display", "none");
            });
    });

    $(function (){
        $("#showreel").mouseover(function () {
            $("#thirdImageSide").css("display", "inline-block");
        })
            .mouseleave(function () {
                $("#thirdImageSide").css("display", "none");
            });
    });

    $(function (){
        $("#about").mouseover(function () {
            $("#forthImageSide").css("display", "inline-block");
        })
            .mouseleave(function () {
                $("#forthImageSide").css("display", "none");
            });
    });


    $(function(){
        $(".closebtn").on("click", function(){
            $("#mySidenav").css("width", "0");
            $(".container").css("display", "inline-block");
            $("#secondArticle").css("display","inline-block");
        });
    });

    $(document).ready(function(){
        $(".showreel, #showreel").click(function(){
            $("iframe")
                .attr("src","https://player.vimeo.com/video/268653762?autoplay=0&loop=1&autopause=0")
                .fadeIn(2000);
            $( ".closeVideo" ).fadeIn( 2000);

        });
    });

    $(document).ready(function(){
        $(".closeVideo").click(function(){
            $("iframe").attr("src","");
            $(".closeVideo").css("display", "none");
        });
    });


