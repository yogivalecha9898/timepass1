import { useState } from "react"
import { useSelector } from "react-redux"

const SignIn = () => {

    const postArray = useSelector(state => state.users)
    const[log, setLog] = useState(false)
    const[email, setEmail] = useState("")
    const[pass, setPass] = useState("")
    const[arr, setArr] = useState([])
    const[user, setUser] = useState("")

    const handleSubmit = e => {
        e.preventDefault()    
        if(email === "s@s.com" && pass === "1234") {
            setLog(true)
            for(let i = 0; i < postArray.length; i++) {
                if(postArray[i].email === email && postArray[i].password === pass) {
                    setUser(postArray[i].name)
                    setArr(postArray[i].posts)
                }
            }
        } else if(email === "y@y.com" && pass === "1234") {
            setLog(true)
            for(let i = 0; i < postArray.length; i++) {
                if(postArray[i].email === email && postArray[i].password === pass) {
                    setUser(postArray[i].name)
                    setArr(postArray[i].posts)
                }
            }
        }
    }

    const handleDel = id => {
        let cur = arr.filter(options => options.id !== id)
        console.log(cur)
        setArr(cur)
    }

    return (
        <div>
            {
                !log ? 
                <form onSubmit={handleSubmit}>
                    <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email"/>
                    <input onChange={e => setPass(e.target.value)} type="text" placeholder="Password"/>
                    <input type="submit" value="Submit"/>
                </form>
                :
                <div>
                    {arr.map((options, i) => {
                        return (
                            <div key={i}>
                                <h1>Title: {options.title}</h1>
                                <p>Description: {options.discription}</p>
                                <section>
                                    <button>Like</button>{options.Likes} 
                                    <button>Dislike</button>{options.Dislikes}
                                    <button onClick={() => handleDel(options.id)}>Delete</button>
                                    <button>Add</button>
                                </section>
                            </div>
                        )
                    })}
                </div> 
            }
        </div>
    )
}

export default SignIn