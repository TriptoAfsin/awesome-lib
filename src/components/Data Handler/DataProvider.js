import {useEffect, useState} from 'react'
import axios from 'axios'


//kinda similar article: https://dev.to/rikurouvila/clean-and-reusable-data-fetching-in-react-components-165
//more on axios: https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/

function DataProvider() {

    console.log("DataProvider Called")
    const[dbData, setDbData] = useState(null)
    //const [loading, setLoading] = useState(true)
    const url = "https://raw.githubusercontent.com/TriptoAfsin/API-Host/main/usefulJSDB.json"

     //pulling data 

     useEffect(
        () => {
            axios.get(url)
        .then(res => {
        //setLoading(false);
        setDbData(res.data);
        console.log("Axios called");
        return dbData;
    }).catch(err => console.log(err));

        }, [url]
)
    return dbData;
}

export default DataProvider
