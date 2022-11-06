let path = window.location.href

let pathArray = path.split("/");

let page = pathArray.at(-1);

if (page == "enterSleep.html"){

    let value = parseInt(sessionStorage.getItem("enterSleep"), 10);

    sessionStorage.setItem("enterSleep", value + 1);

    let timesVisited = sessionStorage.getItem("enterSleep");

    
    if (timesVisited > 1 && timesVisited < 3){
        console.log("Havent we been here before?");
        window.alert("Hello??? check your console....")

    }
    if (timesVisited > 3){
        console.log("We have been here before, is there something we missed?");
        document.write("Check your console....");
    }
    

}