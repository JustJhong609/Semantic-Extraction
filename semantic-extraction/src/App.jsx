import { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Tabs from "./components/Tabs";
import Notification from "./components/Notification";
import { useNotifications } from "./hooks/useNotifications";

export default function App() {
  const [activeTab, setActiveTab] = useState("login");
  const { notification, showNotification, closeNotification } = useNotifications();

  return (
    <div className="flex items-center justify-center p-4 min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="card w-full max-w-md p-8 bg-white/80 rounded-xl shadow-lg">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-brain text-4xl mr-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"></i>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              NBSC-ICS
            </h1>
          </div>
          <h2 className="text-xl font-semibold text-gray-700">
            Entity Extraction System
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Research Abstract Knowledge Representation
          </p>
        </div>

        {/* Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Forms */}
        {activeTab === "login" ? (
          <LoginForm
            switchToSignup={() => setActiveTab("signup")}
            notify={showNotification}
          />
        ) : (
          <SignupForm
            switchToLogin={() => setActiveTab("login")}
            notify={showNotification}
          />
        )}
      </div>

      {/* Notification */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={closeNotification}
        />
      )}
    </div>
  );
}
