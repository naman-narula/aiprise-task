const API = 'https://dummyjson.com/user';

async function fetchList(skip,limit=10,searchTerm){
    const serachParams = new URLSearchParams([["skip",skip],["limit",limit],['q',searchTerm]]);
    try{
    const response = await fetch(`${API}?${serachParams}`);
        if(response.ok){
           return await response.json();
        }   
    }
    catch(e){
        console.log(e);
    }

}

export default fetchList;