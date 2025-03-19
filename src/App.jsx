import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { notifications as initialData } from './notifications.js';
import NotificationList from './NotificationList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <NotificationList>
        <p className="text-muted">You have new notifications:</p>
      </NotificationList>
    </div>
  );
};

export default App