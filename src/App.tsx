import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import FeatureSectionFruits from './components/FeatureSectionFruits'
import FeatureSectionBreakfast from './components/FeatureSectionBreakfast'
import BannerSection from './components/BannerSection'
import BlogSection from './components/BlogSection'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Category />
      <FeatureSectionFruits />
      <FeatureSectionBreakfast />
      <BannerSection/>
      <BlogSection/>
    </main>

  )
}

export default App
