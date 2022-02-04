# Auction Bidding Exercise

In this TDD exercise the goal is to implement both the functions in the `contracts/AuctionBidding.sol` file and the unit tests in the `test/AuctionBidding.test.ts` file!

Feel free to change the wording of things as you like.

## Setting up

First, clone this repository somewhere on your computer:

```shell
git clone https://github.com/TDD-Solidity/Auction-TDD-Exercise.git
```

Then navigate into the project folder and install the npm dependencies:

```shell
npm install
```

Note: If you have troubles installing, try using node version 14 or higher.

<br/>

Once the node modules are installed, you should be good to go!

This command will run the tests:
```
npm test
```

Note: If you want to run `hardhat test` directly then you will need to have hardhat globally installed:
```
npm install -g hardhat
```

## Good Luck!

Have fun with the exercise, and feel free to ask for help in the slack group!

https://join.slack.com/t/nyc-blockchain-devs/shared_invite/zt-51fxvozl-sU3nB3vtpztBR9YhduNAdg

## Bonus

This AuctionBidding contract is meant to be a simple exercise.

Consider extending and / or adding more contract functions (and tests!) to accept some payment from the winning bidder and transfer it to original owner's address.

Similarly, this contract could be extended to have the auctioned item be an NFT, and functions could be added and / or updated to allow the NFT original owner the ability to allow the AuctionBidding contract to transfer the auctioned NFT to the winning bidder. 
