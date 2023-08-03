import { useEffect, useState } from "react";

const IndexedDBPage = () => {
  // 현재 위치를 상태로 저장합니다. 초기값은 null입니다.
  const [location, setLocation] = useState(null);

  // 컴포넌트가 마운트되면 실행되는 useEffect 훅입니다.
  useEffect(() => {
    // 브라우저가 위치 정보를 지원하는지 확인합니다.
    if ("geolocation" in navigator) {
      // 위치 정보를 얻습니다.
      navigator.geolocation.getCurrentPosition(async (position) => {
        // 위치 정보(위도와 경도)를 추출합니다.
        const { latitude, longitude } = position.coords;

        // indexedDB에 접근합니다.
        const db = await window.indexedDB.open("LocationDB", 1);

        // 'location' object store를 만듭니다. DB가 처음 생성되거나 버전이 업그레이드 될 때 실행됩니다.
        db.onupgradeneeded = (event) => {
          const db = event.target.result;
          db.createObjectStore("location", { keyPath: "id" });
        };

        // DB 열기가 성공하면 실행되는 이벤트입니다.
        db.onsuccess = (event) => {
          const db = event.target.result;
          // 'location' object store에 대한 readwrite 트랜잭션을 시작합니다.
          const tx = db.transaction("location", "readwrite");
          const store = tx.objectStore("location");

          // 위치 정보를 저장합니다.
          store.put({ id: "user-location", latitude, longitude });

          // UI를 업데이트합니다.
          setLocation({ latitude, longitude });
        };
      });
    } else {
      // 위치 정보를 지원하지 않는 브라우저일 경우 콘솔에 메시지를 출력합니다.
      console.log("Geolocation is not supported by this browser.");
    }
  }, []); // []를 넣음으로써, 컴포넌트가 마운트 될 때 한번만 실행되도록 합니다.

  // 위치 정보가 있으면 위치를 출력하고, 없으면 "Getting your location..." 메시지를 출력합니다.
  return (
    <div>
      {location ? (
        <p>
          Your location: Latitude: {location.latitude}, Longitude:{" "}
          {location.longitude}
        </p>
      ) : (
        <p>Getting your location...</p>
      )}
    </div>
  );
};

export default IndexedDBPage;
