function checkCashRegister(price, cash, cid) {
    // created an array of currency value for reference
    const currencyVal = [
      ['ONE HUNDRED', 100],
      ['TWENTY', 20],
      ['TEN', 10],
      ['FIVE', 5],
      ['ONE', 1],
      ['QUARTER', 0.25],
      ['DIME', 0.1],
      ['NICKEL', 0.05],
      ['PENNY', 0.01]
    ];
  
    let currencyToGive = [...currencyVal];
    let tempArr = [];
  
    const cashRegister = {
      status: '',
      change: []
    }
  
    const changeToGiveConst = cash - price;
    let changeToGive = changeToGiveConst;
  
    // reveresed the cid for easy access
    cid.reverse();
    for (let i = 0; i < cid.length; i++) {
      let valToReturn = 0;
      let billsQty = cid[i][1] / currencyVal[i][1];
  
      while (changeToGive.toFixed(2) >= currencyVal[i][1] && billsQty >= 1) {
        valToReturn += currencyVal[i][1];
        changeToGive -= currencyVal[i][1];
        billsQty--;
      }
      
    // to handle floating point imprecision
      if (valToReturn > 0) {
        if (valToReturn - Math.floor(valToReturn) !== 0) {
        currencyToGive[i][1] = parseFloat(valToReturn.toFixed(2));
        } else {
        currencyToGive[i][1] = valToReturn;
        }
      } else {
        currencyToGive[i][1] = valToReturn;
      }
      
  
      if (currencyToGive[i][1] > 0) {
        tempArr.push(currencyToGive[i])
      }
    }
  
    // calculates the sum of cid
    let sumOfCid = 0;
    for (let i = 0; i < cid.length; i++) {
      sumOfCid += cid[i][1];
    }
    let sumOfCurrencyToGive = 0;
    for (let i = 0; i < currencyToGive.length; i++) {
      sumOfCurrencyToGive += currencyToGive[i][1];
    }
  
    // compare the total cid value vs change due to check if we have sufficient funds
    if (sumOfCid < changeToGiveConst || sumOfCurrencyToGive < changeToGiveConst) {
      cashRegister.status = 'INSUFFICIENT_FUNDS';
    }
    else if (sumOfCid === changeToGiveConst) {
      cashRegister.status = 'CLOSED';
      cashRegister.change = cid.reverse();
    }
    else {
      cashRegister.status = 'OPEN';
      cashRegister.change = tempArr;
    }
    return(cashRegister)
}