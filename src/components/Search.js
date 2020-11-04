import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../context/context';
const Search = () => {

  const [user,setUser]=React.useState('')

  const {requests,error,searchGithubUser,searchContributionsRepos,searchReposavail,reposavail,isLoading} = React.useContext(GithubContext)

  console.log(requests);

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(user)
    {
      searchGithubUser(user)
      searchContributionsRepos(user)
      searchReposavail(user)
    }
    console.log(user);
  };


  return <section className='section'>
    <Wrapper className='section-center'>
      {error.show && <ErrorWrapper>
      <p>{error.msg}</p>
        </ErrorWrapper>}
      <form onSubmit={handleSubmit}>
         <div className='form-control'>
           <MdSearch/>
           <input type='text' placeholder='enter github user' value={user} onChange={(e)=>setUser(e.target.value)}/>
           {requests>0 && (<button type='submit'>Search</button>)}
        </div> 
      </form>  
      <h3 style={{color:"white"}}>requests:{requests}/60</h3>
    </Wrapper>
  </section>;
};
const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 1rem 1.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr max-content;
    align-items: center;
    h3 {
      padding: 0 0.5rem;
    }
  }
  .form-control {
    background: #1e1e30!important;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    column-gap: 0.5rem;
    
    padding: 0.5rem;
    input {
      letter-spacing: var(--spacing);
     border-color: #1e1e30!important;
      background-color: white;
      padding: 0.25rem 0.5rem;
    }
    input[type=text] {
 
  color:#1e1e30!important ;
}
    input::placeholder {
     
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
  h3 {
    margin-bottom: 0;
    
    font-weight: 400;
  }
`;
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
export default Search;
