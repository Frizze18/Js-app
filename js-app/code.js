let movieData =require("./data.js");
let $ = require("jquery");


function renderMovie(data){
    //document.querySelector(".header").innerText=data.title;
    //$(".header").text(data.title);
    ui.title.text(data.title);

   // document.querySelector("#rewiev").innerText=data.rewiev;
   //$("#rewiev").text(data.rewiev);
   ui.rewiev.text(data.rewiev);

   // document.querySelector(".img").setAttribute("src",data.image);
   $(".img").attr("src",data.image);
   //ui.image


    let actorlist="";
    for (let i = 0; i < data.cast.length; i++) {
        actorlist += "<li>" + data.cast[i] +"</li>";
    }
  //  document.querySelector(".cast").innerHTML = actorlist;
    $(".cast").html(actorlist);
}
function changeStarRating(grade) {
    for (let i = 0; i < 5; i++) {
        let star = $("#star" + i); //document.getElementById("star"+i);
        if(i<=grade){
            //star.classList.add("filledstars");
            star.addClass("filledstars");
        }else{
           // star.classList.remove("filledstars");
            star.removeClass("filledstars");
        }
    }

    /*
    let collectionStars = $(".stars");
    collectionStars.addClass("filledstars");
    */
}
for(let i=0; i<5;i++){
   /* let star = document.getElementById("star"+i).addEventListener("click",function(){
        changeStarRating(i);
    });*/
    $("#star"+i).click(function(){
        console.log("WOOT");
        changeStarRating(i);
    });
}
let ui={
    title:$(".header"),
    rewiev:$("#rewiev"),
    image:$(".img")
};
    
//changeStarRating(3);

renderMovie(movieData);