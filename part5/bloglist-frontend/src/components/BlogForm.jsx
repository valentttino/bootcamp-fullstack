const BlogForm = ({
    addBlog,
    newBlogTitle,
    handleTitleChange,
    newBlogAuthor,
    handleAuthorChange,
    newBlogUrl,
    handleUrlChange
    }) => {
    return(
        <div>
            <h2>create a new blog</h2>
            <form onSubmit={addBlog}>
                <div>
                    title
                    <input
                    value={newBlogTitle}
                    onChange={handleTitleChange}
                    />
                </div>
                <div>
                    author
                    <input
                    value={newBlogAuthor}
                    onChange={handleAuthorChange}
                    />
                </div>
                <div>
                    url
                    <input
                    value={newBlogUrl}
                    onChange={handleUrlChange}
                    />
                </div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default BlogForm