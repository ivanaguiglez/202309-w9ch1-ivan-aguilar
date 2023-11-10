import styled from "styled-components";

const NewMovieFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.light};

  .form {
    &__label {
      width: 100px;
    }
    &__button {
      background-color: ${({ theme }) => theme.color.accent};
      border: solid;
      border-radius: 20px;
      cursor: pointer;
      width: 100px;
    }
  }
`;

export default NewMovieFormStyled;
