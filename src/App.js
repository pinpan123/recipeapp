import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import  {GiKnifeFork} from 'react-icons/gi';
function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <Nav>
          <GiKnifeFork/>
            
<Logo to={"/"}>recipesbypranjali</Logo> 

          </Nav>
<Search />
     <Category />
     <Pages />
     </BrowserRouter>
    </div>
  );
}

const   Logo=styled(Link)`
text-decoration :none;
font-size:3rem;
font-weight:500;
font-family: 'Jomhuria', cursive;`

const Nav=styled.div`
padding: 4rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;
svg{
  font-size: 3rem;
  padding :0.2rem;
}`


export default App;
 