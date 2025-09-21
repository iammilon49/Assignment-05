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
const copyDisplay = document.getElementById('copyDisplay');
let copiedNumber = 0;
const helplineNumber = document.getElementById('helplineNumber');
const copybtn = document.getElementById('copybtn')
.addEventListener("click", () => {
    navigator.clipboard.writeText(helplineNumber.innerText);
    copiedNumber++;
    copyDisplay.innerText = copiedNumber;
    alert(`Helpline Number: ${helplineNumber.innerText} is Copied!`)

});

// call btn 
const serviceName = document.getElementById('serviceName');
const coinDisplay = document.getElementById('coinDisplay');
const callHistory = [];
let coins = 100;
const serviceNumber = document.getElementById('serviceNumber');
const callBtn = document.getElementById('callBtn');
callBtn.addEventListener("click", () => {
    if(coins >= 20){
        alert(`Confirm call to ${serviceName.innerText}: ${helplineNumber.innerText}?`);
        coins = coins - 20;
        coinDisplay.innerText=coins;
        const callData = [{
            name: "Azizul",
            number: 999
        }];
        callHistory.push(callData);
}
else{
    alert('Sorry! You Do not have enough coins to call.')
}
    
});