const { test, after, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const assert = require('assert')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

const initialBlogs = [
    {
      title: 'First Blog',
      author: 'John Doe',
      url: 'http://example.com/first-blog',
      likes: 5
    },
    {
      title: 'Second Blog',
      author: 'Jane Doe',
      url: 'http://example.com/second-blog',
      likes: 10
    }
  ]

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(initialBlogs)
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('verify property of unique identifier', async () => {
    const response = await api.get('/api/blogs')
    const blogs = response.body
    assert(blogs.length > 0, 'no blogs found')
    const blogId = blogs[0]._id

    const blogResponse = await api.get(`/api/blogs/_${blogId}`)
    assert.strictEqual(response.body._id, blogId)
})

test('verify http post requests', async () =>{
    const newBlog ={
        title: 'This blog was writted by Supertest :D',
        author: 'supertest',
        url: 'supertest-article.blogspot.com',
        likes: 1992
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    const titles = response.body.map (t => t.title)

    assert.strictEqual(response.body.length, initialBlogs.length + 1)

    assert(titles.includes('This blog was writted by Supertest :D'))
})

test('testing delete by id function', async () =>{
    const response = await api.get('/api/blogs')
    const blogs = response.body
    assert(blogs.length > 0, 'no blogs to delete found')
    const idBlogToDelete = blogs[0].id

    await api.delete(`/api/blogs/${idBlogToDelete}`).expect(204)
})

test('making changes in a blog by id', async () =>{
    const response = await api.get('/api/blogs')
    const blogs = response.body
    assert(blogs.length > 0, 'no blogs to change found')
    const idBlogToChange = blogs[0].id

    const blog = {
        "title": "This title was changed in Supertest",
        "author": "TheProgrammer",
        "url": "falseurl.dev",
        "likes": 1974
    }

    await api
        .put(`/api/blogs/${idBlogToChange}`)
        .send(blog)
        .expect(200)
        .expect('Content-Type', /application\/json/)
    
    const responseAfterChanges = await api.get('/api/blogs')
    const titles = responseAfterChanges.body.map (t => t.title)
    assert(titles.includes('This title was changed in Supertest'))  
})

test('change the likes in a blog by id', async() =>{
    const response = await api.get('/api/blogs')
    const blogs = response.body
    assert(blogs.length > 0, 'no blogs to change found')
    const idBlogToChange = blogs[0].id

    const blog = {
        "likes": 666
    }

    await api
        .put(`/api/blogs/${idBlogToChange}`)
        .send(blog)
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

after(async () => {
  await mongoose.connection.close()
})