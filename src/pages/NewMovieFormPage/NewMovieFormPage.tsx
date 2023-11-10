import Form from "../../components/Form/Form";
import React from "react";
import NewMovieFormPageStyled from "./NewMovieFormPageStyled";

const NewMovieFormPage = (): React.ReactElement => {
  return (
    <NewMovieFormPageStyled>
      <h2 className="form-title">Create your movie</h2>
      <Form />
    </NewMovieFormPageStyled>
  );
};

export default NewMovieFormPage;
