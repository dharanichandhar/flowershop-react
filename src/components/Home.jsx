import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const NavigateToShophere = ()=>{
      navigate('/gallery')
  }
  return (
  <>
  <div className="home_container">
    <div className="home_main">
    <h1>Welcome to <i> Flower</i><span className="shop-text"><i>Shop</i></span></h1>
    <p><i>Where every plant blooms into flower and fill your like with joy</i></p>
    <button onClick={()=>NavigateToShophere()}>Shop Here</button>
    </div>
  </div>
  </>
  )
}

export default Home
