import React from "react"
const SpaceManage = () => {
    return (
        <div className="row">
          <div className="col-md-3">Free Space
            <svg style={{width:10+"px", height: 10+"px"}}>
                <rect style={{width:10+"px", height: 10+"px"}} fill="blue" />
              </svg>
              <br/>
              Apps
              <svg style={{width:10+"px", height: 10+"px"}}>
                <rect style={{width:10+"px", height: 10+"px"}} fill="Black" />
              </svg>
              <br/>
              Media
              <svg style={{width:10+"px", height: 10+"px"}}>
                <rect style={{width:10+"px", height: 10+"px"}} fill="green" />
              </svg>
              <br/>
              Doc
              <svg style={{width:10+"px", height: 10+"px"}}>
                <rect style={{width:10+"px", height: 10+"px"}} fill="yellow" />
              </svg>
          </div>
          <div className="col-md-9">
            <div className="progress rounded" style={{height: 25+"px"}}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{height: 25+"px",  width:50+"%"}}> 50%</div>
        </div>
            <div className="progress rounded" style={{height: 25+"px"}}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" style={{height: 25+"px",  width:40+"%"}}> 40%</div>
        </div>
            <div className="progress rounded" style={{height: 25+"px"}}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{height: 25+"px",  width:10+"%"}}> 10%</div>
        </div>
            <div className="progress rounded" style={{height: 25+"px"}}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{height: 25+"px",  width:25+"%"}}> 25%</div>
        </div>
      </div>
      </div>    
    )
}
export default SpaceManage