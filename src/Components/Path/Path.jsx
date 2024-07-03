import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Path.css'
import './../../../src/index.css'

    const Path = ({country , city , hotel_name }) => {
    return (
        <section className='Aya-path'>
            <div>
                <p className='Aya-path-p'>
                    <span className='Aya-path-span1'>{country}</span> 
                    <FontAwesomeIcon icon={faChevronRight} className='Aya-path-icon1'/> 
                    <span className='Aya-path-span2'>{city}</span>
                    <FontAwesomeIcon icon={faChevronRight} className='Aya-path-icon2'/> 
                <span className='Aya-path-span3'>{hotel_name}</span>
                </p>
            </div>
        </section>
    )
    }

export default Path