//https://eth-ropsten.alchemyapi.io/v2/EKNq_7rcjW4_pYT5FO8gYnS9disurEi9

require('@nomiclabs/hardhat-waffle');

module.exports ={
  solidity: '0.8.0',
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/EKNq_7rcjW4_pYT5FO8gYnS9disurEi9',
      accounts: [
        '3297e6e5fb416c319418b83b4c11f8ea18240b0e90b59e38fcabfcd198c6d45a'
      ]
    }
  }
}