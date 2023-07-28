
let download = document.getElementById("btn1");
let link = document.getElementById("btn");


download.onclick = function (value){
    // console.log("Resume has to be download");
    if(value){
        window.open("https://drive.google.com/file/d/18qFxeQSppTsJMo-63MtZ3EEILl502Nko/view?usp=drivesdk",'_target');
    }
    else{
        console.log(`You have'nt select!`);
    }
}

link.onclick = function (value1){
    // console.log("hello");
    if(value1){
        window.open("https://www.linkedin.com/in/shaikh-ejaz-72b2b6247","_target");
    }
    else{
        console.log("Sorry to Server facing Some issue!");
    }
}




