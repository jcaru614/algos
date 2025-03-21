import React, { useState } from 'react';

function App() {
  const [state, setState] = useState('');
  const transactions = [
    { id: 't_01', merchant: 'Rocket Rides', amount: 100 },
    { id: 't_02', merchant: 'Cookie Shoppe', amount: 120 },
    { id: 't_03', merchant: 'Cookie Shoppe', amount: -7 },
    { id: 't_04', merchant: 'Supplies Depot', amount: -100 },
    { id: 't_05', merchant: 'Rocket Rides', amount: 100 },
    { id: 't_06', merchant: 'Rocket Rides', amount: -21 },
    { id: 't_07', merchant: 'Supplies Depot', amount: -200 },
    { id: 't_08', merchant: 'Local Gazette', amount: 20 },
    { id: 't_09', merchant: 'Cookie Shoppe', amount: -7 },
    { id: 't_10', merchant: 'Rocket Rides', amount: -21 },
    { id: 't_11', merchant: 'Local Gazette', amount: 80 },
    { id: 't_12', merchant: 'Rocket Rides', amount: -16 },
  ];

  const totalSum = () => {
    let sum = 0;
    if (state.length) {
      const filteredTransactions = transactions.filter((el, i) =>
        el.merchant.toString().toLowerCase().includes(state)
      );
      console.log('filter ', filteredTransactions);
      for (let i = 0; i < filteredTransactions.length; i++) {
        const element = filteredTransactions[i];
        sum += element.amount;
      }
      console.log('sum ', sum);
      return sum;
    } else {
      for (let i = 0; i < transactions.length; i++) {
        const element = transactions[i];
        sum += element.amount;
      }
      console.log('sum ', sum);
      return sum;
    }
  };

  const onChangeHandler = (e) => {
    setState(e.target.value);
  };

  return (
    <div className='App'>
      <h1>Stripe</h1>
      <input onChange={onChangeHandler} />

      {state.length
        ? transactions
            .filter((el, i) => el.merchant.toString().toLowerCase().includes(state))
            .map((item, i) => {
              return (
                <div key={i}>
                  {item.amount < 0 ? (
                    <div>
                      <span>{item.merchant}</span>
                      <span style={{ color: 'red' }}>: {item.amount}</span>
                    </div>
                  ) : (
                    <div>
                      <span>{item.merchant}</span>
                      <span style={{ color: 'green' }}>: {item.amount}</span>
                    </div>
                  )}
                </div>
              );
            })
        : transactions.map((item, i) => {
            return (
              <div key={i}>
                {item.amount < 0 ? (
                  <div>
                    <span>{item.merchant}</span>
                    <span style={{ color: 'red' }}>: {item.amount}</span>
                  </div>
                ) : (
                  <div>
                    <span>{item.merchant}</span>
                    <span style={{ color: 'green' }}>: {item.amount}</span>
                  </div>
                )}
              </div>
            );
          })}

      <div style={{ marginTop: 20 }}>
        Total: <span>{totalSum()}</span>
      </div>
    </div>
  );
}

export default App;
