import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/bb2.png';

const Login = () => {


  const {loginWithRedirect}=useAuth0()

  return <Wrapper>
 <div className="container">
 <img src={loginImg} alt="Github User"/>
 <h1 style={{color:"#4682B4", fontSize:"4rem"}}>github User</h1><br/>
 <button className="btn" onClick={loginWithRedirect}> &nbsp;&nbsp;Login/sign up&nbsp;&nbsp;</button>
 </div>
  
  </Wrapper>;
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 450px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
