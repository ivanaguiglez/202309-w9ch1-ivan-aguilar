import styled from "styled-components";

const NewMovieFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.light};
`;

export default NewMovieFormStyled;
