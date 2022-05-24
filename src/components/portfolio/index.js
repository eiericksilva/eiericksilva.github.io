import * as P from "./styles";
import {motion} from 'framer-motion';
import {useState, useEffect, useRef} from 'react';
import images from '../../images';
import { slide } from './slide.css';

const Portifolio = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef()

  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])
  return (
    <P.Wrapper id="Projetos">
        <P.Header>
            <P.Title className="Title">Portfólio</P.Title>
            <P.SubTitle className="SubTitle">O QUE EU TENHO FEITO</P.SubTitle>
        </P.Header>
        <P.Container className="Projetos">
          <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
            <motion.div   className='inner-carousel' drag="x" dragConstraints={{ right:0, left: -width}} >
              {images.map((image)=>{
                return (
                  <motion.div className="item" key={image}>
                    <img src={image} alt=""/>
                  </motion.div>
                )  
              })}
            </motion.div>
          </motion.div>
        </P.Container>
    </P.Wrapper>
  )
}

export default Portifolio