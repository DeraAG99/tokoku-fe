import React from "react";
import { useNavigate } from "react-router-dom";

function Notify({ message, errors = [], goto = "/" }) {
  const navigate = useNavigate();

  const renderErrorList = () => {
    if (errors && errors.length > 0) {
      return (
        <ul className="list-disc list-inside">
          {errors.map((error, index) => (
            <li key={index} className="">
              {error}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="toast toast-top toast-center">
      <div className="alert">
        {message && <p className="message">{message}</p>}
        <div className="">{renderErrorList()}</div>
        <div onClick={() => navigate(goto)} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-4 h-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Notify;
