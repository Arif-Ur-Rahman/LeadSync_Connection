import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CampaignTable from './components/CampaignTable';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <CampaignTable />
      </div>
    </div>
  );
}

export default App;
