

var inputvalue,msg,small,big,result;
var image = document.createElement("img");


window.onload = function(){
  msg ="輸入數字決定最大值";
  document.querySelector('#msg').innerHTML = msg;
  image.setAttribute("src", "image/wait.gif");
}
function Define_the_number(){

  document.querySelector("#check").setAttribute("style","display:block;")
  inputvalue = document.querySelector('#num').value;  
  small = 0;
  document.querySelector('#big').innerHTML = inputvalue;
  document.querySelector('#small').innerHTML = small;
  result = Math.floor(Math.random()*inputvalue-1);
  msg ="遊戲開始";
  document.querySelector('#msg').innerHTML = msg;
  document.querySelector("#checknumber").setAttribute("style","display:none;")
  big = parseFloat(document.querySelector('#num').value) ;
  console.log("result="+result+"/big="+document.querySelector('#num').value+'/small='+small+'/inputvalue='+inputvalue); 
}

function check(){
  inputvalue = parseFloat(document.querySelector('#num').value); 
  
  if(inputvalue === ""){
    msg = "輸入空氣?";
    image.setAttribute("src", "image/unnamed.gif");
  }else if (isNaN(Number(inputvalue))){
    msg = "本欄位只接受數字";
    image.setAttribute("src", "image/anger.gif");
  }else if (inputvalue === 0){
    msg = "打0是來亂的嗎?";
    image.setAttribute("src", "image/hide.gif");
  }else if(result > inputvalue  & inputvalue >= small ){
    msg = '比'+inputvalue+'還大';
    small = inputvalue;
    image.setAttribute("src", "image/wait.gif");
  }else if(result < inputvalue & inputvalue <= big ){
    msg = '比'+inputvalue+'還小';
    big = inputvalue;
    image.setAttribute("src", "image/wait.gif");
  }else if (result == inputvalue){
    msg = '恭喜你猜對了! 答案是'+result+'。';
    image.setAttribute("src", "image/dance.gif");
    document.querySelector("#again").setAttribute("style", "display: block;");
    document.querySelector("#check").setAttribute("style", "display: none;");
  }else if (inputvalue < small || inputvalue > big ){
    msg = '拜託打數字內的啦:(';
    image.setAttribute("src", "image/CRY.gif");
  }

  console.log("big"+big+'/inputvalue'+inputvalue+'/small'+small);
  document.querySelector('#msg').innerHTML = msg;
  document.querySelector('#big').innerHTML = big;
  document.querySelector('#small').innerHTML = small;
  document.querySelector("#pict").appendChild(image);

}
function again(){
  big ="";
  small="";
  result ="";
  msg ="輸入數字開始遊戲";
  image.setAttribute("src", "image/wait.gif");
  document.querySelector('#msg').innerHTML = msg;
  document.querySelector('#big').innerHTML = big;
  document.querySelector('#small').innerHTML = small;
  document.querySelector("#checknumber").setAttribute("style","display:block;")
  document.querySelector("#again").setAttribute("style","display: none;")
}
