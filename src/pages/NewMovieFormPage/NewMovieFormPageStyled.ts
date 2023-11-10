import styled from "styled-components";

const NewMovieFormStyled = styled.form`
  .form-title {
    font-family: ${({ theme }) => theme.typography.mainFontFamily};
    text-align: center;
    margin: 0;
  }
`;

export default NewMovieFormStyled;
