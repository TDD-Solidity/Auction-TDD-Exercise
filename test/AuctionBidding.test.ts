import { expect } from "chai";
import { ethers } from "hardhat";

describe("AuctionBidding", function () {

  let contract;

  beforeEach(async () => {
    const AuctionBidding = await ethers.getContractFactory("AuctionBidding");
    const contract = await AuctionBidding.deploy();
    await contract.deployed();
  })

  describe('starting a new auction', () => {

    it('creates and stores the new auction details', () => {

      // TODO

    })

    it('increments the auctionId of each new auction', () => {
      
      // TODO

    })
  
    it('emits the AuctionStarted event', () => {
      
      // TODO

    })

  })

  describe('submitting a bid', () => {

    describe('bid input validation', () => {

      it('reverts if the auction the user is trying to bid on is currently NOT in progress', () => {

        // TODO
        
      })

      it('reverts if the bid is less than the current bid plus the minimum increment', () => {
        
        // TODO

      })

    })
 
    it('updates current auction with the bid and bidder information', () => {
  
      // TODO
  
    })
 
    it('emits the NewBidMade event' , () => {
  
      // TODO
  
    })

  })

  describe('ending an auction', () => {
    
    it('sets the auction details to the ended state', () => {
  
      // TODO
  
    })
    
    it('sets the auction details to the ended state', () => {
  
      // TODO
  
    })

    it('adds the auction being ended to the collection of closed auctions', () => {
  
      // TODO
  
    })

    it('resets the current auction object', () => {

      // TODO

    })
    
    it('emits the AuctionEnded event', () => {

      // TODO

    })

  })

  describe('getting details of a finished auction', () => {

    it('returns details of the auction with provided auctionId', () => {

      // TODO

    })

  })

})
