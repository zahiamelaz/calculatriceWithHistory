
function squar(){
    document.calc.box.value= Math.pow(document.calc.box.value,2);
}
function cubed(){
    document.calc.box.value= Math.pow(document.calc.box.value,3);
}
function squaroot(){
    document.calc.box.value= Math.sqrt(document.calc.box.value);
}
function cuberoot(){
    document.calc.box.value= Math.cbrt(document.calc.box.value);
}
function facto(){
    var num,i,fac,
    num=document.calc.box.value;
    if(num==0)
        document.calc.box.value=1;
    else{
        fac=1;
        for(i=1; i<=num;i++)
            fac= fac*i; 
        document.calc.box.value=fac;
    }  
}
function sine(){
    var angle,radian,f;
    angle=document.calc.box.value;
    radian=angle*Math.PI/180;
    f=Math.sin(radian);
    document.calc.box.value=f.toFixed(2);
}
function cosin(){
    var angle,radian,f;
    angle=document.calc.box.value;
    radian=angle*Math.PI/180;
    f=Math.cos(radian);
    document.calc.box.value=f.toFixed(2);
}
function tann(){
    var angle,radian,f;
    angle=document.calc.box.value;
    radian=angle*Math.PI/180;
    f=Math.tan(radian);
    document.calc.box.value=f.toFixed(2);
}
function perc(){
    var x,result;
    x=eval(document.calc.box.value);
    result=x/100;
    document.calc.box.value=result;
} 

let history = document.getElementById('history');
function calculation(v){
    para = document.createElement('p');
    data = v +'=' + eval(v);
    para.innerText = data;
    history.appendChild(para);
    return eval(v);
}
window.addEventListener('error',(e) =>{
    alert( 'error dans votre calcul: '+ e.message)
});
$(document).ready(function(){
    $('.fa-solid').click(function(){
        $('#history').toggle();
    });
});

