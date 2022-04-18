import "./style.css";

function Loading() {
  return (
    <div className="loading">
      <svg viewBox="25 25 50 50">
        <circle className="loading-circle" cx="50" cy="50" r="15"></circle>
      </svg>
      <span className="change">Carregando...</span>
    </div>
  );
}

export default Loading;
