import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import TopScreen from './components/TopScreen';
import Footer from './components/Footer';

function App() {
  const [showTop, setShowTop] = useState(true);

  return (
    <div>
      <Header onHomeClick={() => setShowTop(true)} />
      {showTop && <TopScreen />}
      {/* 他のコンポーネントや要素を追加 */}
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);