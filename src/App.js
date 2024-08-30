import React from 'react';
import { useMsal } from '@azure/msal-react';
import AuthButton from './AuthButton';

function App() {
  const { accounts, instance } = useMsal();

  return (
    <div className="App">
      <header className="App-header">
        <h1>MSAL React App</h1>
        {accounts.length === 0 ? (
          <AuthButton msalInstance={instance} />
        ) : (
          <div>
            <p>Welcome</p>
            <button onClick={() => instance.logout()}>Logout</button>
          </div>
        )}
      </header>
    </div>
  );
}
export default App;