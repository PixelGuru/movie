import React, { useState } from 'react';

const App = () => {
  const [result, setResult] = useState('');

  const checkDate = (selectedDate) => {
    const currentDate = new Date();
    const selectedDateObj = new Date(selectedDate);

    if (selectedDateObj < currentDate) {
      setResult('past');
    } else {
      setResult('future');
    }
  };

  return (
    <div>
      <button onClick={() => checkDate('2023-08-01')}  disabled={new Date('2023-08-10T09:00:00') < new Date()}>01/08/2023</button>
      <button
        onClick={() => checkDate('2023-08-10T09:00:00')}
        disabled={new Date('2023-08-10T09:00:00') < new Date()}
      >
        10/08/2023 9:00
      </button>
      <button
        onClick={() => checkDate('2023-08-10T15:00:00')}
        disabled={new Date('2023-08-10T15:00:00') < new Date()}
      >
        10/08/2023 15:00
      </button>
      <p>Result: {result}</p>
    </div>
  );
};

export default App;
