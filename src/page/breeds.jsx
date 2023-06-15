import axios from "axios";
import { useEffect, useState } from "react";
import PageContainer from "../components/pageContainer";

function Breeds() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://catfact.ninja/breeds?limit=98')
            .then((res) => {
                setData(res.data.data)
            })
    })
    return (
        <>
                <PageContainer/>
            {
                data.map(({ breed, country }) => {
                    return (
                        <>
                        <h1>{breed}</h1>
                        <h2>{country}</h2>
                        </>
                    )
                })
            }
        </>
    )

}

export default Breeds