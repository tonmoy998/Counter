const btns = document.querySelectorAll('.btn')
const num = document.querySelector('.num')

let count = 0 ;
btns.forEach(function(btn){
    btn.addEventListener('click' , function(e){
        let btnClass = e.currentTarget.classList 
        console.log(btnClass);
        if(btnClass.contains('btn-decrease')){
            count--;
            console.log(count);
            num.textContent = count
        }
        else if(btnClass.contains('btn-increase')){
            count++
            num.textContent = count
        }
        else{
            count = 0
            num.textContent = count
        }
        if(count>0){
            num.style.color = 'rgb(2, 235, 52)'
        }
        else if(count<0){
            num.style.color = 'rgb(255, 20, 20)'
        }
        else{
            num.style.color = 'rgb(54, 54, 54)'
        }
    })
})