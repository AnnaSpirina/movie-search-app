import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritePage from './pages/FavoritesPage';
import MoviePage from './pages/MoviePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;