import React from "react";
import { useNavigate } from "react-router-dom";

function CardRegistration() {

  const navigate = useNavigate();

  const handleGoToAutoPayment = () => {
    navigate("/autoPaymentSetting");
  };
  return (
    <div>
      <h1>카드 등록 성공!</h1>
      <p>카드가 정상적으로 등록되었습니다.</p>

      <button onClick={handleGoToAutoPayment}>
        자동 결제 등록하기
      </button>
    </div>
  );
}

export default CardRegistration;
