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

const getContactModal = function(serviceName, phone){
    const coin = getTextInt('coin-count')
    setText('coin-count', coin-20)
    console.log(coin)

    document.getElementById('modal-title').innerText = serviceName
    document.getElementById('modal-text').innerText = phone
    const modal = document.getElementById('my_modal_1')
    modal.showModal() 
    addToHistory(serviceName, phone)
}

// Implement Heart Count Feature
const btnHearts = document.getElementsByClassName('btn-heart')

for (const btnHeart of btnHearts){
    btnHeart.addEventListener('click', function(){
        const val = getTextInt('heart-count')
        setText('heart-count', val+1)
    })
}

const modalText = `
    <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
            <h3 id="modal-title" class="text-lg font-bold"></h3>
            <p id="modal-text" class="py-4"></p>
            <div class="modal-action">
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
            </form>
            </div>
        </div>
    </dialog>`
document.body.innerHTML += modalText

const btnCalls = document.getElementsByClassName('btn-call')

for (const btnCall of btnCalls){
    btnCall.addEventListener('click', function(e){
        const serviceName = e.target.parentNode.parentNode.querySelector('h4:nth-child(2)').innerText
        const phone = e.target.parentNode.parentNode.querySelector('h4:nth-child(4)').innerText
        console.log(serviceName, phone)

        getContactModal(serviceName, phone)
    })
}

document.getElementById('btn-clear-history').addEventListener('click', function(){
    const historyList = document.getElementById('history-list').innerText = ''
})