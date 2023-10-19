import { transactions } from "./getTransactions";

export default function getTransactionById(id) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(transactions.find((t) => t.id === id)), 500)
  );
}
