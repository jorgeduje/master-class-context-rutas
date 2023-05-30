import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Home = () => {

 const {user, token} = useContext(AuthContext)

 console.log("user: ", user)
 console.log("token: ", token)

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home