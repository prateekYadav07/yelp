import React, { useEffect } from "react";
import { useRestaurantContext } from "../../provider/restaurant/restaurant.provider";

const Alerts = () => {
  const { visible, toggleVisible, alert } = useRestaurantContext();
  const { type, message } = alert;
  useEffect(() => {
    setTimeout(() => {
      toggleVisible(false);
    }, 2000);
  }, [visible]);

  return (
    <div>
      {visible ? (
        type === "success" ? (
          <div className="alert alert-success" role="alert">
            {message}
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        )
      ) : null}
    </div>
  );
};

export default Alerts;
