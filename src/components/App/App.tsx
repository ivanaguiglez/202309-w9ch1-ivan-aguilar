import { Navigate, Routes, Route } from "react-router-dom";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/new-movie-form" element={<NewMovieForm />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
