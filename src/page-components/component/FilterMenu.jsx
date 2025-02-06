import { Button } from "react-bootstrap"

function FilterMenu (props) {
    return(
        <>
            <Button variant="primary mx-1">{props.filterBtn.toUpperCase()}</Button>
        </>
    )
}

export {FilterMenu}