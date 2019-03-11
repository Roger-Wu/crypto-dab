const contracts = {
  ItemToken: {
    address: '0xad56273c8268972341aAA9e2d999E4D0A00ec0F9',
    abi: [{"constant":true,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"tokenExists","outputs":[{"name":"_exists","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdrawAmount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"_name","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_itemId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"implementsERC721","outputs":[{"name":"_implements","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_admin","type":"address"}],"name":"removeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"_totalSupply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_itemRegistry","type":"address"}],"name":"setItemRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_itemId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_admin","type":"address"}],"name":"isAdmin","outputs":[{"name":"_isAdmin","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"approvedFor","outputs":[{"name":"_approved","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"allOf","outputs":[{"name":"_owner","type":"address"},{"name":"_startingPrice","type":"uint256"},{"name":"_price","type":"uint256"},{"name":"_nextPrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"listItemFromRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_itemId","type":"uint256"},{"name":"_price","type":"uint256"},{"name":"_owner","type":"address"}],"name":"listItem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_from","type":"uint256"},{"name":"_take","type":"uint256"}],"name":"itemsForSaleLimit","outputs":[{"name":"_items","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"tokensOf","outputs":[{"name":"_tokenIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"nextPriceOf","outputs":[{"name":"_nextPrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_price","type":"uint256"}],"name":"calculateDevCut","outputs":[{"name":"_devCut","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_admin","type":"address"}],"name":"addAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"_balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"enableERC721","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_itemIds","type":"uint256[]"}],"name":"populateFromItemRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_itemId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"startingPriceOf","outputs":[{"name":"_startingPrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"priceOf","outputs":[{"name":"_price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_itemIds","type":"uint256[]"},{"name":"_price","type":"uint256"},{"name":"_owner","type":"address"}],"name":"listMultipleItems","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_itemId","type":"uint256"}],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_price","type":"uint256"}],"name":"calculateNextPrice","outputs":[{"name":"_nextPrice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_itemId","type":"uint256"},{"indexed":true,"name":"_owner","type":"address"},{"indexed":false,"name":"_price","type":"uint256"}],"name":"Bought","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_itemId","type":"uint256"},{"indexed":true,"name":"_owner","type":"address"},{"indexed":false,"name":"_price","type":"uint256"}],"name":"Sold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"}]
  }
};

// console.log('Web3', (new Web3()).version, Web3);

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    // window.addEventListener("load", () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          window.ethereum.enable().then(() => {
            // Acccounts now exposed
            resolve(web3);
          });
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        console.log("Injected web3 detected.");
        const web3 = new Web3(window.web3.currentProvider);
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        console.log("No window.ethereum or window.web3 injected.");
        const provider = new Web3.providers.HttpProvider(
          "https://mainnet.infura.io"
        );
        const web3 = new Web3(provider);
        resolve(web3);
      }
    // });
  });

// var web3Instance;

var app = new Vue({
  el: '#app',
  data: {
    title: 'Crypto dAb',
    description: '加密貓玩膩了嗎？來玩加密寶博士。來吧！用以太幣認養寶博士，每次都將贈送一萬枚寶博士幣。送完為止喔！',
    person: {
      name: '葛如鈞',
      alternateName: '寶博士',
      image: 'images/celebrity_1.jpg',
      fbUrl: 'https://www.facebook.com/dAAAb',
      itemId: 1,
    },
    isMetamaskInstalled: false,
    contractAddress: contracts.ItemToken.address,
    owner: '',
    startingPrice: 0,
    price: 0,
    nextPrice: 0,
    accountAddress: null,
    metamaskMsg: 'Please install MetaMask and unlock your account.\n請安裝並登入 MetaMask 以完整體驗此遊戲。',
    networkMsg: 'Please switch to Ethereum mainnet in MetaMask.\n請在 MetaMask 中切換到以太坊主網。',
  },
  computed: {
    shortContractAddress: function() {
      return this.contractAddress.slice(0, 12) + '...';
    },
    shortOwner: function() {
      return (!this.owner) ? '' : this.owner.slice(0, 12) + '...';
    },
    startingPriceInEth: function() {
      return (parseInt(this.startingPrice) / 1000000000000000000).toFixed(6);
    },
    priceInEth: function() {
      return (parseInt(this.price) / 1000000000000000000).toFixed(6);
    },
    nextPriceInEth: function() {
      return (parseInt(this.nextPrice) / 1000000000000000000).toFixed(6);
    },
  },
  methods: {
    startApp: function(web3) {
      // console.log('startApp');
      this.itemTokenContract = new web3.eth.Contract(
        contracts.ItemToken.abi,
        contracts.ItemToken.address
      );

      web3.eth.getAccounts().then((accounts) => {
        if (accounts) {
          this.accountAddress = accounts[0];
        }
      });

      this.fetchItemState(this.person.itemId);
      setInterval(() => {
        this.fetchItemState(this.person.itemId);
      }, 10 * 10000);
    },
    fetchItemState: function(itemId) {
      // console.log('fetchItemState');

      this.itemTokenContract.methods.allOf(itemId).call()
      .then((result) => {
        // console.log('result', result);
        this.owner = result._owner;
        this.startingPrice = result._startingPrice; // string
        this.price = result._price; // string
        this.nextPrice = result._nextPrice; // string
      }).catch((error) => {
        console.error('fetchItemState error', error);
      });
    },
    buy: function () {
      if (!this.accountAddress) {
        window.alert(this.metamaskMsg);
      }
      this.itemTokenContract.methods.buy(this.person.itemId).send({ from: this.accountAddress, value: this.price })
      .catch((error) => {
        console.error('buy error', error);
        // window.alert(this.metamaskMsg);
      }).then((result) => {
        console.log(result);
      });
    },
  },
  mounted () {
    // console.log('mounted');
    getWeb3()
    .then((web3) => {
      web3.eth.net.getId()
      .then((networkId) => {
        if (networkId !== 1) {
          window.alert(this.networkMsg);
        } else {
          this.isMetamaskInstalled = true;
          this.startApp(web3);
        }
      });
    })
    .catch((error) => {
      console.error('mounted error', error);
      // window.alert(this.metamaskMsg);
    });
  },
});
