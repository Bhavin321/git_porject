import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {

 
// STEP 2 - Chart Data
const chartData = [
  {
    label: "Venezuela",
    value: "290"
  },
  {
    label: "Saudi",
    value: "260"
  },
  {
    label: "Canada",
    value: "180"
  },
  {
    label: "Iran",
    value: "140"
  },
  {
    label: "Russia",
    value: "115"
  },
  {
    label: "UAE",
    value: "100"
  },
  {
    label: "US",
    value: "30"
  },
  {
    label: "China",
    value: "30"
  }
];

const {repos} = React.useContext(GithubContext)
 let languages=repos.reduce((total,item)=>{
  
  const {langauge}=item;

  if(!langauge)
    return total
  if(!total[langauge]){
    total[langauge]={label:langauge,value:1};
  }
  else
  {
    total[langauge]={...total[langauge],value:total[langauge].value+1}
  }
    
    return total
 },{}) 

 languages=Object.values(languages).sort((a,b)=>{
   return b.value-a.value
 }).slice(0,5)

  
  // return <ExampleChart data={chartData}/>;

  return(
    <section className='section'>
      <Wrapper className='section-center'>
          <Pie3D data={languages}/>
      </Wrapper>
    </section>
  )
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
