import React, { FC } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Cart from '@/pages/Cart'
import Markdown from '@/pages/Markdown'
import Pagination from '@/pages/Pagination'
import DarkMode from '@/pages/DarkMode'
import HackerNews from '@/pages/HackerNews'
import Quiz from '@/pages/Quiz'
import Demo from '@/pages/Demo'
import Solid from '@/pages/Solid'
import '@/App.less'

const App: FC = () => (
  <div className="App">
    <aside className="aside-wrap">
      <ul>
        <li>
          <Link to="/">Cart</Link>
        </li>
        <li>
          <Link to="/markdown">Markdown</Link>
        </li>
        <li>
          <Link to="/pagination">Pagination</Link>
        </li>
        <li>
          <Link to="/darkmode">DarkMode</Link>
        </li>
        <li>
          <Link to="/hackernews">HackerNews</Link>
        </li>
        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
        <li>
          <Link to="/demo">Demo</Link>
        </li>
        <li>
          <Link to="/solid">SOLID</Link>
        </li>
      </ul>
    </aside>
    <Routes>
      <Route path="/" element={<Cart />} />
      <Route path="/markdown" element={<Markdown />} />
      <Route path="/pagination" element={<Pagination />} />
      <Route path="/darkmode" element={<DarkMode />} />
      <Route path="/hackernews" element={<HackerNews />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/solid" element={<Solid />} />
    </Routes>
  </div>
)

export default App
