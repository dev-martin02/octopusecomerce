import React from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react"; // Import icons from Lucide React

type AlertProps = {
  message: string;
  type?: "success" | "error" | "warning" | "info"; // Defines alert type
  onClose?: () => void; // Optional close function
};

const Alert: React.FC<AlertProps> = ({ message, type = "info", onClose }) => {
  // Define icons based on alert type
  const iconTypes = {
    success: <CheckCircle className="text-green-500" />,
    error: <AlertCircle className="text-red-500" />,
    warning: <AlertTriangle className="text-yellow-500" />,
    info: <Info className="text-blue-500" />,
  };

  const colorClasses = {
    success: "bg-green-100 text-green-700 border-green-400",
    error: "bg-red-100 text-red-700 border-red-400",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-400",
    info: "bg-blue-100 text-blue-700 border-blue-400",
  };

  return (
    <div
      className={` absolute bottom-0 right-4 p-4 border rounded-md mb-4 flex items-center justify-between ${colorClasses[type]}`}
    >
      <div className="flex items-center">
        {iconTypes[type]} {/* Display the appropriate icon */}
        <span className="ml-2">{message}</span>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-gray-700 hover:text-gray-900 focus:outline-none ml-4"
        >
          <X className="w-4 h-4" /> {/* Close icon */}
        </button>
      )}
    </div>
  );
};

export default Alert;
