import React, {useMemo, useState} from 'react';


const Selects = () => {
    console.log("selects!!!")
    const [city, setCity] = useState([
        {id: "R", cityName: "Moscow"},
        {id: "R", cityName: "Volgograd"},
        {id: "R", cityName: "Vladimir"},
        {id: "B", cityName: "Minsk"},
        {id: "B", cityName: "Mogilev"},
        {id: "B", cityName: "Brest"},
    ])
    const [counter, setCounter] = useState(0)


    const belarusCity = useMemo(() => {
        return city.filter(c => c.id === "B")
    }, [city])

    const russianCity = useMemo(() => {
        return city.filter(c => c.id === "R")
    }, [city])


    const firstLetter = useMemo(() =>{
        return city.filter(c => c.cityName === "Vladimir")
    }, [city])


    return (
        <div>
            <BelarusCity city={belarusCity}/>
            <RussianCity city={russianCity}/>
            <FirstLetter city={firstLetter}/>
            <Counter setCounter={setCounter} counter={counter}/>
        </div>
    )
}

type CityType = {
    id: string
    cityName: string
}
const BelarusCities = (props: { city: Array<CityType> }) => {
    console.log("BelarusCity")
    return (
        <select>
            {props.city.map((b, i) => <option key={i}>{b.cityName}</option>)}
        </select>
    )
}
const BelarusCity=React.memo(BelarusCities)

const RussianCities = (props: { city: Array<{ id: string, cityName: string }> }) => {
    console.log("Russian")
    return (
        <div>
            <select>
                {props.city.map((r, i) => <option key={i}>{r.cityName}</option>)}
            </select>
        </div>
    )
}
const RussianCity=React.memo(RussianCities)

const FirstLetters = (props: { city: Array<CityType> }) => {
    console.log("FirstLetter")
    return (
        <div>
            <select>
                {props.city.map((f, i) => <option key={i}>{f.cityName}</option>)}
            </select>
        </div>
    )
}
const FirstLetter=React.memo(FirstLetters)

const Counters = (props: any) => {
        console.log("Counter")

        return (
            <div>
                <h2>{props.counter}</h2>
                <button onClick={() => {
                    props.setCounter(props.counter + 1)
                }}>Добавить
                </button>
            </div>
        )
    }
    const Counter =React.memo(Counters)



export default Selects;