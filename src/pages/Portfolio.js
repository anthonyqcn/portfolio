import React, {useState, useEffect} from 'react'
import { Transition } from 'react-transition-group';

const duration = 1000;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: `scale(0,0) translate(0,1200px)`,
}

const transitionStyles = {
  entering: { transform: `scale(1,1) translate(0,0px)` },
  entered:  { transform: `scale(1,1) translate(0,0px)` },
  exiting:  { transform: `scale(0,0) translate(0,1200px)` },
  exited:  { transform: `scale(0,0) translate(0,1200px)` },
};

function Portfolio(){
    const [inProp, setInProp] = useState(false)
    useEffect(()=>{
        setInProp(true)
    },[])
    return <div className="page">
        <Transition appear in={inProp} timeout={duration}>
            {state => (
            <div style={{...defaultStyle, ...transitionStyles[state]}}>
                <h1>Portfolio!!!!!!</h1>
            </div>
            )}
        </Transition>
    </div>
}

export default Portfolio