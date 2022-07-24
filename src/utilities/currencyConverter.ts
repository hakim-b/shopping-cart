const currObj = {
    currency: "CAD",
    style: "currency"
};
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, currObj);

export function formatCurrency(amount: number) {
    return CURRENCY_FORMATTER.format(amount);
}
