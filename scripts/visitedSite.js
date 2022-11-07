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
if (page == "getOut.html"){

    let value = parseInt(sessionStorage.getItem("getOut"), 10);

    sessionStorage.setItem("getOut", value + 1);

    let timesVisited = sessionStorage.getItem("getOut");

    
    if (timesVisited > 0){

        console.log("Another day, more pain")

    }

}
if (page == "wakeUp1-1.html"){
    console.log("That coffee may have consequences");
}
if(page == "enterSleep3-1.html"){

    let value = parseInt(sessionStorage.getItem("enterSleep3-1"), 10);

    sessionStorage.setItem("enterSleep3-1", value + 1);

    let timesVisited = sessionStorage.getItem("enterSleep3-1");

    console.log(timesVisited)

    if (timesVisited > 1){

        console.log("Dont forget what happened here.....");

    }

    
}
if(page == "wakeUp1-1-1-2.html"){

    let value = parseInt(sessionStorage.getItem("wakeUp1-1-1-2"), 10);

    sessionStorage.setItem("wakeUp1-1-1-2", value + 1);

    let timesVisited = sessionStorage.getItem("wakeUp1-1-1-2");

    if (timesVisited > 1){
        console.log("What choice do you even have here....")
    }

}
if(page == "enterSleep3.html"){

    let value = parseInt(sessionStorage.getItem("enterSleep3"), 10);

    sessionStorage.setItem("enterSleep3", value + 1);

    let timesVisited = sessionStorage.getItem("enterSleep3");

    if (timesVisited > 1){
        console.log("This McDonalds seems a bit off no?")
    }

}
