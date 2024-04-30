import { useEffect, useState } from "react";
import { useActionData } from "react-router-dom";

export default function useNotification() {
  const action = useActionData();
  const [notify, setNotify] = useState(false);
  const [notifyMessage, setNotifyMessage] = useState("");

  console.log(action);
  useEffect(() => {
    if (action?.response) {
      if (action?.response?.data) {
        setNotify(true);
        setNotifyMessage(action?.response?.data?.message);

        setTimeout(() => {
          setNotify(false);
        }, 3000);
      } else {
        console.error("Message property not found in API response");
      }
    }
  }, [action]);

  return { notify, notifyMessage };
}
