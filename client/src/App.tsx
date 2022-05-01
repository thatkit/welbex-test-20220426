import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BlogNote } from './components/BlogNote';

function App() {
  const mockupBlogNote = {
    title: 'Nice title',
    date: 'Today!',
    message: 'An even nicer message',
    media: [
      {
        id: '1',
        fileName: 'file1'
      },
      {
        id: '2',
        fileName: 'file2'
      },
      {
        id: '3',
        fileName: 'file3'
      },
    ]
  };
  return (
    <div className="App">
      <BlogNote data={mockupBlogNote} />
    </div>
  );
}

export default App;
