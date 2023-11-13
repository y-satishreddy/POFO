let margin=100;
if(margin==100){
    setTimeout(()=>{
        document.getElementsByClassName("carousel")[0].style.marginLeft=-margin+"%";
        document.getElementsByClassName("carousel")[0].style.transition="0s";
    }

    ,0)
}

let ct = setInterval(function(){
    if(margin==100){
        setTimeout(()=>{
            document.getElementsByClassName("carousel")[0].style.marginLeft=-margin+"%";
            document.getElementsByClassName("carousel")[0].style.transition="0.8s";
        }
    
        ,2000)
    }
    console.log(margin)
document.getElementsByClassName("carousel")[0].style.marginLeft=-margin+"%";
document.getElementsByClassName("carousel")[0].style.transition="0.8s";
if(margin==900){
    setTimeout(() => {
        margin=100;
    document.getElementsByClassName("carousel")[0].style.marginLeft=0;
    document.getElementsByClassName("carousel")[0].style.transition="0s";
 
    },800);
}
if(margin===1000){
    margin=100;
    document.getElementsByClassName("carousel")[0].style.marginLeft=0;
    document.getElementsByClassName("carousel")[0].style.transition="0s";

}
else{
margin=margin+100;
}
},2000)

let margin2=100;


let ct2 = setInterval(function(){
    console.log(margin2)
document.getElementsByClassName("carousel2")[0].style.marginLeft=-margin2+"%";
document.getElementsByClassName("carousel2")[0].style.transition="0.8s";

if(margin2===300){
    margin2=0;
    document.getElementsByClassName("carousel2")[0].style.marginLeft=0;
    document.getElementsByClassName("carousel2")[0].style.transition="0s";

}
else{
margin2=margin2+100;
}
},3000)

let margin3=100;


let ct3 = setInterval(function(){
    console.log(margin2)
document.getElementsByClassName("carousel3")[0].style.marginLeft=-margin2+"%";
document.getElementsByClassName("carousel3")[0].style.transition="0.8s";

if(margin2===300){
    margin2=0;
    document.getElementsByClassName("carousel3")[0].style.marginLeft=0;
    document.getElementsByClassName("carousel3")[0].style.transition="0s";

}
else{
margin3=margin3+100;
}
},3000)

function dosomething(){
    document.getElementsByClassName("visible")[0].setAttribute('src',"https://pofo.themezaa.com/wp-content/uploads/2017/05/logo.png.webp");
}
