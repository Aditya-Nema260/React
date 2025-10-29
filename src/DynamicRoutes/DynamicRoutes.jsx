import {useParams} from "react-router"

const DynamicRoutes = () => {

  let obj = useParams()
  console.log(obj);
  
  return (
    <h1>Hello {obj.name} age is {obj.age}</h1>
  )
}

export default DynamicRoutes