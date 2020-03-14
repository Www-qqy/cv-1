let html = document.querySelector("#html");
let style = document.querySelector("#style");
//加注释防止html语句干扰css
let string = `
/*你好，我是一名前端新人
接下来我要画一个八卦图
首先我要准备一个div:*/ 

#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(255,254,254,1) 50%, rgba(251,251,251,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    
    width:100px;
    height:100px;
    top:0;
    left:50%;
    background:#000;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);

}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n); //因为string2刚才被改成里面有<br>&nbsp,css语句里面不能有html标签
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      n += 1;
      step(); //要写在setTimeout里面，放在外面计时时间相同，代码会同时执行。
    }
  }, 0);
};
step();
