import styled from "styled-components";

const MovieCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.light};
  border: 3px solid;
  border-radius: 22px;
  width: 350px;
  gap: 12px;

  .card {
    &__picture {
      object-fit: cover;
      border: 5px solid black;
      border-radius: 22px;
    }

    &__title {
      display: flex;
      justify-content: center;
      text-transform: uppercase;
      text-align: center;
      padding: 5px;
    }

    &__description {
      display: flex;
      justify-content: center;
      padding: 5px;
      margin: 0;
    }
  }

  @media (max-width: 362px) {
    width: 315px;
  }
`;

export default MovieCardStyled;
