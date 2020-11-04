import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../context/context';
import Repos_data from '../components/Repos_data'
import CommitsData from '../components/CommitData'

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
    <Wrapper>
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
  
  
  .form-control {
    background: var(--clr-white);
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    border-radius: 5px;
    padding: 0.5rem;
    input {
      border-color: transparent;
      outline-color: var(--clr-grey-10);
      letter-spacing: var(--spacing);
      color: var(--clr-grey-3);
      padding: 0.25rem 0.5rem;
    }
    input::placeholder {
      color: var(--clr-grey-3);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
    }
    button {
      border-radius: 5px;
      border-color: transparent;
      padding: 0.25rem 0.5rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      color: var(--clr-white);
      transition: var(--transition);
      cursor: pointer;
      &:hover {
        background: var(--clr-primary-8);
        color: var(--clr-primary-1);
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
    color:#F4D03F ;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.8rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 2rem;
  }
  
  article {
    transition: var(--transition);
    padding: 0.8rem 1rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    
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
