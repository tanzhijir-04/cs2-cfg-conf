import React from 'react';
import CrosshairEditor from './components/CrosshairEditor';
import ControlsEditor from './components/ControlsEditor';
import VideoSettings from './components/VideoSettings';
import { ConfigProvider } from './context/ConfigContext';
import Navigation from './components/Navigation';

function App() {
  return (
    <ConfigProvider>
      <div className="min-h-screen bg-[#000000]">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <div className="space-y-12">
            <CrosshairEditor />
            <ControlsEditor />
            <VideoSettings />
          </div>
        </main>
      </div>
    </ConfigProvider>
  );
}

export default App;