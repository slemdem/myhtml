window.onload = function(){

let comunity = document.querySelector('.comunity')
let counsel = document.querySelector('.counsel')
let acIntro = document.querySelector('.acIntro')
let PubFSup = document.querySelector('.PubFSup')

let menu = document.querySelector('.menu')
let num = 0

let pyt= document.querySelector('#imgpyt')
let jsp= document.querySelector('#imgjsp')
let cls= document.querySelector('#imgcls')

comunity.addEventListener('mouseover', function(){
    comunity.style.color = '#000'
    comunity.style.backgroundColor='#fff'
});

comunity.addEventListener('mouseout', function(){
    comunity.style.color = '#fff'
    comunity.style.backgroundColor = '#333'
});

counsel.addEventListener('mouseover', function(){
    counsel.style.color = '#000'
    counsel.style.backgroundColor='#fff'
});

counsel.addEventListener('mouseout', function(){
    counsel.style.color = '#fff'
    counsel.style.backgroundColor = '#333'
});

acIntro.addEventListener('mouseover', function(){
    acIntro.style.color = '#000'
    acIntro.style.backgroundColor='#fff'
});

acIntro.addEventListener('mouseout', function(){
    acIntro.style.color = '#fff'
    acIntro.style.backgroundColor = '#333'
});

PubFSup.addEventListener('mouseover', function(){
    PubFSup.style.color = '#000'
    PubFSup.style.backgroundColor='#fff'
});

PubFSup.addEventListener('mouseout', function(){
    PubFSup.style.color = '#fff'
    PubFSup.style.backgroundColor = '#333'
});

menu.addEventListener('click', function(){
    num+=1;
    if (num==1){
        alert('점검중입니다');
    } 
    if(num==2){
        alert('아직 점검중이니 잠시만 기다려주세요');
    }
});

pyt.addEventListener('mouseover', function(){
    pyt.style.animation = 'fade 2s 2 alternate';
});

jsp.addEventListener('mouseover', function(){
    jsp.style.animation = 'fade 2s 2 alternate';
});

cls.addEventListener('mouseover', function(){
    cls.style.animation = 'fade 2s 2 alternate';
});

}