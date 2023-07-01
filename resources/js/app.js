import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import TopScreen from './components/TopScreen';

function App() {
  return (
    <div>
      <Header />
      <TopScreen />
      {/* 他のコンポーネントや要素を追加 */}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);