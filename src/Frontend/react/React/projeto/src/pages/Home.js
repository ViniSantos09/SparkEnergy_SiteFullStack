import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Main from "../components/Main"

const HomeContainer = styled.body`
    margin: 0;
    padding: 0;
`

function Home(){
    return (
    <HomeContainer>
        <Header/> 
        <Main/>
        <Footer/>
    </HomeContainer>  
    )
}

export default Home