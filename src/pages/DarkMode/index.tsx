import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './components/Article'

const getStorageTheme = () => {
  let theme: any = 'light-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

function DarkMode() {
  const [theme, setTheme] = useState(getStorageTheme())

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <main className="dark-mode">
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map(item => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </main>
  )
}

export default DarkMode
