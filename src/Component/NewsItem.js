import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description,image ,newsUrls } = this.props;
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={!image?'https://images.hindustantimes.com/img/2022/02/12/1600x900/0a206098-8bfe-11ec-8ba1-508084a9585c_1644668625839.png':image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrls} target='_blank' className="btn btn-primary">Read More</a>
                    </div>
                </div>     
           </div>
        )
    }
}

export default NewsItem