const check = document.getElementById('check');
const visa = document.getElementById('visa');
const master = document.getElementById('master');
const Gpay = document.getElementById('Gpay');
const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const result = document.getElementById('result');
result.onclick=function(){
    if(check.checked){
        r1.textContent='20% discount !!!';
    }
    else{
        r1.textContent='No discount';
    }
    if(visa.checked){
        r2.textContent='payment method is Visa card...'
    }
    else if(master.checked){
        r2.textContent='paymet method is master card...'
    }
    else if(Gpay.checked){
        r2.textContent='Online UPI mede (Gpya)...'
    }
    else{
        r2.textContent='No payment method selected...'

    }
}
