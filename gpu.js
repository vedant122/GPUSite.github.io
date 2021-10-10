let search=document.getElementById("search")
function searchhere(){
    if(search){
        search.textContent=""
    }
}

var time=setInterval(image, 1000);
time=0;
function image(){
    let image=document.getElementById("img")
    if(time<5){
        image.src="https://lh3.googleusercontent.com/proxy/AWGO4Mj_NEZ0G9GJ_4N7uYWbbict28aFR0eMpUZxs0TGKyiyWChTZT46NRxs5iaUhMD3z1fxwsYhkq247kgPUsdCLtwDBwC58-RS0uPCI5nj3gDD4adumjFiB5sg";
    }
    else if(time<10){
        image.src="https://i.ytimg.com/vi/Qt0GFuslOjk/maxresdefault.jpg";
    }
    else if(time<15){
        image.src="https://i.ytimg.com/vi/GOZmLrxMKUw/maxresdefault.jpg";
    }
    else if(time>=15){
        time=0;
    }
    time=1+time;
    console.log(time);
}
function button(){
    let img1=document.getElementById("i1");
    let b1=document.getElementById("b");

    if(b1){
        img1.src="https://wallpaperaccess.com/full/4798318.jpg";
        img1.style.height="700px";
        img1.style.width="1908px";
    }
}

function button1(){
    let img1=document.getElementById("i1");
    let b1=document.getElementById("b1");

    if(b1){
        img1.src="https://wallpapershome.com/images/wallpapers/nvidia-geforce-rtx-3080-ti-2560x1440-graphics-card-8k-22801.jpg";
        img1.style.height="700px";
        img1.style.width="1908px";
    }
}

function button2(){
    let img1=document.getElementById("i1");
    let b1=document.getElementById("b2");

    if(b1){
        img1.src="https://specials-images.forbesimg.com/imageserve/5f97e9c68333492fe90e1c5c/960x0.jpg?cropX1=533&cropX2=3869&cropY1=484&cropY2=2708";
        img1.style.height="700px";
        img1.style.width="1908px";
    }
}

function button3(){
    let img1=document.getElementById("i1");
    let b1=document.getElementById("b3");

    if(b1){
        img1.src="https://www.amd.com/system/files/2020-10/579976-amd-radeon-6000-series-ryzen-logos-1260x709_0.jpg";
        img1.style.height="700px";
        img1.style.width="1908px";
    }
}

function button4(){
    let img1=document.getElementById("i1");
    let b1=document.getElementById("b4");

    if(b1){
        img1.src="https://sm.pcmag.com/pcmag_in/review/a/amd-radeon/amd-radeon-rx-6800-xt_1ffa.jpg";
        img1.style.height="700px";
        img1.style.width="1908px";
    }
}

function button5(){
    let img1=document.getElementById("i1");
    let b1=document.getElementById("b5");

    if(b1){
        img1.src="https://i.ytimg.com/vi/GidizKs5w-g/maxresdefault.jpg";
        img1.style.height="700px";
        img1.style.width="1908px";   
    }
}

let t=setInterval(image1,1000);
t=0;
function image1(){
    
    let b=document.getElementById("b");
    let b1=document.getElementById("b1");
    let b2=document.getElementById("b2");
    let b3=document.getElementById("b3");
    let b4=document.getElementById("b4");
    let b5=document.getElementById("b5");

    if(t<5){
        b.click();
    }
    else if(t<10){
        b1.click();
    }
    else if(t<15){
        b2.click();
    }
    else if(t<20){
        b3.click();
    }
    else if(t<25){
        b4.click();
    }
    else if(t<30){
        b5.click();
    }
    else if(t>=30){
        t=0;
    }
    t=t+1;
    console.log("t"+t);
}

function on(){
    let d1=document.getElementById("b6");
    if(d1){
        t=0;
    }
}
function on1(){
    let d1=document.getElementById("b7");
    if(d1){
        t=5;
    }
}
function on2(){
    let d1=document.getElementById("b8");
    if(d1){
        t=10;
    }
}
function on3(){
    let d1=document.getElementById("b9");
    if(d1){
        t=15;
    }
}
function on4(){
    let d1=document.getElementById("b10");
    if(d1){
        t=20;
    }
} 
function on5(){
    let d1=document.getElementById("b6");
    if(d1){
        t=25;
    }
}

function img(){
    let b=document.getElementById("im1");
    if(b){
        b.tagName="iframe";
        b.title="YouTube video player";
        b.src="https://www.youtube.com/embed/548arPw7jOQ?start=8&autoplay=1&mute=1";
        b.width="560";
        b.height="315";
        b.frameborder="0";
        b.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    }
}

function img1(){
    let b=document.getElementById("im1");
    if(b){
        b.src="";
    }
   
}
function img11(){
    let b=document.getElementById("im12");
    if(b){
        b.title="YouTube video player";
        b.src="https://www.youtube.com/embed/o1FxK_JIuiM?start=9&autoplay=1&mute=1";
        b.width="560";
        b.height="315";
        b.frameborder="0";
        b.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
}
}

function img12(){
    let b=document.getElementById("im12");
    if(b){
        b.src="";
    }
}

function img13(){
    let b=document.getElementById("im13");
    if(b){
        b.title="YouTube video player";
        b.src="https://www.youtube.com/embed/qBAJX2bGk2g?start=9&autoplay=1&mute=1";
        b.width="560";
        b.height="315";
        b.frameborder="0";
        b.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    }
}
function img14(){
    let b=document.getElementById("im13");
    if(b){
        b.src="";
    }
}
