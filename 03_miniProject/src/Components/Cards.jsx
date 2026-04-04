import React from 'react'
import { Bookmark } from "lucide-react";

const Cards = (props) => {
  return (
    <div className="Parent">
      <div className="card">

        <div className="top">
          <img src={props.logo} alt="logo" />
          <p>Save <Bookmark /></p>
        </div>

        <div className="middle">
          <div className="mChild1">
            <h4>{props.name}</h4>
            <h6>{props.days}</h6>
          </div>
          <div className="mChild2">
            <h2>{props.post}</h2>
          </div>
          <div className="mChild3">
            <button>Part Time</button><button id='btn1'>Senior level</button>
          </div>
        </div>

        <div className="bottom">
          <h4>{props.hour}</h4><button>Apply Now</button>
        </div>

      </div>

    </div>
  )
}

export default Cards
