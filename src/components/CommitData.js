import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';

const CommitsData = () => {
  const {commit} = React.useContext(GithubContext)
  return <Wrapper>
      <br/><br/><br/><br/>
    <div className='followers'>
      {commit.map((comm)=>{
        const {commit}=comm;
        console.log('commit');
        console.log(commit.committer.name);
        console.log(commit.committer.date);
        console.log(commit.message);
        console.log(commit);
        return <article>
          <div style={{color:"white"}}> 
              <h4>Commit by:{commit.committer.name}</h4>
              <h4>Commit Date:{commit.committer.date}</h4>
              <h4>Commit message:{commit.message}</h4>
              <br/>
          </div>
        </article>
      })}
    </div>
  </Wrapper>;
};

const Wrapper = styled.article`
   background: #161625;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  
 
  .followers {
    overflow: scroll;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 0.3rem 1rem;
    padding: 0.3rem rem;
     padding-top:1rem;

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
export default CommitsData;
