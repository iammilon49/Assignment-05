// like button 
const heartDisplay = document.getElementById('heartDisplay');
const loveBtn = document.querySelectorAll('.loveBtn');
let count = 0;
for(const lovebtnAll of loveBtn){
    
    lovebtnAll.addEventListener("click", function(){
    count++;
    heartDisplay.innerText=count;
});
};

// copy button
let copyDisplay = document.getElementById('copyDisplay');
let copiedNumber = 0;
const helplineNumber = document.getElementById('helplineNumber');
const copybtn = document.getElementById('copybtn')
.addEventListener("click", () => {
    navigator.clipboard.writeText(helplineNumber.innerText);
    copiedNumber++;
    copyDisplay.innerText = copiedNumber;
    alert(`Helpline Number: ${helplineNumber.innerText} is Copied!`)

});