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
                <p id="timestamp">${new Date().toLocaleTimeString()}</p>
            </div>
        </div>`
    histDiv.innerHTML = histTemplate
    historyList.appendChild(histDiv)
}

// const showModal = function(title, text){
//     document.getElementById('modal-title').innerText = title
//     document.getElementById('modal-text').innerText = text
//     const modal = document.getElementById('my_modal_1')
//     modal.showModal() 
//     return modal
// }

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
            alert('Insufficient Coin!\nPlease earn coins to make calls')
            // showModal('Insufficient Coin', 'Please earn coins to make calls')
            return
        }
        setText('coin-count', coin-20)
        console.log(coin)

        alert(`Calling ${serviceName} : ${phone}`)
        // showModal(serviceName, 'Contact : '+phone)
        addToHistory(serviceName, phone)
    })
}

document.getElementById('btn-clear-history').addEventListener('click', function(){
    const historyList = document.getElementById('history-list')
    if(historyList.childNodes.length){
        historyList.innerText = ''
    } else {
        alert('Empty List!\nThere is nothing to be cleared')
        // showModal('Empty List', 'There is nothing to be cleared')
    }
})

// Implement Contact Copy
const btnCopies = document.getElementsByClassName('btn-copy')
// console.log(btnCopies)
for (const btnCopy of btnCopies){
    btnCopy.addEventListener('click', async function(e){
        const copyCount = getTextInt('copy-count')
        setText('copy-count', copyCount+1)

        // const phone = btnCopy.parentNode.parentNode.querySelector('h4:nth-child(4)').innerText
        const phone = btnCopy.getAttribute('data-copy-source')
        console.log('copied number to clipboard :', phone)

        try {
            await navigator.clipboard.writeText(phone)
        } catch(err){
            console.log(err)
        }

        alert('Clipboard\nContact has been copied')
        // const modal = showModal('Clipboard', 'Contact has been copied')
        // setTimeout(() => {
        //     modal.close()
        // }, 1000)
    })
}