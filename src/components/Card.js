import React from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';

import './Card1.css';

const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    
  } = githubUser;
  return (
    <Wrapper className="example">
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h3><font color="#007bff" >{name}</font></h3>
         
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className='bio'>{bio}</p>
      <div className='links'>
        <p>
           <font color="#007bff   " ><MdBusiness></MdBusiness> {company || 'Not Available'}</font>
        </p>
        <p>
          <font color="#007bff  " ><MdLocationOn></MdLocationOn> {location || 'Not Available'} </font>
        </p>
        <a href={`https://${blog}` }>
          <font color="#007bff   " > <MdLink></MdLink>
          {blog || 'Not Available'}</font>
        </a>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  background: #161625;
  
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: 'User';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background:rgba(0, 123, 255, 0.125);
    border-radius: 5px;
      border-color: white;
    color: #ff073a;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 2rem;
    &:hover {
        background: white;
        
      } !important
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-white);
      border: 1px solid var(--clr-black);
      background:#007bff ;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      
    }
  }
  .bio {
    color: var(--clr-grey-3);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: #007bff;
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-black);
      }
    }
  }
`;
export default Card;
