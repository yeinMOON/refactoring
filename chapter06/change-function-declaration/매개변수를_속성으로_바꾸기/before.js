function inNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VT", "NG", "RI"].includes(aCustomer.address.state);
}

function example() {
  const newEnglanders = someCustomers.filter((c) => inNewEngland(c));
}
