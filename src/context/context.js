import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';

import mockContributions from './mockData.js/mockContributions';
import mockCommit from './mockData.js/mockCommits' 

import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext =React.createContext();

var global_user;

const GithubProvider=({children}) =>{
    
    const [githubUser,setGithubUser] = useState(mockUser)
    const [repos,setrepos] = useState(mockRepos)
    const [followers,setfollowers] = useState(mockFollowers)

    const [requests,setRequests]=useState(0);
    const [isloading,setIsLoading] = useState(false);


    /*start of trying contributions  */
    
    const [contributions,setContributions]=useState(mockContributions)
    
    const searchContributionsRepos = async(user,repo)=>{

        toggleError()
        const response= await axios(`${rootUrl}/repos/${user}/${repo}/stats/contributors`)
            .catch(err=>console.log(err))

         if(response)
         {
            setContributions(response.data)
            console.log("found the repo")
            console.log(response.data)
         }   
         else{
             toggleError(true,'no such repo found')
         }
    }
    /*end of trying contributions  */
   



    /*start of trying all repos available*/

    const [reposavail,setReposavail]=useState(mockRepos)
    
    const searchReposavail = async(user)=>{

        toggleError()
        const response= await axios(`${rootUrl}/users/${user}/repos`)
            .catch(err=>console.log(err))

         if(response)
         {
            setReposavail(response.data)
            console.log("found all repo")
            console.log(response.data[0].name)
         }   
         else{
             toggleError(true,'no user found')
         }
    }

    /*end of trying all repos available*/


    /*start of trying all commit, repository wise available*/

    const [commit,setCommit]=useState(mockCommit)
    
    const searchCommit = async(global_user,repo)=>{

        toggleError()
        const response= await axios(`${rootUrl}/repos/${global_user}/${repo}/commits`)
            .catch(err=>console.log(err))
            console.log(response)
         if(response)
         {
            setCommit(response.data)
            console.log("found all commit")
            console.log(response.data)
         }   
         else{
             toggleError(true,'no commit found')
         }
    }

    /*end of trying all commit, repository wise available*/

    const [error,setError]=useState({show:false,msg:""})


    const searchGithubUser = async(user)=>{
        global_user=user
        toggleError()
        setIsLoading(true)
        const response= await axios(`${rootUrl}/users/${user}`)
            .catch(err=>console.log(err))

         if(response)
         {
             setGithubUser(response.data)
            
             const {login,followers_url}=response.data
          

             //https://api.github.com/users/john-smilga/repos?per_page=100
             //https://api.github.com/users/john-smilga/followers
             await Promise.allSettled([axios(`${rootUrl}/users/${login}/repos?per_page=100`),axios(`${followers_url}?per_page=100`)]).then((results)=>{
                 const[repos,followers]=results;

                 const staus="fulfilled";

                 if(repos.status===staus)
                 {
                     setrepos(repos.value.data)
                 }
                 if(followers.status===staus)
                 {
                     setfollowers(followers.value.data)
                 }
             }).catch(err=>console.log(err))
         }  
          
         else{
             toggleError(true,'no such user found')
         }
         checkRequests()
         setIsLoading(false)
    }
    //rate limit

    const checkRequests=()=>{
        axios(`${rootUrl}/rate_limit`).then(({data})=>{
            
            let {rate:{remaining}}=data
            
            setRequests(remaining)
            
            if(remaining===0)
            {
                toggleError(true,'Exceeded hourly requests')
            }
            
        }).catch((err)=>console.log(err))
    }

    function toggleError(show=false,msg=" ")
    {
        setError({show,msg})
    }
 
    useEffect(checkRequests,[])

    return <GithubContext.Provider value={{githubUser,repos,followers,requests,error,searchGithubUser,searchContributionsRepos,contributions,searchReposavail,reposavail,isloading,commit,setCommit,searchCommit}}>
        {children}
    </GithubContext.Provider>
}

export {GithubProvider,GithubContext}
