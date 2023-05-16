const { useState } = require("react");

function Car() {
    const [car, SetCar] = useState({
        model: 'Bmw',
        year: 2023,
        name: 'faridHashimzada'
    });

    return (
        <>
            <h1>my car is {car.model}</h1>

        </>
    )
}


const UptadeCar = () => {
    setCar(UptadeMyCar => {
        return { ...uptadeMyCar, name: 'farid' }
    });
    return (
        <>
            <h1>mau car name is{car.name}</h1>
        </>
    )
}