import { assert } from "chai";
// 요구사항: 우선순위 큐 지원
class Book {
  addReservation(customer) {
    this.zz_reservations(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    // 추가한 매개변수를 실제로 사용하는지 확인하는 어서션
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}
