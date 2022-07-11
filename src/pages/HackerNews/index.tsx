import React from 'react'
import SearchForm from './components/SearchForm'
import Buttons from './components/Buttons'
import Stories from './components/Stories'
import { AppProvider } from './store/context'
import './index.less'

function HackerNewsApp() {
  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
    </>
  )
}

function HackerNews() {
  return (
    <div className="hackernews-wrapper">
      <AppProvider>
        <HackerNewsApp />
      </AppProvider>
    </div>
  )
}

export default HackerNews
