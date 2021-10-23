
function scroll1(){
    window.scroll(0,1000)
}



function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  


function run() {
    document.getElementById('button').style.visibility="hidden"
    const obj = document.getElementById("value");
    obj.style.color="white"
    animateValue(obj, 0, 59000, 3000);   
}


function run1() {
  document.getElementById('button1').style.visibility="hidden"
  const obj = document.getElementById("value2");
  animateValue(obj, 0, 59000,3000);   
}

function run2() {
  document.getElementById('button2').style.visibility="hidden"
  const obj = document.getElementById("value3");
  animateValue(obj, 0, 59000,3000);   
}

function run3() {
  document.getElementById('button3').style.visibility="hidden"
  const obj = document.getElementById("value4");
  animateValue(obj, 0, 54990,3000);   
}


function run4() {
  document.getElementById('button4').style.visibility="hidden"
  const obj = document.getElementById("value5");
  animateValue(obj, 0, 54990,3000);   
}


function run5() {
  document.getElementById('button5').style.visibility="hidden"
  const obj = document.getElementById("value6");
  animateValue(obj, 0, 54990,3000);   
}


function run6() {
  document.getElementById('button6').style.visibility="hidden"
  const obj = document.getElementById("value7");
  animateValue(obj, 0, 56990,3000);   
}

function run7() {
  document.getElementById('button7').style.visibility="hidden"
  const obj = document.getElementById("value8");
  animateValue(obj, 0, 57990,3000);   
}

function run8() {
  document.getElementById('button8').style.visibility="hidden"
  const obj = document.getElementById("value9");
  animateValue(obj, 0, 57990,3000);   
}


function one(){
  window.open("https://www.amazon.in/Lenovo-i5-9300HF-39-63cm-Windows-81SY00UAIN/dp/B094XL5V92/ref=sr_1_3?dchild=1&keywords=Lenovo+Legion+i5+9th+Gen&qid=1634994346&qsid=258-2752787-6053517&sr=8-3&sres=B094XL5V92%2CB092MT55XP%2CB07XP981T8%2CB099NQZPV6%2CB07ZTGVLDY%2CB07V5HN7XN%2CB09B7SG9V7%2CB092MRQCJ6%2CB092MTLNBB%2CB08WRL9GQW%2CB08BSH4K6D%2CB098P8RVLH%2CB096SLFV5G%2CB09C5X6H5J%2CB08JLQX4GZ%2CB097TY6PTN&srpt=NOTEBOOK_COMPUTER")
}


function one1(){
  window.open("https://www.flipkart.com/lenovo-legion-core-i5-9th-gen-8-gb-512-gb-ssd-windows-10-home-4-graphics-nvidia-geforce-gtx-1650-y540-15irh-pg0-gaming-laptop/p/itmeb43daaf894f2?pid=COMG36BSEZCYDGVG&lid=LSTCOMG36BSEZCYDGVGWZCOP8&marketplace=FLIPKART&q=laptops+&store=6bo%2Fb5g&srno=s_1_14&otracker=search&otracker1=search&fm=SEARCH&iid=777cddf3-132d-4cfe-af28-e35898263e15.COMG36BSEZCYDGVG.SEARCH&ppt=sp&ppn=sp&ssid=xokydoj6vk0000001634986719098&qH=dfd31570c3f1c384")
}



function two1(){
  window.open("https://www.flipkart.com/acer-nitro-5-ryzen-hexa-core-4600h-8-gb-1-tb-hdd-256-gb-ssd-windows-10-home-4-graphics-nvidia-geforce-gtx-1650-an515-44-an515-44-r9qa-an515-44-r8vs-gaming-laptop/p/itmc1273c0dab274?pid=COMFUR8X6RGZGYCJ&lid=LSTCOMFUR8X6RGZGYCJLMUQYG&marketplace=FLIPKART&q=laptops+&store=6bo%2Fb5g&srno=s_1_13&otracker=search&otracker1=search&fm=SEARCH&iid=777cddf3-132d-4cfe-af28-e35898263e15.COMFUR8X6RGZGYCJ.SEARCH&ppt=sp&ppn=sp&ssid=xokydoj6vk0000001634986719098&qH=dfd31570c3f1c384")
}



function three1(){
  window.open("https://www.flipkart.com/hp-15-ec1105ax-ryzen-5-hexa-core-4600h-8-gb-512-gb-ssd-windows-10-home-4-graphics-nvidia-geforce-gtx-1650-gaming-laptop/p/itmf3409b87e17f7?pid=COMG3X8QGJMNXG3R&lid=LSTCOMG3X8QGJMNXG3RO9GEGS&marketplace=FLIPKART&q=laptops+&store=6bo%2Fb5g&srno=s_1_12&otracker=search&otracker1=search&fm=SEARCH&iid=777cddf3-132d-4cfe-af28-e35898263e15.COMG3X8QGJMNXG3R.SEARCH&ppt=sp&ppn=sp&ssid=xokydoj6vk0000001634986719098&qH=dfd31570c3f1c384")
}




function four1(){
  window.open("https://www.flipkart.com/acer-aspire-7-core-i5-10th-gen-8-gb-512-gb-ssd-windows-10-home-4-graphics-nvidia-geforce-gtx-1650-a715-75g-50ta-a715-75g-41g-gaming-laptop/p/itmc97c3da5d2abe?pid=COMG2KBG2K4GFFF7&lid=LSTCOMG2KBG2K4GFFF78YBPHO&marketplace=FLIPKART&q=laptops+&store=6bo%2Fb5g&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=777cddf3-132d-4cfe-af28-e35898263e15.COMG2KBG2K4GFFF7.SEARCH&ppt=sp&ppn=sp&ssid=xokydoj6vk0000001634986719098&qH=dfd31570c3f1c384")
}




function five1(){
  window.open("https://www.flipkart.com/asus-vivobook-gaming-core-i5-9th-gen-8-gb-512-gb-ssd-windows-10-home-4-graphics-nvidia-geforce-gtx-1650-f571gt-bn913ts-laptop/p/itm8dba8769b86c8?pid=COMG26W4WKY8GUAR&lid=LSTCOMG26W4WKY8GUARCMASBH&marketplace=FLIPKART&q=laptops+&store=6bo%2Fb5g&srno=s_1_5&otracker=search&otracker1=search&fm=SEARCH&iid=777cddf3-132d-4cfe-af28-e35898263e15.COMG26W4WKY8GUAR.SEARCH&ppt=sp&ppn=sp&ssid=xokydoj6vk0000001634986719098&qH=dfd31570c3f1c384")
}


function six1(){
  window.open("https://www.flipkart.com/lenovo-ideapad-gaming-3-ryzen-5-hexa-core-4600h-8-gb-1-tb-hdd-windows-10-home-4-gb-graphics-nvidia-geforce-gtx-1650-60-hz-15arh05-laptop/p/itm64d83a7c01261?pid=COMG3HHRTM3YFGTU&lid=LSTCOMG3HHRTM3YFGTU3SQHHJ&marketplace=FLIPKART&q=laptops+&store=6bo%2Fb5g&srno=s_1_4&otracker=search&otracker1=search&fm=SEARCH&iid=777cddf3-132d-4cfe-af28-e35898263e15.COMG3HHRTM3YFGTU.SEARCH&ppt=sp&ppn=sp&ssid=xokydoj6vk0000001634986719098&qH=dfd31570c3f1c384")
}



function seven1(){
  window.open("https://www.flipkart.com/msi-gf63-thin-hexa-core-i5-10th-gen-8-gb-1-tb-hdd-256-gb-ssd-windows-10-home-4-graphics-nvidia-geforce-gtx-1650-max-q-60-hz-10scxr-1616in-10sc-611in-gaming-laptop/p/itmb8888c44a1a68?pid=COMG2K9ZBFJ3ZASR&lid=LSTCOMG2K9ZBFJ3ZASR2MWKVV&marketplace=FLIPKART&q=laptops+&store=6bo%2Fb5g&srno=s_1_7&otracker=search&otracker1=search&fm=SEARCH&iid=777cddf3-132d-4cfe-af28-e35898263e15.COMG2K9ZBFJ3ZASR.SEARCH&ppt=sp&ppn=sp&ssid=xokydoj6vk0000001634986719098&qH=dfd31570c3f1c384")
}



function eight1(){
  window.open("https://www.flipkart.com/asus-tuf-gaming-f15-core-i5-10th-gen-8-gb-512-gb-ssd-windows-10-home-4-graphics-nvidia-geforce-gtx-1650-ti-144-hz-fx506li-hn271ts-laptop/p/itme14aa4095ad4c?pid=COMGFVWMZXNEDHFB&lid=LSTCOMGFVWMZXNEDHFBKVM1HI&marketplace=FLIPKART&q=laptops+&store=6bo%2Fb5g&srno=s_1_11&otracker=search&otracker1=search&fm=SEARCH&iid=777cddf3-132d-4cfe-af28-e35898263e15.COMGFVWMZXNEDHFB.SEARCH&ppt=sp&ppn=sp&ssid=xokydoj6vk0000001634986719098&qH=dfd31570c3f1c384")
}



function nine1(){
  window.open("https://www.flipkart.com/dell-g15-core-i5-10th-gen-8-gb-512-gb-ssd-windows-10-4-graphics-nvidia-geforce-gtx-1650-120-hz-g15-5510-inspiron-5510-gaming-laptop/p/itmd23032009a131?pid=COMG3P7NGMTA7ZMM&lid=LSTCOMG3P7NGMTA7ZMMFMBFXE&marketplace=FLIPKART&q=laptops+&store=6bo%2Fb5g&srno=s_1_10&otracker=search&otracker1=search&fm=SEARCH&iid=777cddf3-132d-4cfe-af28-e35898263e15.COMG3P7NGMTA7ZMM.SEARCH&ppt=sp&ppn=sp&ssid=xokydoj6vk0000001634986719098&qH=dfd31570c3f1c384")
}