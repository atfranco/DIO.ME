import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid white;
  margin: 16px 16px;
  width: calc(50% - 32px);
  height: 150px;
  align-content: center;
  transition: 0.5s ease;
}
 :hover{
  background: #003566;
  transform: scale(0.98);
  border: 2px solid #FFC300;
}
`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

export const WrapperFullName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #FFC300;
`;

export const WrapperLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #FFC300;
`;
