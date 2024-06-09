import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog.jsx'

test('render blog title?', () => {
  const blog ={
    title:'Testing blog component with react-testing-library',
    author:'reac-testing-library',
    url:'tests.react.com'
  }

  render(<Blog blog={blog} />)

  const element = screen.getByText('Testing blog component with react-testing-library')
  expect(element).toBeDefined()
})

test('render url or likes?', () => {
  const blog ={
    title:'Testing blog component with react-testing-library',
    author:'reac-testing-library',
    url:'tests.react.com',
    likes: 1100
  }

  render(<Blog blog={blog} />)

  const urlElement = screen.queryByText('tests.react.com')
  expect(urlElement).not.toBeInTheDocument()

  const likesElement = screen.queryByText('likes 1100')
  expect(likesElement).not.toBeInTheDocument()
})

/* test('clicking view button for show details', async () => {
  const blog ={
    title:'Testing blog component with react-testing-library',
    author:'reac-testing-library',
    url:'tests.react.com',
    likes: 1100
  }

  render(<Blog blog={blog}/>)

  const button = screen.getByText('view')
  await userEvent.click(button)

  expect(screen.getByText('tests.react.com')).toBeInTheDocument()
  expect(screen.getByText('likes 1100')).toBeInTheDocument()
}) */