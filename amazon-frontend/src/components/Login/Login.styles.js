import { Paper } from '@mui/material';
import styled from 'styled-components';

const OuterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const InnerContainer = styled.div`
  margin: auto;
  max-width: 720px;
`;
const LoginContainer = styled(Paper)`
  padding: 40px 40px;
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: 10px;
  border-radius: 4px;
  border-color: #b2c9ab !important;
`;
const LoginHeading = styled.h1`
  font-weight: 400;
`;
const LoginFieldContainer = styled.div`
  margin-bottom: 28px;
`;
export {
  OuterContainer,
  InnerContainer,
  LoginContainer,
  LoginHeading,
  LoginFieldContainer,
};
