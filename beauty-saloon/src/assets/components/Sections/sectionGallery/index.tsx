import './style.css'
import './styleMobile.css'
import { useState } from 'react'

//Components
import { ButtonGallery } from '../../Buttons/ButtonGallery'
import { CardGallery } from '../../Cards/CardGallery'

//Imagens
import  ImageService1  from '../../../img/service1.jpeg'
import  Img2  from '../../../img/img2.jpeg'
import  Img3  from '../../../img/img3.jpg'
import  Img4  from '../../../img/img4.jpg'

type Categoria = 'todos' | 'alisamento' | 'sobrancelhas'


export function SectionGallery(){

    // 1) estado que guarda a categoria selecionada (inicial = 'todos')
    const [categoria, setCategoria] = useState<Categoria>('todos')

     // 2) dados: para cada categoria, um array de pares before/after
    const galleryData: Record<Categoria, { before: string; after: string }[]> = {
        todos: [
            { before: ImageService1, after: Img2 },
            { before: ImageService1, after: Img3 },
            { before: Img3, after: Img2 },
            { before: Img2, after: Img4 },
            { before: Img4, after: Img3 },
        ],
        alisamento: [
            { before: Img3, after: Img2 },
            { before: Img4, after: Img2 },
            { before: Img3, after: Img4 },
            { before: Img2, after: Img4 },
            { before: Img4, after: Img3 },
        // outros pares só de alisamento...
        ],
        sobrancelhas: [
            { before: Img3, after: ImageService1 },
            { before: Img2, after: ImageService1 },
        // outros pares só de sobrancelhas...
    ],
  }

   // 3) obtem os cards que vamos renderizar com base no estado
  const itemsToShow = galleryData[categoria]

    return(
        <section className='section-gallery'>

            <div className='container-infos-gallery'>
                <h2>Transformações das clientes</h2>
                <p>Veja os resultados incríveis que nossas clientes tiveram com nossos tratamentos experts</p>
                <div className='container-buttons-gallery'>
                    <ButtonGallery 
                    className='btn-gallery-alt'
                    titulo='Todos os procedimentos'
                    isActive={ categoria === 'todos' }
                    onClick={() => setCategoria('todos')}/>

                    <ButtonGallery 
                    className='btn-gallery-alt'
                    titulo='Alisamento a Laser'
                    isActive={ categoria === 'alisamento' }
                    onClick={() => setCategoria('alisamento')}/>

                    <ButtonGallery 
                    className='btn-gallery-alt'
                    titulo='Design de Sobrancelhas'
                    isActive={ categoria === 'sobrancelhas' }
                    onClick={() => setCategoria('sobrancelhas')}/>
                </div>
            </div>

            <div className='container-section-cards-gallery'>
                {itemsToShow.map((item, idx) => (
                    <CardGallery
                    className='card-gallery'
                    key={idx}
                    beforeImg={item.before}
                    afterImg={item.after}
                    />
                ))}
            </div>
        </section>
    )
}