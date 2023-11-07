import { Navigate, Routes, Route } from "react-router-dom";
import MoviesPage from "../../pages/MoviesPage/MoviePage";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
