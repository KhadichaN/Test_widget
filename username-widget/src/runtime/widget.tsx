import React, { useEffect, useState } from 'react';
import { SessionManager } from 'jimu-core';

const UserInfoWidget = () => {
  const [userInfo, setUserInfo] = useState<{ username: string } | null>(null);

  useEffect(() => {
    const session = SessionManager.getInstance().getMainSession();
    console.log('session', session);
    
    if (session && session.username) {
      setUserInfo({ username: session.username });
    } else {
      setUserInfo(null);
    }
  }, []);

  return (
    <div style={{ padding: '12px' }}>
      {userInfo ? (
        <p><strong>Пользователь:</strong> {userInfo.username}</p>
      ) : (
        <p>Авторизация не выполнена</p>
      )}
    </div>
  );
};

export default UserInfoWidget;
