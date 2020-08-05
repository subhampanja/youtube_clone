import React from 'react'
import './VideoRow.css'

function VideoRow({ views, subs, description, timestamp, channel, title, image }) {
    return (
        <div className="videoRow">
            <img src={image} alt={channel} />
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className="videoRow_headline">
                    {channel} . {" "}
                    <span className="videoRow_subs">
                        <span className="videoRow_subsNumber">{subs}</span> subscribers
                    </span>{views}{" "} views . {timestamp} ago
                </p>
                <p className="videRow_description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
