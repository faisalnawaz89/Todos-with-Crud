import React, { useState } from 'react'
import { AccordionData } from '../TestFile/AccordionData'

const Accordion = () => {

  const [accordion, setAccordion] = useState(AccordionData[0].id)
    console.log(accordion);
    
  return (
    <div className='accordion'>
        {
            AccordionData.map((item, index)=>(
                <div key={index}>
                    <h1 onClick={()=>setAccordion(item.id)}>{item.title} {accordion === item.id ? "-" : "+"}</h1>
                    <article className={`${accordion === item.id ? "open" : "close"}`}>
                        <h5>{item.title}</h5>
                        <p>{item.content}</p>
                    </article>
                </div>
            ))
        }
    </div>
  )
}

export default Accordion