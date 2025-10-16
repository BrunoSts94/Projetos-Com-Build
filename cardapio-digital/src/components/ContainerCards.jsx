import Card from './Card'
import { pratosPrincipais, sobremesas, bebidas } from '../assets/cardapio.js'

const ContainerCards = ({numCategoriaSelecionada}) =>{
    const itensCategoria = [pratosPrincipais, sobremesas, bebidas]
    const categoriaSelecionada = itensCategoria[numCategoriaSelecionada]

    return (
        <div className="container-cards">
            {categoriaSelecionada.map((item)=> (
                <Card
                    titulo={item.nome}
                    descricao = {item.descricao}
                    preco = {item.preco}
                    imagem = {item.imagem}
            />
            ))}
      </div>
    )
}

export default ContainerCards