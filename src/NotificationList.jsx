import React, { useState } from 'react';
import { notifications as initialData } from './notifications';
import NotificationItem from './NotificationItem.jsx';

const NotificationList = ({ children }) => {
  const [notificationList, setNotificationList] = useState(initialData);
  
  const clearNotification = (id) => {
    setNotificationList(notificationList.filter(n => n.id !== id));
  };

  const clearAll = () => {
    setNotificationList([]);
  };

  return (
    <div className="container mt-4">
      <h2>Notifications ({notificationList.length})</h2>
      {children}
      {notificationList.map(notify => (
        <NotificationItem key={notify.id} notify={notify} onClear={() => clearNotification(notify.id)} />
      ))}
      {notificationList.length > 0 && (
        <button className="btn btn-danger mt-3" onClick={clearAll}>Clear All</button>
      )}
    </div>
  );
};

export default NotificationList;