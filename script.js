var counter = 0;
var current = 0;

$(function() {
var body = $('body');
var backgrounds = new Array(
"url(src/images/img_1.jpg)",
"url(src/images/img_2.jpg)",
"url(src/images/img_3.jpg)"

);

function nextBackground() {
    body.css("background",backgrounds[current = ++current % backgrounds.length]);
    $('body').css(
       { "background":backgrounds[current],
         "-webkit-background-size":"cover",
         "-moz-background-size":"cover",
         "-o-background-size":"cover",
         "background-size":"cover",
         "width": "100%",
         "height": "auto",
       "background-position": "center"
       }); 
    setTimeout(nextBackground, 4500);
}


setTimeout(nextBackground, 4500);
     
 $('body').css(
   { "background":backgrounds[0],
     "-webkit-background-size":"cover",
     "-moz-background-size":"cover",
     "-o-background-size":"cover",
     "background-size":"cover" }
); 
    
});










































