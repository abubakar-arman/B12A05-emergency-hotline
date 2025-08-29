console.log("index.js connected!")

const getTextInt = function(id){
    return parseInt(document.getElementById(id).innerText)
}
const setText = function(id, val){
    document.getElementById(id).innerText = val
}
const addToHistory = function(serviceName, phone){
    const historyList = document.getElementById('history-list')
    const histDiv = document.createElement('div')
    const histTemplate = `
        <div id="item" class="bg-gray-100 rounded-sm p-4 mb-2">
            <h4 class="font-bold text-sm">${serviceName}</h4>
            <div class="flex justify-between text-xs">
                <p id="number">${phone}</p>
                <p id="timestamp">11:36:58 AM</p>
            </div>
        </div>`
    histDiv.innerHTML = histTemplate
    historyList.appendChild(histDiv)
}

const showModal = function(title, text){
    document.getElementById('modal-title').innerText = title
    document.getElementById('modal-text').innerText = text
    const modal = document.getElementById('my_modal_1')
    modal.showModal() 
}

// Implement Heart Count Feature
const btnHearts = document.getElementsByClassName('btn-heart')

for (const btnHeart of btnHearts){
    btnHeart.addEventListener('click', function(){
        const val = getTextInt('heart-count')
        setText('heart-count', val+1)
    })
}

// Implement Calling and Call History Feature
const btnCalls = document.getElementsByClassName('btn-call')
for (const btnCall of btnCalls){
    btnCall.addEventListener('click', function(e){
        const serviceName = e.target.parentNode.parentNode.querySelector('h4:nth-child(2)').innerText
        const phone = e.target.parentNode.parentNode.querySelector('h4:nth-child(4)').innerText
        console.log(serviceName, phone)
        
        const coin = getTextInt('coin-count')
        if(coin<20){
            showModal('Insufficient Coin', 'Please earn coins to make calls')
            return
        }
        setText('coin-count', coin-20)
        console.log(coin)

        showModal(serviceName, 'Contact : '+phone)
        addToHistory(serviceName, phone)
    })
}

document.getElementById('btn-clear-history').addEventListener('click', function(){
    const historyList = document.getElementById('history-list')
    if(historyList.childNodes.length){
        historyList.innerText = ''
    } else {
        showModal('Empty List', 'There is nothing to be cleared')
    }
})