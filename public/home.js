
$(document).ready(function () {
    var currentAcc=""

    console.log(currentAcc)
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!')
    }
    
    $('#connectMM').click(() => {
        connectMM().then((data)=>{
            currentAcc=data           
            console.log(currentAcc)
        }).catch((e)=>{
            console.log("errrrr")
        })
    })

})

async function connectMM() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    return accounts[0]
}
