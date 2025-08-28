export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex border-b border-gray-200 mb-6">
      <button
        className={`flex-1 py-2 px-4 font-medium text-center ${
          activeTab === "login"
            ? "text-indigo-600 border-b-2 border-indigo-600"
            : "text-gray-500 hover:text-indigo-600"
        }`}
        onClick={() => setActiveTab("login")}
      >
        <i className="fas fa-sign-in-alt mr-2"></i> Login
      </button>
      <button
        className={`flex-1 py-2 px-4 font-medium text-center ${
          activeTab === "signup"
            ? "text-indigo-600 border-b-2 border-indigo-600"
            : "text-gray-500 hover:text-indigo-600"
        }`}
        onClick={() => setActiveTab("signup")}
      >
        <i className="fas fa-user-plus mr-2"></i> Sign Up
      </button>
    </div>
  );
}
