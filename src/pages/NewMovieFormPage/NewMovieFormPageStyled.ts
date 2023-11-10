import styled from "styled-components";

const NewMovieFormStyled = styled.form`
  background-color: ${({ theme }) => theme.color.light};

  .form-title {
    font-family: ${({ theme }) => theme.typography.mainFontFamily};
  }
`;

export default NewMovieFormStyled;
