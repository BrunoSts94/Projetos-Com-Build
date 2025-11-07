import { Element } from 'react-scroll'
//css
import './global.css'

//components
import { Header } from './assets/components/Header'
import { SectionPrincipal } from './assets/components/Sections/SectionPrincipal'
import { SectionServices } from './assets/components/Sections/sectionServices'
import { SectionGallery } from './assets/components/Sections/sectionGallery'
import { SectionFeedback } from './assets/components/Sections/SectionFeedback'
import { SectionAbout } from './assets/components/Sections/SectionAbout'
import { SectionContact } from './assets/components/Sections/SectionContact'
import { Baseboard } from './assets/components/Baseboard'

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

      <Element name='about'>
        <SectionAbout/>
      </Element>

      <Element name='contact'>
        <SectionContact/>
      </Element>

      <Baseboard/>


    </div>
  )
}

export default App
