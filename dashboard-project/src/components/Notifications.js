import React from "react";
import { useTheme } from "../ThemeContext";
import "../styles/Notifications.css";

const Notifications = () => {
  const { notifications, markAsRead } = useTheme();

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications available</p>
      ) : (
        <ul>
          {notifications.map((notif) => (
            <li
              key={notif.id}
              className={notif.read ? "read" : "unread"}
              onClick={() => markAsRead(notif.id)}
            >
              {notif.text} {notif.read ? "(Read)" : "(Unread)"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;

