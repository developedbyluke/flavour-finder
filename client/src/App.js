import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import BrowseRecipes from './components/BrowseRecipes'
import SingleRecipe from './components/SingleRecipe'
import Blog from './components/Blog'
import SingleBlog from './components/SingleBlog'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import RecipeForm from './components/RecipeForm'
import Profile from './components/Profile'
import Filter from './components/Filter.js'
import Featured from './components/FeaturedRecipes'

export default function App() {
  return (
    <BrowserRouter>
      {/* Show Header on all pages */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<BrowseRecipes />} />
        <Route path='/recipes/:id' element={<SingleRecipe />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/recipes/type/:type' element={<Filter />} />
        <Route path='/blogs/:id' element={<SingleBlog />} />
        <Route path='/user/:addedBy/create' element={<RecipeForm />} />
        <Route path='/user/:addedBy/:id' element={<RecipeForm />} />
        <Route path='/user/:addedBy' element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Show Footer on all pages */}
      <Footer />
    </BrowserRouter>
  )
}
