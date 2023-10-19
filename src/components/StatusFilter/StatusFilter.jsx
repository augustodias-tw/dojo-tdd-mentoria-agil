export default function StatusFilter() {
  return (
    <select className="form-select" style={{ width: "150px" }}>
      <option disabled selected>
        Status
      </option>
      <option value="created">Criado</option>
      <option value="processing">Processando</option>
      <option value="processed">Concluída</option>
    </select>
  );
}
