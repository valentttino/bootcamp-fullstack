import { useState } from "react"

const BlogForm = ({ createBlog }) => {
    const [newBlogTitle, setNewBlogTitle] = useState('')
    const [newBlogAuthor, setNewBlogAuthor] = useState('')
    const [newBlogUrl, setNewBlogUrl] = useState('')

    const addBlog = (event) => {
        event.preventDefault()
        createBlog({
            title: newBlogTitle,
            author: newBlogAuthor,
            url: newBlogUrl,
            likes: 0
        })

        setNewBlogTitle('')
        setNewBlogUrl('')
        setNewBlogAuthor('')
    }
    return(
        <div>
            <h2>create a new blog</h2>

            <form onSubmit={addBlog}>
                <div>
                    title
                    <input
                    value={newBlogTitle}
                    onChange={event => setNewBlogTitle(event.target.value)}
                    />
                </div>
                <div>
                    author
                    <input
                    value={newBlogAuthor}
                    onChange={event => setNewBlogAuthor(event.target.value)}
                    />
                </div>
                <div>
                    url
                    <input
                    value={newBlogUrl}
                    onChange={event => setNewBlogUrl(event.target.value)}
                    />
                </div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default BlogForm