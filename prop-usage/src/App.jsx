import Child from "./Component/Child1"
import Child1 from "./Component/Child1"
import Child2 from "./Component/Child1"

function App() {
  
  // const getChildData = (childData) => {
  //   console.log(childData)
  // }


  // return(
  //     <Child1 value="Raheel" send={getChildData}/>

  // )

  const data = (childData) => {
      console.log("child",childData)
  }

return (
  <>
    <Child2 sendData={data} />
  </>
)
}

export default App
 