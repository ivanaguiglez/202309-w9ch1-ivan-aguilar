import { Navigate, Routes, Route } from "react-router-dom";
import MoviesPage from "../../pages/MoviesPage/MoviePage";

const App = (): React.ReactElement => {
  return (
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </main>
  );
};

export default App;
