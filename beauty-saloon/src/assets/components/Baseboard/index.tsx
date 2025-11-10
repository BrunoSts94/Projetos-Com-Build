import './style.css'

export function Baseboard(){
    return(
        <footer>
            <div className='container-footer-principal'>
                <div className='first-footer-container'>
                    <div className='sessao-nome'>
                        <h2>Thai Estudio</h2>
                        <p>BEAUTY SALON</p>
                    </div>
                    <p>Seu destino privilegiado para tratamentos de beleza avançados. Experimente a combinação perfeita de luxo, experiência e tecnologia de ponta.</p>
                    <div className='container-social'>
                        <button></button>
                    </div>
                </div>

                <div className='second-footer-container'>
                    <h4>Serviços</h4>
                    <ul>
                        <li><a href="#">Alisamento de cabelo a laser</a></li>
                        <li><a href="#">Design de Sobrancelhas</a></li>
                        <li><a href="#">Cuidados posteriores</a></li>
                    </ul>
                </div>

                <div className='third-footer-container'>
                    <h4>Contato</h4>
                    <ul>
                        <li><a href="#">123 Beauty Avenida, 1234</a></li>
                        <li><a href="#">Centro</a></li>
                        <li><a href="#">+55 (54) 123-4567</a></li>
                        <li><a href="#">hello@thaiestudio.com</a></li>
                    </ul>
                </div>
            </div>

            <div className='footer-final-texts'>
                <p>© 2025 Thai Estudio. All rights reserved. Designed with love for Bruno Santos.</p>
            </div>
        </footer>
    )
}