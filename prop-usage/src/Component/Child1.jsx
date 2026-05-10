// const Child = ({value, send}) => {

//     let childData = "Ahmed childeData"

//     return(
//         <>
//             <h1>Hello {value}</h1>
//             <button onClick={() => send(childData)}>getChildData</button>
//         </>
//     );
// }

// export default Child



// const Child1 = ({name, sendData}) => {

//     let childData = "Raheel This is child data"

//     return(
//         <>
//             <h1>Hello {name} </h1>
//             <button onClick={() => sendData(childData)}>getData</button>
//         </>
//     );
// }

// export default Child1 



const Child2 = ({sendData}) => {

    const childData = "This is child data";

    return(
        <>
            <h1>Hello</h1>
            <button onClick={() => sendData(childData)}>getChildData</button>
        </>
    )
}

export default Child2