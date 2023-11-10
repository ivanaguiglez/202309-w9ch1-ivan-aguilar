import styled from "styled-components";

const MoviesPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .page {
    &__title {
      font-family: ${({ theme }) => theme.typography.secondaryFont};
      font-size: 5rem;
      padding: 20px;
      height: 70px;
    }

    &__subtitle {
      display: flex;
      justify-content: center;
      text-transform: uppercase;
      padding: 10px;
    }
  }

  div {
    font-weight: bold;
    margin-top: 25px;
  }

  .navlink {
    padding: 5px;
    border: 2px solid black;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.color.accent};
    cursor: pointer;
  }

  .ul-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;
export default MoviesPageStyled;
