import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';


function Popular() {
const [popular, setPopular] = useState([]);
useEffect(() => {
   getPopular();
},[]);//info in array form

  const getPopular = async () => {

    const check=localStorage.getItem('popular');

    if(check){
     setPopular(JSON.parse(check));
    }
    else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9` );
   
    const data = await api.json();
//if storage is not empty this parsing process will be done,if empty-set it and fetch api
    localStorage.setItem('popular', JSON.stringify(data.recipes));//getitng recipes as string and then parsing them to arrays. this is doen so that the limit on api usage can be in control and console never gets locke dout
    setPopular(data.recipes) 
console.log(data.recipes);
}
    //backtick not single quote!!!!!
    

 };
  return (
  <div>   
          <Wrapper>
            <h3>Hot Picks</h3>
            <Splide 
            options={{
              perPage:4,
              arrows: false,
              pagination:false,
              drag:"free",
              gap:"5rem",
            }}
            >
            {popular.map((recipe) => { 
          return(
            <SplideSlide key={recipe.id}>
            <Card>
            <Link to={'/recipe/' + recipe.id}>
              <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title}></img>
            
            <Gradient></Gradient>
            </Link>
              </Card>
            </SplideSlide>
            );
          })}
          </Splide>
          </Wrapper>
{/*going through each recipe and giving output*/}
     

     
      </div>
  );

}
const Wrapper=styled.div`
margin: 4rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position:relative;

img{
border-radius: 2rem;
position:absolute;
left:0;
width: 100%;
height: 100%;
object-fit: cover;
}
p{
  position:absolute;
left:50%;
z-index: 10;
bottom: 0%;
transform: translate(-50%, 0%);
color:white;
text-align: center;
font-weight: 400;
font-size: 1rem;
height: 40%;
display: flex;
justify-content: center;
align-items: center;
font-family: 'K2D', sans-serif;
}
`;
const Gradient=styled.div`
position:absolute;
z-index: 3;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));

`
export default Popular;