import { useEffect, useState } from "react"
import Main from "./components/main"
import { useSelector, useDispatch } from "react-redux"
import { getUsers } from "./actions/fetch"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import SignIn from "./components/signIn"

function App() {

  const array = useSelector(state => state.users)
  const dispatch = useDispatch()

    useEffect(() => {
        const fun = async () => {
            const fet = await fetch("./data.json")
            const data = await fet.json()
            dispatch(getUsers(data))
        }
        fun()
    }, [])

    // useEffect(() => {
    //   console.log(array)
    // }, [array])

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={ 
          <div>
            <Link to="/user">Sign In</Link>
            <Main />
          </div>
        }/>
        <Route path="/user" element={ <SignIn /> }/>
      </Routes>
    </Router>
  )
}

export default App
