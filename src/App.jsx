import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Connections from './components/Connections';


function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Connections />
        
      </div>
    </div>
  );
}

export default App;
