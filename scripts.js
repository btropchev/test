
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

    $(document).ready(function(){
        $(".allImages").click(function(){

            let imgSrc = $(this).attr("src");

            $("#expandedImg").attr("src", imgSrc);
        });
    });

    $(document).ready(function(){
        let maxImageSize = $("#expandedImg").height();
        $(".imgContainer").css("height", maxImageSize);
    });

    // make row1 js functional!

    $(function() {
        let rowFirst = $(".rowFirst");
        let descriptionFirst = $(".descriptionFirst");

        let rowSecond = $(".rowSecond");
        let descriptionSecond = $(".descriptionSecond")

        $(window).scroll(function() {
            let scroll = $(window).scrollTop();

            if (scroll >= 500) {
                rowFirst.css("opacity","0.3");
                descriptionFirst.css("opacity","0.3");
                rowSecond.css("opacity","0.9");
                descriptionSecond.css("opacity","0.9");
            } else {
                rowFirst.css("opacity","0.9");
                descriptionFirst.css("opacity","0.9");
                rowSecond.css("opacity","0.3");
                descriptionSecond.css("opacity","0.3");
            }
        });
    });



