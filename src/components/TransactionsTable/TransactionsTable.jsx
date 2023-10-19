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
      <tbody></tbody>
    </table>
  );
}
