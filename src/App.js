import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(); // 입력된 금액을 저장하는 상태

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json(0))
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const handleAmountChange = (event) => {
    const inputAmount = parseInt(event.target.value); // 입력된 금액을 정수형으로 변환
    setAmount(inputAmount); // 입력된 금액 상태 업데이트
  };

  return (
    <div>
      <h1>The Coins~ {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <form>
            <input
              type="number"
              placeholder="How many $ you have?"
              value={amount}
              onChange={handleAmountChange}
            />
          </form>
          <hr />
          <select>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}) :
                {(amount / coin.quotes.USD.price).toFixed(2)}개 구매 가능
                {/* toFixed(2) 메서드는 부동 소수점 숫자를 고정 소수점 숫자로 변환하는 JavaScript의 내장 메서드입니다. 
            여기서 소수점 이하 자리를 두 개로 설정 */}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default App;
