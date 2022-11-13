import React, {useState} from 'react';
import ItemList from "./ItemList";
import DietList from "./DietList";

function SearchableList({searchType, hideFunc, showFunc}) {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    //getting data
    const [fetched, setFetched] = useState(false)
    const [data, setData] = useState([]);
    if (!fetched){
        setFetched(true)
        switch (searchType){
            case "Clients":
            {fetch('http://localhost:8000/clients' ).then(res => res.json()).then(json => setData(json))}
                // console.log(data)
                break
            case "Diets":
            //{fetch('http://localhost:8000/diets' ).then(res => res.json()).then(json => setData(json))}
                // GET diet request
                break
            case "Recipes":
            //{fetch('http://localhost:8000/recipes' ).then(res => res.json()).then(json => setData(json))}
                // GET recipe request
                break
        }
    }


    return (
        <div>
            <input placeholder={"Search " + searchType} onChange={handleChange} value={searchInput}/>
            {searchType === "Clients" && <ItemList data={data} filter={searchInput} hideFunc={hideFunc} showFunc={showFunc}></ItemList>}
            {searchType === "Diets" && <DietList type={searchType} filter={searchInput} hideFunc={hideFunc} showFunc={showFunc}></DietList>}
        </div>
    );
}




export default SearchableList;