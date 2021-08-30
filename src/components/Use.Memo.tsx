import React, {useCallback, useMemo, useState} from "react";

export const LikeUseCallBack = ()=> {
    console.log("LikeUseCallBack")
    const [books, setBooks] = useState(["love", "react", "js"])
    const [count, setCount] = useState<number>(0)

    const addBooks = () =>{
       const newArr =  ["CSS", ...books]
        setBooks(newArr)
    }
    const memoAddBooks = useMemo(()=>{
        return addBooks
    }, [books])
   /* const memoAddBooks = useCallback(()=>{
    }, [books])*/  //а можно с помощью useCallBack

    const addCounter=()=>{
        setCount(count+1)
    }
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={() => {addCounter()}}>Counter!</button>
            <Books addBooks={memoAddBooks} />
        </div>
    )
}
type BooksType={
    addBooks:() => void
  /*  books: string[]*/

}
let BooksSecret = (props: BooksType) =>{
    console.log("Books")
    return (
        <div>
            <button onClick={() => {props.addBooks()}}>Book</button>
            {/*{props.books.map((b, i)=><h3>{b}</h3>)}*/}
        </div>
    )
}
const Books = React.memo(BooksSecret)

