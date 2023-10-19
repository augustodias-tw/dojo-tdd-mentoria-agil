export default function SearchInput() {
  return (
    <div className="input-group me-3" style={{ maxWidth: "30%" }}>
      <i className="bi bi-search input-group-text"></i>
      <input placeholder="Pesquisa..." className="form-control" />
    </div>
  );
}
