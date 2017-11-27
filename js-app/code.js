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

renderMovie(movieData);