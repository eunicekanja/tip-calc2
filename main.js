const inputBill=document.querySelector('#input-bill');
const totalBill=document.querySelector('.totalAmount');
const tipPercent=document.querySelector('.tip-percent');
const tipTotal=document.querySelector('.tip-total');
const tipSlider=document.querySelector('.tip-slider');
const tipSliderContainer=document.querySelector('.tip-slider-container');
const tipSliderCursor=document.querySelector('.tip-slider-cursor')
const geustNum=document.querySelector('.geust-num');
const splitSlider=document.querySelector('.split-slider');
const splitSliderCursor=document.querySelector('.split-slider-cursor')
const numberSlider=document.querySelector('.number-slider');
const billEach=document.querySelector('.billEach');
const tipEach=document.querySelector('.tipEach')

let bill,totalCalcBill,totalTip

inputBill.addEventListener('input',function(e){
    let bill=Number(inputBill.value);
    totalBill.textContent=`$${bill.toFixed(2)}`;
    calcBill(bill)
    //totalBill.textContent=totalCalcBill;
})
function calcBill(bill){
    tipSlider.addEventListener('click',function(e){
        const clickedWidth=(e.offsetX-20)
        const containerWidth=tipSliderContainer.getBoundingClientRect()
        const tipContainerWidth=containerWidth.width;
        const percent=((clickedWidth/tipContainerWidth)*100).toFixed(0);
        if(percent<=0) return
        tipPercent.innerHTML=`${percent}%`
        tipSliderCursor.style.left=`${clickedWidth}px`
        totalTip=((percent/100)*bill);
        totalCalcBill=bill+totalTip;
        tipTotal.textContent=`$${totalTip.toFixed(2)}`
        totalBill.textContent=`$${totalCalcBill}`
        splitBill(totalCalcBill,totalTip)
    })
}

function splitBill(bill,totalTip){
    numberSlider.addEventListener('click',function(e){
        const clickedNumber=(e.offsetX-20);
        const sliderContainerWidth=splitSlider.getBoundingClientRect();
        const spiltWidth=sliderContainerWidth.width;
        const numGeust=Math.floor((clickedNumber/spiltWidth)*20)
        if(numGeust<=0) return
        splitSliderCursor.style.left=`${clickedNumber}px`
        geustNum.textContent=numGeust;
        billEach.textContent=`$${(bill/numGeust).toFixed(2)}`
        tipEach.textContent=`$${(totalTip/numGeust).toFixed(2)}`
    })
}
