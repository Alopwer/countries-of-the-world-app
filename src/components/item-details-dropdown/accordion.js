import React, { useState, useRef } from 'react';
import './accordion.css';
import '../item-details/item-details.css';
import Chevron from '../svg/chevron';

const Accordion = (props) => {
    const [setActive, setActiveState] = useState('')
    const [setHeight, setHeightState] = useState('0px')
    const [setRotate, setRotateState] = useState('accordion-icon')

    const content = useRef(null)

    const toggleAccordion = () => {
        setActiveState(setActive === '' ? 'active' : '')
        setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`)
        setRotateState(setActive === 'active' ? 'accordion-icon' : 'accordion-icon rotate')
    }

    return (
        <div className='accordion-section'>
            <div className={`item-info-row accordion ${setActive}`} onClick={toggleAccordion}>
                <p className='accordion-title'>{props.title}</p>
                <Chevron className={`${setRotate}`} width={10} fill={'#fff'} />
            </div>
            <div ref={content} style={{maxHeight: `${setHeight}`}} className='accordion-content'>
                <Content value={props.value}/>
            </div>
        </div>
    )
}

const Content = ({ value }) => {
    const items = value.map(item => Object.entries(item).map(item => {
        if (item[0] === 'name' || /^\w{2}$/.test(item[0])) {
            return (
                <div className='accordion-item item-info-row' key={item[0]}>
                    <p className='item-info-name'>{item[0] === 'name' ? '' : item[0]}</p>
                    <p className='item-info-value'>{item[1]}</p>
                </div>
            )
        }
    }))

    return (
        <React.Fragment>
            {items}
        </React.Fragment>
    )
}

export default Accordion;