import styled from "styled-components"
import About from "./About"
import Services from "./Services"
import TypesEnergy from "./TypesEnergy"
import Ongs from "./Ongs"


const MainContainer = styled.main`
    height: 100vh;  
`


function Main() {
    return (
        <main>
            <MainContainer>
                <About/>
                <Services/>
                <TypesEnergy/>
                <Ongs/>
            </MainContainer>
        </main>
        
    )
}

export default Main