import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';

import './Card1.css';

const CommitsData = () => {
  const {commit} = React.useContext(GithubContext)
  return <Wrapper className="example">
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
  padding-top:2rem;
 
  .followers {
    overflow: scroll;
    height: 450px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 5.3rem ;
    
     padding-top:1rem;

  }
  article {
    transition: var(--transition);
   
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
     
    
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
