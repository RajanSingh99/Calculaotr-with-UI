let display=document.getElementById('display');
display.textContent='';

let stor1=0;
let stor2=0;

let operator='';

let clear=document.getElementById('c');
clear.addEventListener('click',()=>display.textContent='');

let one=document.getElementById('one');
one.addEventListener('click',()=>appendDisplay('1'));

let two=document.getElementById('two');
two.addEventListener('click',()=>appendDisplay('2'));

let three=document.getElementById('three');
three.addEventListener('click',()=>appendDisplay('3'));

let four=document.getElementById('four');
four.addEventListener('click',()=>appendDisplay('4'));

let five=document.getElementById('five');
five.addEventListener('click',()=>appendDisplay('5'));

let six =document.getElementById('six');
six.addEventListener('click',()=>appendDisplay('6'));

let seven =document.getElementById('seven');
seven.addEventListener('click',()=>appendDisplay('7'));

let eight= document.getElementById('eight');
eight.addEventListener('click',()=>appendDisplay('8'));

let nine= document.getElementById('nine');
nine.addEventListener('click',()=>appendDisplay('9'));

let zero=document.getElementById('zero');
zero.addEventListener('click',()=>appendDisplay('0'));

let dot=document.getElementById('dot');
dot.addEventListener('click',()=>appendDisplay('.'));

let doubleZero=document.getElementById('double-zero');
doubleZero.addEventListener('click',()=>appendDisplay('00'));



function appendDisplay(value){
    if(display.textContent.length>=20){
        return false;
    }
    display.textContent+=value;
    stor1=parseFloat(display.textContent);
}

let plus=document.getElementById('plus');
plus.addEventListener('click',()=>{
    if(display.textContent.length===0){
        return false;
    };
  for(i=0;i<display.textContent.length;i++){
      if(display.textContent.charAt(i)==='+'){
          return false;
      }
  }
  stor2=stor1;
  appendDisplay(' + ');
  operator='+';
})

let minus=document.getElementById('minus');
minus.addEventListener('click',()=>{
    if(display.textContent.length===0){
        display.textContent+='-';
        return;
    }
    for(i=1;i<=display.textContent.length;i++){
        let temp=display.textContent.charAt(i);
        if(temp=='-'||temp=='+'||temp=='x'||temp=='÷'|| temp=='%'){
            return false;
        } else if(display.textContent.charAt(0)==='-' && display.textContent.length===1){
            return false;
        }
    }
    stor2=stor1;
    appendDisplay(' - ');
    operator='-';
})

let modulus=document.getElementById('modulus');
modulus.addEventListener('click',()=>{
    if(display.textContent.length===0){
        return false;
    };
    for(i=1;i<=display.textContent.length;i++){
        let temp=display.textContent.charAt(i);
        if(temp=='-'||temp=='+'||temp=='x'||temp=='÷'|| temp=='%'){
            return false;
        }
  }
  stor2=stor1;
  appendDisplay(' % ');
  operator='%';
})

let divide=document.getElementById('divide');
divide.addEventListener('click',()=>{
    if(display.textContent.length===0){
        return false;
    };
    for(i=1;i<=display.textContent.length;i++){
        let temp=display.textContent.charAt(i);
        if(temp=='-'||temp=='+'||temp=='x'||temp=='÷'|| temp=='%'){
            return false;
        }
  }
  stor2=stor1;
  appendDisplay(' ÷ ');
  operator='÷';
})

let into = document.getElementById('into');
into.addEventListener('click',()=>{
        if(display.textContent.length===0){
            return false;
        };
        for(i=1;i<=display.textContent.length;i++){
            let temp=display.textContent.charAt(i);
            if(temp=='-'||temp=='+'||temp=='x'||temp=='÷'|| temp=='%'){
                return false;
            }
      }
      stor2=stor1;
      appendDisplay(' x ');
      operator='x';
})

function operate(sign){
    let holdString=display.textContent.slice(display.textContent.indexOf(sign)+2);
    if(sign==='-'){
      holdString=display.textContent.slice(display.textContent.lastIndexOf(sign)+2);
    }
    let stor3=parseFloat(holdString);
    let result =0;
    if(sign==='+'){
        result = (stor2) + (stor3);
    }else if(sign==='-'){
        result= stor2-stor3;
    }else if(sign==='%'){
        result= stor2%stor3;
    }else if(sign==='x'){
        result= stor2*stor3;
    }else if(sign==='÷'){
        result= stor2/stor3;
    }
    console.log(stor2);
    console.log(stor3);
    stor1=result;
    display.textContent = result;
}
let equals=document.getElementById('equal');
equals.addEventListener('click',()=>operate(operator));