function renderMovie(data){
    document.querySelector(".header").innerText=data.title;
    document.querySelector("#rewiev").innerText=data.rewiev;

    document.querySelector(".img").setAttribute("src",data.image);

    let actorlist="";
    for (let i = 0; i < data.cast.length; i++) {
        actorlist += "<li>" + data.cast[i] +"</li>";
    }
    document.querySelector(".cast").innerHTML = actorlist;
}



function changeStarRating(grade) {
    //Update stars so they appear filled til the number it has been rated to.
    for (let i = 0; i < 5; i++) {
        let star = document.getElementById("star"+i);
        if(i<=grade){
            star.classList.add("filledstars");
        }else{
            star.classList.remove("filledstars");
        }
    }  
}
for(let i=0; i<5;i++){
    let star = document.getElementById("star"+i).addEventListener("click",function(){
        changeStarRating(i);
    });
}
    
//changeStarRating(3);
renderMovie(movieData);