import React from "react";

export default function Post({title, body, views, author, createdAt, thumb, category}) {
    return (
        <div className="card equal news-block">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={thumb} alt=''/>
                </figure>
            </div>

            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <div className="title is-4">
                            {title}
                            <br/>
                            <span className="tag is-light ml-4">{category}</span>
                        </div>
                        <div className="subtitle is-6 has-text-grey">{author}</div>
                    </div>
                </div>

                <div className="content">
                    {body}
                </div>
                <div className="columns mt-5">
                    <div className="column has-text-grey-light icon">
                        <time dateTime="2016-1-1">{createdAt}</time>
                    </div>
                    <div className="column icon">
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/view-512.png"
                            width='20'
                            height='20'
                            alt=""
                            className='mr-1'
                        />
                        {views}
                    </div>
                </div>
            </div>
        </div>
    )
}

