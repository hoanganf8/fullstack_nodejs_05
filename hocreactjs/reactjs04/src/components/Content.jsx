import { memo, useMemo, useState, useCallback } from "react";
import Reset from "./Reset";
export default memo(function Content() {
  //   console.log("content render");
  const [histories, setHistories] = useState([]);
  const [amount, setAmount] = useState(0);
  const handleAdd = (e) => {
    e.preventDefault();
    setHistories([...histories, +amount]);
    setAmount(0);
  };
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleClear = useCallback(() => {
    setHistories([]);
  }, []);
  const total = useMemo(() => {
    return histories.reduce((prev, current) => {
      //   console.log("tính toán");
      return prev + current;
    }, 0);
  }, [histories]);
  return (
    <div>
      <h3>Giao dịch: {total}</h3>
      <form action="" onSubmit={handleAdd}>
        <input
          type="number"
          name="amount"
          placeholder="Nhập số tiền"
          onChange={handleChange}
          value={amount}
          required
        />
        <button>Add</button>
      </form>
      <hr />
      {histories.map((history, index) => (
        <h4 key={index}>{history}</h4>
      ))}
      <Reset onClick={handleClear} />
    </div>
  );
});
