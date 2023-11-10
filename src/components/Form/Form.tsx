import { useState } from "react";
import { MovieStructure } from "../../store/features/movies/types";
import FormStyled from "./FormStyled";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const emptyMovie: MovieStructure = {
    image_url: "",
    title: "",
    description: "",
    id: 0,
    picture: "",
    isWatched: false,
  };

  const [newMovie, setNewMovie] = useState(emptyMovie);

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMovie(() => ({
      ...newMovie,
      [event.target.id]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    navigate("/");
  };

  return (
    <FormStyled className="form" onSubmit={onFormSubmit}>
      <label className="form__label" htmlFor="imageUrl">
        Image Url:
        <input
          type="url"
          className="form__input"
          id="image_url"
          required
          autoComplete="off"
          onChange={onChangeData}
        />
      </label>
      <label className="form__label" htmlFor="title">
        Title:{" "}
        <input
          type="text"
          className="form__input"
          id="name"
          required
          autoComplete="off"
          onChange={onChangeData}
        />
      </label>
      <label className="form__label" htmlFor="description">
        Description:{" "}
        <input
          type="text"
          className="form__input"
          id="description"
          required
          autoComplete="off"
          onChange={onChangeData}
        />
      </label>
      <button type="submit" className="form__button">
        Create
      </button>
    </FormStyled>
  );
};

export default Form;
