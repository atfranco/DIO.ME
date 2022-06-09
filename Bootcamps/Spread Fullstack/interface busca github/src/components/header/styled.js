import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
  background: #003566;
  border-radius: 10px;
  border: #FFC300 solid 1px;
}

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
  }

  button {

    background-color: #FFC300;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    transition: 0.5s ease;

    &:hover {
      background-color: #FFD60A;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.5);
    }

    span {
      font-weight: bold;
      color: #001D3D;
    }
  }
`;
