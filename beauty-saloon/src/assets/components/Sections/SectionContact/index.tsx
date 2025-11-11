import './style.css'

//components
import { Button } from '../../Buttons/ButtonDefault'
import { CardContactInfo } from '../../Cards/CardContactInfo'

//images
import locationIcon from '../../../img/location-icon.svg'
import phoneIcon from '../../../img/phone-icon.svg'
import mailIcon from '../../../img/email-icon.svg'
import clockIcon from '../../../img/clock-icon.svg'

export function SectionContact(){
    return(
        <section className='section-contact-principal'>
            <div className='container-texts-contact'>
                <h2>Visite-nos hoje mesmo</h2>
                <p>Agende sua consulta e experimente a diferença do Thai Estudio. Estamos aqui para ajudar você a ter a melhor aparência e se sentir bem. </p>
            </div>

            <div className='container-location-contact'>
                <div className='contact-infos-itens'>
                    <div className='container-cards-contact-infos'>
                        <h3>Entre em contato</h3>
                        <CardContactInfo tittle='Localização' description='123 Beauty Avenue, Downtown District' imgInfo={ locationIcon } />
                        <CardContactInfo tittle='Telefone' description='(54) 9 91234567' imgInfo={ phoneIcon } />
                        <CardContactInfo tittle='Email' description='beauty@email.com' imgInfo={ mailIcon } />
                        <CardContactInfo tittle='Horario de atendimento' description='Seg-Sex: 09Hrs-18Hrs, Sáb: 10Hrs-12Hrs' imgInfo={ clockIcon } />
                    </div>
                    <Button titulo='Agende seu Horário'/>
                </div>

                <div className='container-map'>
                    <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.889206298345!2d-51.18219075471355!3d-29.167936982516036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ea32cd03da18f%3A0xfa106679c7d10a71!2sAv.%20J%C3%BAlio%20de%20Castilhos%2C%201802%20-%20Centro%2C%20Caxias%20do%20Sul%20-%20RS%2C%2095010-002!5e0!3m2!1spt-BR!2sbr!4v1762874662149!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="420"
                    style={{ border: 0, display: 'block' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
                </div>
            </div>
        </section>
    )
}