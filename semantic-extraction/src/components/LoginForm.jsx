import { useState } from "react";

export default function LoginForm({ switchToSignup }) {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace with Supabase or API call
    setTimeout(() => {
      setLoading(false);
      alert("Login successful! Redirecting...");
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          className="w-full p-3 border rounded-lg focus:outline-none"
          placeholder="your@email.com"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          className="w-full p-3 border rounded-lg focus:outline-none"
          placeholder="••••••••"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium"
      >
        {loading ? "Processing..." : "Login"}
      </button>
    </form>
  );
}
