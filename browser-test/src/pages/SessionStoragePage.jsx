import { useEffect, useState } from "react";

const SessionStoragePage = () => {
  const [name, setName] = useState("");
  const [MBTI, setMBTI] = useState("");

  // 컴포넌트가 마운트 될 때 세션 스토리지에서 이름과 MBTI 정보를 가져옵니다.
  useEffect(() => {
    const savedName = sessionStorage.getItem("name");
    const savedMBTI = sessionStorage.getItem("MBTI");

    if (savedName) {
      setName(savedName);
    }

    if (savedMBTI) {
      setMBTI(savedMBTI);
    }
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
    sessionStorage.setItem("name", event.target.value);
  };

  const handleMBTIChange = (event) => {
    setMBTI(event.target.value);
    sessionStorage.setItem("MBTI", event.target.value);
  };

  return (
    <div>
      <label>
        Your name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        너는 즉흥적인 행동보다 구조화된 계획을 더 선호하니? (J/P)
        <select value={MBTI} onChange={handleMBTIChange}>
          <option value="">선택하기...</option>
          <option value="J">Yes (J)</option>
          <option value="P">No (P)</option>
        </select>
      </label>
      {name && MBTI && (
        <div>
          <p>
            {name}, 너의 MBTI는 : {MBTI}
          </p>
        </div>
      )}
    </div>
  );
};

export default SessionStoragePage;
