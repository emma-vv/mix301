// Global toast manager
let toastCallbacks = [];

export const toastManager = {
  subscribe: (callback) => {
    toastCallbacks.push(callback);
    return () => {
      toastCallbacks = toastCallbacks.filter(cb => cb !== callback);
    };
  },
  show: (message, type = "success", duration = 3000) => {
    toastCallbacks.forEach(callback => callback(message, type, duration));
  },
  success: (message, duration) => toastManager.show(message, "success", duration),
  error: (message, duration) => toastManager.show(message, "error", duration),
  info: (message, duration) => toastManager.show(message, "info", duration),
};

