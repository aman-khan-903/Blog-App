import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext= createContext(); 

function AppContextProvider({children}){
    const[loading,setLoading]= useState(false); 
    const [posts, setPosts]= useState([]); 
    const [page, setPage]= useState(1); 
    const [totalPages, setTotalPages]= useState(null); 

    async function fetchBlogPosts(page=1){
        setLoading(true); 
        let url= `${baseUrl}?page=${page}`; 
        try{
            const result= await fetch(url); 
            const data= await result.json(); 
            console.log(data);
            setTotalPages(data.totalPages); 
            setPosts(data.posts); 
            setPage(data.page); 
        }
        catch(err){
            console.log("fetch Blog post me error aa gya hai");
            setTotalPages(null); 
            setPage(1); 
            setPosts([]); 
        }
        setLoading(false); 
    }

    function handlePageChange(page){
        setPage(page); 
        fetchBlogPosts(page); 

    }

    const value= {
        loading, 
        setLoading, 
        posts, 
        setPosts, 
        page, 
        setPage, 
        totalPages, 
        setTotalPages, 
        handlePageChange, 
        fetchBlogPosts
    }; 

    return(
        <AppContext.Provider value={value}>
            {children }
        </AppContext.Provider>
    )

}

export default AppContextProvider; 