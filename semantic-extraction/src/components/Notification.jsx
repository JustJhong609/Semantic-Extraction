export default function Notification({ message, type = "success", onClose }) {
  const colors = {
    success: "bg-green-50 text-green-700 border border-green-300",
    error: "bg-red-50 text-red-700 border border-red-300",
    warning: "bg-yellow-50 text-yellow-700 border border-yellow-300",
  };

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-lg shadow-md flex items-center gap-2 z-50 ${colors[type]}`}
    >
      <span>
        {type === "success" && <i className="fas fa-check-circle"></i>}
        {type === "error" && <i className="fas fa-exclamation-circle"></i>}
        {type === "warning" && <i className="fas fa-exclamation-triangle"></i>}
      </span>
      <span>{message}</span>
      <button className="ml-2 text-lg" onClick={onClose}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}
