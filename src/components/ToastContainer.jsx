import React, { useEffect, useState } from "react";
import Toast from "./Toast";
import { toastManager } from "../utils/toast";
import "../index.css";

let toastId = 0;

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const unsubscribe = toastManager.subscribe((message, type, duration) => {
      const id = ++toastId;
      setToasts((prev) => [...prev, { id, message, type, duration }]);
    });
    return unsubscribe;
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
          duration={toast.duration}
        />
      ))}
    </div>
  );
}

