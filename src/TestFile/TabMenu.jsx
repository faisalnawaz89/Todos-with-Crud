import React, { useState } from 'react'
import { AccordionData } from './AccordionData'

const TabMenu = () => {

const [tab, setTab] = useState(AccordionData[0].id)

  return (
    <>
        <ul className='tabmenu'>
            {AccordionData.map((tabItem, index)=> (
                <li onClick={()=>setTab(tabItem.id)}  className={`${tabItem.id === tab ? 'selected': ''} `} key={index}>{tabItem.title}</li>
            ))}
        </ul>
        <div className="tabcontent">
            {AccordionData.map((tabContent, index)=> (
                <div key={index} className={`tab-inner ${tab === tabContent.id ? "active" : ""}`}>
                    <h4>{tabContent.title}</h4>
                    <p>{tabContent.content}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default TabMenu