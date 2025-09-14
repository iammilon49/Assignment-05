const heartDisplay = document.getElementById('heartDisplay');
const loveBtn = document.querySelectorAll('.loveBtn');
let count = 0;
for(const lovebtnAll of loveBtn){
    
    lovebtnAll.addEventListener("click", function(){
    count++;
    heartDisplay.innerText=count;
});
};