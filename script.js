// Currency Converter

class CurrencyConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 0.89,
      usd: 1,
      euro: 1 * 0.89
     };
  }

  // convert euro to USD
  toUsd(amount, rate) {
    return amount * (1 / rate);
  }

  toEuro(amount, rate) {
    return amount * rate;
  }

  render() { 
    const { rate, usd, euro } = this.state;
    return ( 
      <div className="container">
        <div className="text-center p-3 mb-2">
          <h2 className="mb-2 border-bottom">Currency Converter</h2>
          <h4>USD 1 : {rate} EURO</h4>
        </div>
        <div className='row text-center'>
          <div className='col-12'>
            <span className='mr-1'>USD</span>
            <input value={usd} onChange={this.handleUsdChange} /> 
            <span className='mx-3'>=</span>
            <input value={euro} onChange={this.handleEuroChange} /> 
            <span className='ml-1'>EURO</span>
          </div>
        </div>
      </div>
     );
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<CurrencyConverter />);