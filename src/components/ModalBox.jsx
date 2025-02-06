import { useState } from "react"
function ModalBox(props, children){
    const [modal, setModal] = useState('')
    return(
        <>
            <button onClick={()=>setModal('open')}>{props.modalNo}</button>
            <div id="modalBox" className={modal}>
                <h4>{props.title}</h4>
                <p>{props.content}</p>
                <button onClick={()=>setModal('')}>Close</button>
            </div>
        </>
    )
}

export default ModalBox