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
const copybtn2 = document.querySelectorAll('.copybtn');
for (const copyBtnSingle of copybtn2){
    
        
    copyBtnSingle.addEventListener("click", function (e){
        const card = e.target.closest('.box-parent');
        const helpNumber = card.querySelector('.helplineNumber').innerText;
        navigator.clipboard.writeText(helpNumber);
        copiedNumber++;
        copyDisplay.innerText = copiedNumber;
        alert(`Helpline Number: ${helpNumber} is Copied!`);
    })
};






// call btn 
const serviceName = document.getElementById('serviceName');
const coinDisplay = document.getElementById('coinDisplay');
const callHistory = [];

const historyContainer = document.getElementById('historyContainer');
const date = new Date().toLocaleTimeString();
let coins = 100;
const serviceNumber = document.getElementById('serviceNumber');
const callBtn = document.getElementById('callBtn');
callBtn.addEventListener("click", () => {
    if(coins >= 20){
        alert(`Confirm call to ${serviceName.innerText}: ${helplineNumber.innerText}?`);
        coins = coins - 20;
        coinDisplay.innerText=coins;
        
        const callData = {
            name: serviceName.innerText,
            number: helplineNumber.innerText};
            callHistory.push(callData);
            let call='';
            for(const callSingleData of callHistory){
                call=callSingleData;
            }

            const div = document.createElement('div');
            div.innerHTML=`
            <div class="bg-[#FAFAFA] p-4 flex justify-between items-center mb-2">
                <div>
                    <h2 class="font-semibold text-lg ">${call.name}</h2>
                    <p class="text-sm text-[#5C5C5C]">${call.number}</p>
                </div>
                    <div>
                        <p class="text-sm text-black">${date}</p>
                    </div>
            </div>`
            historyContainer.append(div);
        
}
else{
    alert('Sorry! You Do not have enough coins to call.')
}
    
});

// HistoryClear
const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener("click", ()=> {
    historyContainer.innerHTML=''});