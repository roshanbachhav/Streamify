import { useEffect, useState } from "react";

const useNetworkConnection = () => {
  const [connection, setConnection] = useState();
  useEffect(() => {
    window.addEventListener("offline", () => {
      setConnection(false);
    });

    window.addEventListener("online", () => {
      setConnection(true);
    });
  }, []);
  return connection;
};

export default useNetworkConnection;
