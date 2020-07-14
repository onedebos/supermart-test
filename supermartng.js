class ShoppingCart {
  constructor() {
    this.items = [];
    this.deliveryFee = 0;
    this.netTotal = 0;
    this.grossTotal = 0;
  }

  calculateDeliveryFee() {
    return this.items.length * 50;
  }

  addItem(name, qty, price) {
    this.netTotal += price;
    this.deliveryFee += 50;
    this.grossTotal = this.netTotal + this.deliveryFee;
    const item = {
      name,
      qty,
      price,
    };

    this.items.push(item);
  }

  removeItem(name, qty, price) {
    this.netTotal -= price;
    this.deliveryFee -= 50;
    this.grossTotal = this.grossTotal - (price + this.deliveryFee);
    let i = 0;

    while (i < this.items.length) {
      if (
        this.items[i].name === name &&
        this.items[i].price == price &&
        this.items[i].qty == qty
      ) {
        this.items = this.items.filter((item, index) => index !== i);
      } else {
      }
      i += 1;
    }

    return this.items;
  }

  checkout(paidAmt) {
    if (paidAmt < this.grossTotal) {
      return "insufficient funds";
    } else {
      this.items = [];
      return paidAmt - this.grossTotal;
    }
  }
}

class CouponShoppingCart extends ShoppingCart {
  constructor() {
    super();
    this.SUPERMART_DEV_COUPON = 1000;
  }

  checkout(paidAmt) {
    this.grossTotal -= this.SUPERMART_DEV_COUPON;
    if (paidAmt < this.grossTotal) {
      return "insufficient funds";
    } else {
      this.items = [];
      return paidAmt - this.grossTotal;
    }
  }
}
