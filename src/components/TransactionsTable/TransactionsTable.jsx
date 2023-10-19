import { moneyFormater } from "../../helpers/MoneyFormater";

export default function TransactionsTable({ transactions }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Título</th>
          <th>Descrição</th>
          <th>Status</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td>{transaction.description}</td>
            <td>{transaction.status}</td>
            <td>{moneyFormater(transaction.amount)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
