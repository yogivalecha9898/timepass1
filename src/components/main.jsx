import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

const Main = () => {

    const postArray = useSelector(state => state.users)
    let[post, setPost] = useState([])

    useEffect(() => {
        let cur = []
        postArray.forEach(options => {
            options.posts.forEach(values => {
                let obj = {id: values.id, owner: options.name, value: values}
                cur.push(obj)
            })
        })
        console.log(cur)
        setPost(cur)
    }, [postArray])

    useEffect(() => {
        console.log(post)
    }, [post])

    const handle = (type, id) => {
        for(let i = 0; i < post.length; i++) {
            if(id === post[i].id) {
                if(type === "like") {
                    let cur = post
                    cur[i].value.Likes++
                    setPost(cur)
                } else {
                    let cur = post
                    cur[i].value.Dislikes++
                    setPost(cur)
                }
            }
        }
    }

    return (
        <div>
            {post.map((options, i) => {
                return (
                    <div key={i}>
                        <h2>By: {options.owner}</h2>
                        <h1>Title: {options.value.title}</h1>
                        <p>Description: {options.value.discription}</p>
                        <section>
                            <button>Like</button>{options.value.Likes} 
                            <button>Dislike</button>{options.value.Dislikes}
                        </section>
                    </div>
                )
            })}
        </div>
    )
}

export default Main