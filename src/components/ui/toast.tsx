import { useEffect, useState } from "react";

export default function ToastSuccess({
  message = "Item moved successfully.",
  duration = 3000,
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      setVisible(true);
      const timeout = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timeout);
    }
  }, [duration, message]);

  if (!visible) return null;

  return (
    <div
      id="toast-success"
      className="flex justify-center items-center p-1 mb-4 rounded-lg shadow-sm text-white bg-green-800"
      role="alert"
    >
      <div className="flex items-center justify-center">
        <img src="/icons/check.svg" alt="check" className="w-5 h-5" />
      </div>
      <p className="ms-3 text-sm font-normal">{message}</p>
    </div>
  );
}
