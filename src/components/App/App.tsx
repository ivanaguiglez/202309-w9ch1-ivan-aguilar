import { Navigate, Routes, Route } from "react-router-dom";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import AppStyled from "./AppStyled";
import NewMovieFormPage from "../../pages/NewMovieFormPage/NewMovieFormPage";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/new-movie-form" element={<NewMovieFormPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
