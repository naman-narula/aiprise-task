
import './App.css'
import { useState,useEffect } from 'react';
import Search from './components/search'
import Table from './components/Table';
import fetchList from './api';

function App() {

    const [searchTerm, setSearchTerm] = useState('');
    const [profileList,setProfileList] = useState([]);

    useEffect(()=>{
      async function fetchUserList(){
        const users = await fetchList(searchTerm);
        setProfileList(users)
      }
      fetchUserList();
    },[searchTerm])


    function handleInputChange(event) {
        const input = event.target.value;
        if(input.size()>0 && input.match(/[a-z]/i)){
            setSearchTerm(input);
            
        }
    }
    console.log(profileList);


  return (
    <>
    <Search value={searchTerm} onChange={handleInputChange}></Search>
    <Table profileList={profileList} />

    </>
  )
}

export default App
