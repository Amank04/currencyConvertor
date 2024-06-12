import { useState } from 'react'
import { InputBox, Footer, Header } from './components'
import  useCurrInfo  from './hooks/useCurrInfo';

function App() {
  const [amount, setamount] = useState(0);
  const [convertedAmount, setconvertedAmount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [To, setTo] = useState("inr");

  const currencyInfo = useCurrInfo(from);
  console.log(currencyInfo)
  const options = Object.keys(currencyInfo);
  // console.log(options);

  const swap = () => {
    setfrom(To);
    setTo(from);
    setamount(convertedAmount);
    setconvertedAmount(amount);
  }

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[To]);
  }

  const BackgroundImage = "https://images.pexels.com/photos/3709402/pexels-photo-3709402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <>
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('${BackgroundImage}')`,
        }}
    >
        <Header />
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setfrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setamount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={To}
                            amountDisable
                        />
                    </div>
                    <button type="submit" 
                    onClick={convert}
                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {To.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
        <Footer />
    </div>
        </>
);
}

export default App
