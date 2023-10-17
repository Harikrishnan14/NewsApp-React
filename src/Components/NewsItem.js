import React from 'react'

const NewsItem = (props) =>{

    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1", left: "50%" }}>{source}</span>
          <img src={!imageUrl ? "https://i.ytimg.com/vi/x1yntjc3f6M/hqdefault.jpg" : imageUrl} className="card-img-top" alt="..." style={{ height: "12rem" }} />
          <div className="card-body">
            <h5 className="card-title" style={{ height: "70px" }}>{title}...</h5>
            <p className="card-text" style={{height: "75px"}}>{description}...</p>
            <p className="card-text" style={{height: "50px"}}><small className="text-body-secondary">By {author ? author : "Unknown"} <br></br>On {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
