import React from 'react';

const NotificationItem = ({ notify, onClear }) => {
  return (
    <div className="alert alert-info d-flex justify-content-between"> 
      <strong>{notify.name}:</strong> {notify.message}
      <button className="btn-close" onClick={onClear}></button>
    </div>
  );
};

export default NotificationItem;