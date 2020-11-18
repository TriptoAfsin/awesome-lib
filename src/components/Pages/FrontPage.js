import React, {useState, useEffect} from 'react'
import DataProvider from '../Data Handler/DataProvider'
import './loader.css'
import { Link } from 'react-router-dom'


function FrontPage() {

    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('')
    const[match, setMatch] = useState('')

    

    const repoData = DataProvider()
    console.log(repoData)

    useEffect(
        () => {
            if(repoData !== null){
                setLoading(false)
                console.log("setLoading false now")
                searchQuery(repoData)
                console.log(query)
            }
        }, [repoData, query]
    )


    //regex
    const matchList = document.getElementById("card-container");

    const searchQuery = (libs) => {
        let matches = libs.filter(lib =>{
            const regex = new RegExp(`${query}`, 'gi'); // ^: will search for which resuls starts with , gi:case insensitive search,RegExp: Regular Expression
            return lib.name.match(regex) || lib.about.match(regex) || lib.terms.match(regex)
        });

        
        if(query.length > 0){
            outputHtml(matches);
            setMatch(matches.length)
            console.log(matches)
        }   
    }

    /*
    //search Handler
    const  handleSearch = (e) => {
        setQuery(e.target.value)
        console.log("handleSearch Called")
        let libs = repoData;
        searchQuery(libs)
        console.log(query)
    }
    */


    const outputHtml = matches =>{
        if(matches.length > 0){
            const html = matches.map(match => `
            <div class="card greyGradient floatIn" key={element.link}>
                    <p class="card-title">${match.name}</p>
                    <p class="card-txt">${match.about}</p>
                    <a class="card-btn pad2 right blue" href=${match.link} target="_blank">Learn more...</a>
                </div>
            `).join('');

        console.log(html);
        matchList.innerHTML = html;
        }
        else {
            try {
                matchList.innerHTML = `<h1>No results</h1>`;
            } catch (error) {
                return
            } 
        }
    };


    if(loading){
        return (
            <React.Fragment>
                <div className="center-self mt4">
                    <a><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></a>
                </div>
               
            </React.Fragment>
        )
    }
    else{
        const colorArr = ['greyGradient', 'greyGradient2', 'greyGradient3', 'greyGradient4']
        return(
            <React.Fragment>
               <div>
                   <div className="center-self mb4 mt2 pad2">
                        <input className="rounded shadow txt-lg pad10" placeholder="Search..." onChange={e => setQuery(e.target.value)} value={query}></input>
                   </div>
                    <div className="card-container" id="card-container">
                        {
                            repoData.map(element => {
                                return (
  
                                    <div className={"card floatIn "+colorArr[Math.floor(Math.random()*colorArr.length)]} key={element.link}>
                                        <p className="card-title">{element.name}</p>
                                        <p className="card-txt">{element.about}</p>
                                        <a className="card-btn pad2 right blue" href={element.link} target="_blank">Learn more...</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> 
        </React.Fragment>
        )
    }
}

export default FrontPage
