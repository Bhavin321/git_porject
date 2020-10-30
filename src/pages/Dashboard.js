import React from 'react';
import { Info, Repos, User, Search, Navbar} from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';

import SearchRepo from '../components/SearchRepo'
import ShowRepos from '../components/ShowRepos'
import ShowCommits from '../components/ShowCommits'

const Dashboard = () => {

  const isLoading = React.useContext(GithubContext)

  if(!isLoading)
  {
    return <main>
      <Navbar/>
      <Search/>
      <img src={loadingImage} alt='loading' className="loading-img"/>
    </main>
  }
  else
  {
    return (
      <main>
        <Navbar></Navbar> 
        <Search/>
        <Info />
        <User />
        <Repos /> 
        <ShowRepos/>
        <ShowCommits/>
      </main>
    );
  }
  
};

export default Dashboard;
