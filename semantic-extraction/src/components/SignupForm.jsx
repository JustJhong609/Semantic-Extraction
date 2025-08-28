import { useState } from "react";

export default function SignupForm({ switchToLogin, notify }) {
  const [loading, setLoading] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (!name || !email || !password || !confirmPassword) {
      notify("Please fill in all fields", "error");
      return;
    }
    if (password.length < 8) {
      notify("Password must be at least 8 characters", "error");
      return;
    }
    if (!/\d/.test(password)) {
      notify("Password must contain at least one number", "error");
      return;
    }
    if (password !== confirmPassword) {
      notify("Passwords do not match!", "error");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      notify("Account created successfully! Redirecting to login...", "success");
      form.reset();
      setTimeout(() => switchToLogin(), 2000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          className="w-full p-3 border rounded-lg focus:outline-none"
          placeholder="John Doe"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="w-full p-3 border rounded-lg focus:outline-none"
          placeholder="your@email.com"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="w-full p-3 border rounded-lg focus:outline-none"
          placeholder="••••••••"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Minimum 8 characters with at least one number
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
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
        {loading ? "Processing..." : "Create Account"}
      </button>

      <p className="text-center text-sm text-gray-500 mt-4">
        Already have an account?{" "}
        <button
          type="button"
          className="text-indigo-600 hover:underline"
          onClick={switchToLogin}
        >
          Login
        </button>
      </p>
    </form>
  );
}
