// Currency Converter

const {useState, useEffect} = React;
const CurrencyConverter = () =>  {
  const [rate, setRate] = useState(0.89);
  const [usd, setUSD] = useState(1);
  const [euro, setEuro] = useState(1 * 0.89);

  // convert euro to USD
  const toUsd = (amount, rate) => {
    return amount * (1 / rate);
  }

  // convert USD to euro
  const toEuro = (amount, rate) => {
    return amount * rate;
  }

  // return conversion value if input is a number
  const convert = (amount, rate, equation) => {
    const input = parseFloat(amount);
    if (Number.isNaN(input)) {
      return '';
    }
    return equation(input, rate).toFixed(3);
  }

  // update state when USD input is changed
  const handleUsdChange = (event) => {
    const euro = convert(event.target.value, rate, toEuro);

    setUSD(event.target.value);
    setEuro(euro);
  }

  // update state when Euro input is changed
  const handleEuroChange = (event) => {
    const usd = convert(event.target.value, rate, toUsd);

    setEuro(event.target.value);
    setUSD(usd);
  }

  return (
    <div className='container'>
      <div className='text-center p-3 mb-2'>
        <h2 className='mb-2 border-bottom'>Currency Converter</h2>
        <h4>USD 1 : {rate} EURO</h4>
      </div>
      <div className='row text-center'>
        <div className='col-12'>
          <span className='mr-1'>USD</span>
          <input value={usd} onChange={handleUsdChange} type='number'/>       
          <span className='mx-3'>=</span>
          <input value={euro} onChange={handleEuroChange} type='number' />
          <span className='ml-1'>EURO</span>
        </div>
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<CurrencyConverter />);