import { useState, useEffect } from "react";

function Modal({ message }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 2000); // Mostrar durante 2 segundos
    }
  }, [message]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity ${
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Modal;
