import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Quiz, Result } from 'pages';
import { Navbar, NotFound } from 'components';

const App = () => {
  return (
    <main className="min-h-screen bg-zinc-900 w-full">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/quiz/:name" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
