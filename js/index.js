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

// Event Delegation on Click event
document.addEventListener('click', async function(e){
    // handle click on heart button
    const btnHeart = e.target.closest('.btn-heart')
    if(btnHeart){
        const val = getTextInt('heart-count')
        setText('heart-count', val+1)
        return
    }

    // handle clear history button
    const btnClearHistory = e.target.closest('#btn-clear-history')
    console.log(btnClearHistory,333)
    if(btnClearHistory){
        const historyList = document.getElementById('history-list')
        if(historyList.childNodes.length){
            historyList.innerText = ''
        } else {
            alert('Empty List!\nThere is nothing to be cleared')
            // showModal('Empty List', 'There is nothing to be cleared')
        }
        return
    }

    // handle call button click event
    const btnCall = e.target.closest('.btn-call')
    if(btnCall){
        const card = e.target.closest('#card')
        const serviceName = card ? card.querySelector('#service-name').innerText : null
        const phone = card ? card.querySelector('#phone').innerText : null
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
        return
    }

    // handle copy button click
    const btnCopy = e.target.closest('.btn-copy')
    if(btnCopy){
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
    }
})


// Implement Contact Copy
const btnCopies = document.getElementsByClassName('btn-copy')
// console.log(btnCopies)
for (const btnCopy of btnCopies){
    btnCopy.addEventListener('click', async function(e){
    })
}