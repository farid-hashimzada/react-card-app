import axios from "axios";
import { useEffect, useState } from "react";

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