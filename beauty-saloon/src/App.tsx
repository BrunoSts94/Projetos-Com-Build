import { Element } from 'react-scroll'
//css
import './App.css'
import './global.css'

//components
import { Header } from './assets/components/Header'
import { SectionPrincipal } from './assets/components/Sections/SectionPrincipal'
import { SectionServices } from './assets/components/Sections/sectionServices'
import { SectionGallery } from './assets/components/Sections/sectionGallery'
import { SectionFeedback } from './assets/components/Sections/SectionFeedback'

function App() {
  
  return (
    <div>
      
      <Header/>
      
      <Element name='inicio'>
        <SectionPrincipal/>
      </Element>
      
      <Element name='services'>
        <SectionServices/>
      </Element>

      <Element name='gallery'>
        <SectionGallery/>
      </Element>

      <SectionFeedback/>


    </div>
  )
}

export default App
