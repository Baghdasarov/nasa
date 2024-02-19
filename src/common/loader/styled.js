import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const Loader = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 4px solid ${(props) => props.color};
  border-radius: 100%;
  border-left-color: transparent;
  animation: 1s loading infinite;

  @keyframes loading {

    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
    
  }
`;
