// 고객 정보 대신, 주 식별 코드만 매개변수로 받도록 수정
function inNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NG", "RI"].includes(stateCode);
}

function example() {
  const newEnglanders = someCustomers.filter((c) =>
    zZinNewEngland(c.address.state)
  );
}
