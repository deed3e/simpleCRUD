
$(document).ready(function () {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    }
  


})
  
async function connectMM(){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];  
}
