import { Header } from "./page-components/Header"
import { HeroBanner } from "./page-components/HeroBanner"
import { PageBody } from "./page-components/PageBody"
import { Footer } from "./page-components/Footer"

export default function Page () {
    return(
        <>
            <Header logo="React project"/>
            <HeroBanner/>
            <PageBody />
            <Footer /> 
        </>
    )
}