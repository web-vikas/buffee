import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'
function card(props) {
    return (
        <div>
           <Link to={"/download/"+ props.title + "/"+ props.unicqueVal}>
           <div className="card-container" style={{
                height: props.height,
                width: props.width
            }}>
                <div className="image" style={{
                    background:`url(http://drive.google.com/uc?export=view&id=${props.backGround})`,
                    backgroundRepeat:"no-repeat",
                    backgroundPosition:"center center",
                    backgroundSize:"cover"
                }}></div>
            </div>
           </Link>
        </div>
    )
}

export default card