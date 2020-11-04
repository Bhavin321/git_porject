import React,{Component} from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../context/context';



class Compare1 extends React.Component {

    constructor(props) {
        super(props);
     
        this.state = {
          data: null,
          user2:"",
          star:null,
          repo_info:null
        };
      }


    handleSubmit(e)
      {
         
          console.log("handle submit");
        const apiUrl = `https://api.github.com/users/${this.state.user2}/repos`;
        fetch(apiUrl)
          .then((response) => response.json())
          .then(data => this.setState({ data }));

          console.log(this.state.data);

          fetch(`https://api.github.com/users/${this.state.user2}/starred?per_page=10&sort=stars&order=desc`) 
          .then((response) => response.json())
          .then(data => this.setState({ star:data }));


          fetch(`https://api.github.com/users/${this.state.user2}`) 
          .then((response) => response.json())
          .then(data => this.setState({ repo_info:data }));

          console.log("star repos")
          console.log(this.state.repo_info);
      }

    render() {
      return <Wrapper1>
              <Wrapper2>
                <input type='text' placeholder='enter 1st github user' value={this.state.user2} onChange={(e)=>this.setState({user2:e.target.value})}/>
                <button type='submit' onClick={()=>this.handleSubmit()}>Search</button>)
              
                {this.state.data && this.state.data!=' ' && this.state.data.map((repo,index)=>{
              const {name,description}=repo;
              
              return <article>
              
                <div> 
                <h4>{name}:{description}</h4>
                  
                </div>
              
              </article>
              
            })}
  <br/><br/><br/>
            
    {this.state.repo_info ? (
       <article>

      <div> 
          <h4>Followers:{this.state.repo_info.followers}</h4>
          <p>Following:{this.state.repo_info.following}</p>
          <p>Date:{this.state.repo_info.created_at}</p>
          <p>View:<a href={this.state.repo_info.url}>Visit</a></p>
      </div>

    </article>
    ):(
      null
    )}

    
   
     {this.state.star && this.state.star!=' ' && this.state.star.map((star,id)=>{
              
              const {stargazers_count,forks_count,name,language} = star
              return <article>
              
                <div> 
                    <h4>name:{name}</h4>
                    <p>Star:{stargazers_count}</p>
                    <p>Forks:{forks_count}</p>
                    <p>language:{language}</p>
                </div>
              
              </article>
            })}

            </Wrapper2>
      </Wrapper1>
    }
  }

  
const Wrapper1 = styled.div`
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
h3 {
  margin-bottom: 0;
  color: var(--clr-grey-5);
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


const Wrapper2 = styled.article`
  background: var(--clr-white);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;

  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  .followers {
    overflow: scroll;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;
  }
  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
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
  export default Compare1;
