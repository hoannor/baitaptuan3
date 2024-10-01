function checkCashRegister(price, cash, cid) {
    let money = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let payBack = cash - price;
    let sum = 0;
    let _change = [];
    for (let i = 0; i < 9; i++) 
    {        
      sum += cid[i][1];
    }    
    sum = sum.toFixed(2);
    if (sum < payBack) return {status: "INSUFFICIENT_FUNDS", change: []};
    if (sum == payBack) return {status: "CLOSED", change: cid};
    let cnt = 0;
    for (let i = 8; i >= 0; i--) 
    {
      let amount = cid[i][1] / money[i];        
      amount = amount.toFixed(0);
      let dem = 0;while (true) 
      {
        if (dem == amount) break;
        if (payBack < money[i] * (dem + 1)) break;            
        dem++;
      }
      if (dem == 0) continue;                
      payBack -= money[i] * dem;        
      payBack = payBack.toFixed(2);                
      _change[cnt] = [cid[i][0], money[i] * dem];        
      cnt++;
    }
    if (payBack > 0) return {status: "INSUFFICIENT_FUNDS", change: []};
    return {status: "OPEN", change: _change};
  }
    
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);