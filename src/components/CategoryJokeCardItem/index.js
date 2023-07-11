import {Component} from "react"

import Popup from 'reactjs-popup';
import {Circles} from 'react-loader-spinner'

import "./index.css"

class CategoryCardItem extends Component{
    state={categoryJoke: {}, categoryId: "", showLoader: false}


    getCategoryJokesData = async() => {
        this.setState((prevState) => ({showLoader: !prevState.showLoader}))
        const {categoryName} = this.props
        const options = {
            method: "GET"
        }
        const apiUrl = `https://api.chucknorris.io/jokes/random?category=${categoryName}`
        const response = await fetch(apiUrl, options)
        const jsonData = await response.json()
        this.setState((prevState) => ({categoryJoke: jsonData, showLoader: !prevState.showLoader, categoryId: jsonData.categories[0]}))
    }

    render (){
    const {categoryName} = this.props;
    const {categoryJoke, showLoader, categoryId} = this.state
    const containerClassName = categoryName === categoryId ? "category-card-item-container is-select" : "category-card-item-container"
    console.log(categoryJoke)
    return (
        <Popup
     modal
     trigger={
        <li className={containerClassName} >
          <div class="text-container"onClick={this.getCategoryJokesData}>
            <h1 className="category-name">{categoryName}</h1>
            <p className="category-card-description">Unlimited Jokes On <span className="capital">{categoryName}</span></p>
          </div>
        </li>
     }
     className="main-popup-container"
   >
     {close => (
       <div className="popup-bg-container">
         <div className="popup-header-container">
            <div style={{width: "98%"}}>
           <h1 className="popup-header-heading">{categoryName}</h1>
           </div>
           <button
           type="button"
           className="trigger-button"
           onClick={() => {
            close();
            this.setState({categoryId: ""})
           }}
         >
           X
         </button>
         </div>
         <div className="jokeContainer">
            {showLoader ? (<div className="loader-container"><Circles type="ThreeDots" color="#0b69ff" height="50" width="50" /></div>) 
            : <h1 className="joke">"{categoryJoke.value}"</h1>}
            <button type="button" className="next-joke-button" onClick={this.getCategoryJokesData}>Next joke</button>
         </div>
       </div>
     )}
   </Popup>
        
    )
    }
}

export default CategoryCardItem;