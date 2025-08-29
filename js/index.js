console.log("index.js connected!")

const getTextInt = function(id){
    return parseInt(document.getElementById(id).innerText)
}
const setText = function(id, val){
    return document.getElementById(id).innerText = val
}

const btnHearts = document.getElementsByClassName('btn-heart')

for (const btnHeart of btnHearts){
    btnHeart.addEventListener('click', function(){
        const val = getTextInt('heart-count')
        setText('heart-count', val+1)
    })
}