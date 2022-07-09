import React from "react";
import SearchForm from "./components/SearchForm";
import Buttons from "./components/Buttons";
import Stories from "./components/Stories";
import { AppProvider } from './store/context';

function HackerNewsApp() {
  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
    </>
  );
}

function HackerNews() {
  return (
    <AppProvider>
      <HackerNewsApp />
    </AppProvider>
  );
}

export default HackerNews;
