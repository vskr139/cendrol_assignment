import {Component} from "react"

import CategoryJokeCardItem from "../CategoryJokeCardItem"

import "./index.css"

class ChurkNorrisPage extends Component{
  state = {categoryList: [], activeCategoryId: ""}

  onChangingCategoryId = (id) => (
        this.setState({activeCategoryId: id})
    )

    componentDidMount = () => (
       this.getCategoryData()
    )

    getCategoryData = async() => {
        const apiUrl = "https://api.chucknorris.io/jokes/categories"
        const options = {
            method: "GET"
        }
        const response = await fetch(apiUrl, options);
        const categoryData = await response.json();
        this.setState({categoryList: categoryData});
    }

    render(){
       const {categoryList, activeCategoryId} = this.state 
       console.log(categoryList);
        return (
            <div className="chunk-norries-bg-container">
                <h1 className="heading">Chuck Norries</h1>
                <ul className="category-list-container">
                    {categoryList.map((eachCategory) => (
                        <CategoryJokeCardItem key={eachCategory} categoryName={eachCategory} id={eachCategory} onChangingCategoryId={this.onChangingCategoryId} isActive={activeCategoryId===eachCategory}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ChurkNorrisPage;