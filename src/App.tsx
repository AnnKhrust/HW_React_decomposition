import { Container } from "./Components/Container/Container";
import { Header } from "./Components/Header/Header";
import { SearchBlock } from "./Components/SearchBlock/SearchBlock";
import { Banner } from "./Components/Banner/Banner";
import { InfoBlock } from "./Components/InfoBlock/InfoBlock";
import './App.css'

function App() {

  return (
    <>
      <Container>
        <Header />
        <SearchBlock/>
        <Banner img=""/>
        <InfoBlock/>
      </Container>
    </>
  )
}

export default App