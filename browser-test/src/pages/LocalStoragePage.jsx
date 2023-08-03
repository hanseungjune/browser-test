import { useEffect, useState } from "react";

const LocalStoragePage = () => {
  const [cart, setCart] = useState([]);

  // 첫 렌더링 시 로컬스토리지에서 장바구니 정보 가져오기
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // 장바구니 상태가 변경될 때마다 로컬스토리지에 장바구니 정보 저장
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 장바구니에 아이템 추가
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // 장바구니 아이템 목록 표시
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => addToCart("Apple")}>Add Apple</button>
      <button onClick={() => addToCart("Banana")}>Add Banana</button>
    </div>
  );
};

export default LocalStoragePage;
