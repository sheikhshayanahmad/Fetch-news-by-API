import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


    constructor() {
        super();
        console.log('hello world')
        this.state = {
            articles: [],
            loading: false,


        }
    }

    async componentDidMount(){
        console.log('asdsad')
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=80addded1fec4543ab5f38836a3ecd05&page=1'
        let data =await fetch(url);
        let parsedData = await data.json()
        console.log (parsedData);
        this.setState({articles : parsedData.articles})
    }

    handlePrevClick = async () =>{
        console.log ('prev')
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=80addded1fec4543ab5f38836a3ecd05&page=1&pagesize=20`;
        let data =await fetch(url);
        let parsedData = await data.json()
        console.log (parsedData);
        this.setState ({
            page : this.state.page + 1,
            articles : parsedData.articles

            
        })

    }


      handleNextClick = async () =>{
        console.log('nexg');
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=80addded1fec4543ab5f38836a3ecd05&page=2  &pagesize=20`;
        let data =await fetch(url);
        let parsedData = await data.json()
        console.log (parsedData);
        this.setState ({
            page : this.state.page + 1,
            articles : parsedData.articles

            
        })

    }
       

    render() {
        return (
            <div className='container my-3'>
                <div className='row'>
                    <h2 className='text-center'>News - Top Headlines</h2>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4 my-3' key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88): ""} image= {element.urlToImage} newsUrls = {element.url}/>
                        </div>

                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                <button  disabled = {this.state.page<=1} type="button"  class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

                </div>
            </div>
        )
    }
}

export default News