module.exports.convertNumber = (num = 0) => {
  const amount = parseFloat(num.toString());

  if (Number.isInteger(amount)) {
    return amount;
  }
  return parseFloat(amount.toFixed(2));
};

const convertNumber = (num = 0) => {
  const amount = parseFloat(num.toString());

  if (Number.isInteger(amount)) {
    return amount;
  }
  return parseFloat(amount.toFixed(2));
};

module.exports.calculateSubTotal = (items) => {
  let subTotal = 0;
  items.forEach((item) => {
    const sellPrice =
      item["perItemSellPrice"] == ""
        ? 0
        : parseFloat(item["perItemSellPrice"].toString());
    const quantity =
      item["quantity"] == "" ? 0 : parseInt(item["quantity"].toString());
    subTotal += sellPrice * quantity;
  });

  return subTotal;
};

module.exports.calculateExtraCharges = (extraCharges) => {
  let totalExtraCharges = 0;
  extraCharges.map((charge) => {
    const amount =
      charge["amount"].toString() == ""
        ? 0
        : parseFloat(charge["amount"].toString());
    totalExtraCharges += amount;
  });

  return totalExtraCharges;
};

module.exports.calculateDiscountAmount = (discount, subtotal) => {
  const { amount, type } = discount;

  if (amount == "" || amount == ".") return 0;

  if (amount == null) return 0;

  return type === "percent"
    ? (convertNumber(amount) / 100) * subtotal
    : parseFloat(amount.toString());
};

module.exports.calculateAdvanceAmount = (advance) => {
  return advance["amount"] == "" || advance["amount"] == "."
    ? 0
    : advance["amount"] == null
    ? 0
    : convertNumber(advance["amount"]);
};

module.exports.calculateTaxes = (taxes, total) => {
  let x = 0;
  taxes.map((tax) => {
    x += total * (parseFloat((tax["rate"] || 0).toString()) / 100);
  });
  return x;
};
