import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../context/context';
import Repos_data from '../components/Repos_data'
import CommitsData from '../components/CommitData'

import './Card1.css';

const ShowCommits = () => {

  const [user,setUser]=React.useState('')
  const [commit,setCommit]=React.useState('')
  
  const {requests,error,searchCommit} = React.useContext(GithubContext)

  console.log(requests);

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(commit)
    {
        searchCommit(user,commit)
    }
    console.log(commit);
  };


  return <Wrapper1>
    <Wrapper className="example">
  <div className='followers'>
       
      {error.show && <ErrorWrapper>
      <p>{error.msg}</p>
        </ErrorWrapper>}
      <form onSubmit={handleSubmit}>
         <div className='form-control'>
           <MdSearch/>
           <input type='text' placeholder='enter github repo' value={commit} onChange={(e)=>setCommit(e.target.value)}/>
           {requests>0 && <button type='submit'>Search</button>}
        </div> 
      </form>  

    <CommitsData/>
   
    </div>
    </Wrapper>
  </Wrapper1>;
};

const ErrorWrapper = styled.article`
  position: absolute;
  width: 90vw;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  text-transform: capitalize;
  p {
    color: red;
    letter-spacing: var(--spacing);
  }
`;
const Wrapper = styled.article`
   background: #161625;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  padding-top:2rem;
  
  .form-control {
   background: #1e1e30!important;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
     border-color: #1e1e30!important;
      background-color: white;
      padding: 0.25rem 0.5rem;
      
      letter-spacing: var(--spacing);
     
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
     border-radius: 5px;
      border-color:rgba(0, 123, 255, 0.125);
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: rgba(0, 123, 255, 0.125);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: white;
        color: black;
      }
    }

    svg {
      color: var(--clr-grey-5);
    }
    input,
    button,
    svg {
      font-size: 1.3rem;
    }
    @media (max-width: 800px) {
      button,
      input,
      svg {
        font-size: 0.85rem;
      }
    }
  }

  &::before {
    content: 'commits in a repo';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
   background:rgba(0, 123, 255, 0.125);
    color:	#00FFFF;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.8rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 2rem;
  }
  
  article {
    transition: var(--transition);
   padding-left:1rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
   
    
    h4 {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-grey-5);
    }
  }
  
`;
const Wrapper1 = styled.div`
  padding-top: 10rem;
  padding-left:21rem;
  padding-right:21rem;
  max-width:100%;
  gap: 3rem 5rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;
export default ShowCommits;
