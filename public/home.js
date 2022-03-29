$(document).ready(function () {
    var currentAcc = ""
    const abi = [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "Add",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "sdt",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "age",
                    "type": "uint256"
                }
            ],
            "name": "addStudent",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "Delete",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "deleteStudent",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "thisAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "sdt",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "age",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "date",
                    "type": "uint256"
                }
            ],
            "name": "Dislay",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "i",
                    "type": "uint256"
                }
            ],
            "name": "get",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "count",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]

    const addressSM = "0xb96aCAf8506c877840cA7167DBa4E0BB0Ed8C111"
    const web3 = new Web3(window.ethereum)

    // create contract connect to metamask
    var contract_MM = new web3.eth.Contract(abi, addressSM)
    //console.log(contract_MM);

    //create contract connect to infura
    var provider= new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws/v3/c6f8a6b970484ada801abe28be738310')
    var web3_infura= new Web3(provider)
    var contract_Infura = new web3.eth.Contract(abi, addressSM)
    console.log(contract_Infura)

    contract_Infura.events.Add({
        filter:{},
        fromBlock:"latest"

    },function(err,event){

        if(err) console.log(err) 
        else console.log(event) 

    })

    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!')
    } else window.alert('You need install MetaMask wallet before using this utils ')
    $('#connectMM').click(() => {
        connectMM().then((data) => {
            currentAcc = data
            $('#address').append("Your wallet is :" + currentAcc);
            console.log(currentAcc)
        }).catch((e) => {
            console.log("errrrr")
        })
    })

    $('#submit').click(() => {
        window.ethereum.enable()
       if(currentAcc!=0){
        let name = $('#name').val()
        let sdt = $('#sdt').val()
        let age = $('#age').val()
        contract_MM.methods.addStudent(name,sdt,age).send({
            from: currentAcc
        })
       }else window.alert('Please login MetaMask !!!')

    })

})

async function connectMM() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    return accounts[0]
}
