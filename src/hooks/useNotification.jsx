import { useEffect, useState } from "react";
import { useActionData } from "react-router-dom";

export default function useNotification() {
  const action = useActionData();
  const [notify, setNotify] = useState(false);
  const [notifyMessage, setNotifyMessage] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (action?.data) {
      if ((action.data.code === 200) | (action.data.code === 201)) {
        setNotify(true);
        setNotifyMessage(action.data.message);
        setErrors([]);
        setTimeout(() => {
          setNotify(false);
        }, 3000);
      } else {
        setNotify(true);
        setNotifyMessage("ERROR :");
        const errorMessages = Object.values(action.data.errors).map(
          (errorMessage) => errorMessage
        );
        setErrors(errorMessages);
        setTimeout(() => {
          setNotify(false);
        }, 3000);
      }
    }
  }, [action]);

  return { notify, errors, notifyMessage };
}
