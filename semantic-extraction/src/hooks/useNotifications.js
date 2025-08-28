import { useState } from "react";

export function useNotifications() {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = "success", duration = 3000) => {
    setNotification({ message, type });

    if (duration > 0) {
      setTimeout(() => setNotification(null), duration);
    }
  };

  const closeNotification = () => setNotification(null);

  return { notification, showNotification, closeNotification };
}
