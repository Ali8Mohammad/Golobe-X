import './FlightAccordion.css'
import { useState } from 'react'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const FlightAccordion = ({Header_Title , Header_Body , Header_Title2 ,Header_Body2 ,Header_More}) => {
    const [active, setActive] = useState(null)
    const ActivePanel = (panelId) => {
        setActive(panelId)
    }
    useEffect (() => {
        Aos.init({duration : 2000})
    }, [])
    return (
    <section className="Aya-Accordion" data-aos='fade-right'>
        <div className="Accordion-Header" style={{background : active ===1 ?  "#FF8500" : "#fff"}} >
            <div className="Header-Body">
                <p className='Header-Body-para1'>{Header_Title}</p>
                <p className='Header-Body-para2'>{Header_Body}</p>
            </div>
            <div className="Header-icon">
                <img onClick={() => ActivePanel(1)} src= {active===1 ? "./../src/assets/images/icon2.png" : "./../src/assets/images/circle.svg" } alt="iconActive" />
            </div>
        </div>
        <div className="Accordion-Header-Hiden" style={{background : active ===2 ? "#FF8500" : "#fff"}} >
            <div className="Header-Body-Hiden">
                <p className='Header-Body-Hiden-para1'>{Header_Title2}</p>
                <p className='Header-Body-Hiden-para2'>{Header_Body2}</p>
                <p className='Header-Body-Hiden-para3'>{Header_More}</p>
            </div>
            <div className="Header-icon">
                <img onClick={() => ActivePanel(2)} src= {active===2 ? "./../src/assets/images/icon2.png" : "./../src/assets/images/circle.svg" } alt="iconActive" />
            </div>
        </div>
    </section>
    )
}

export default FlightAccordion