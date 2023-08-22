import React from "react"
const Newspaper = () => {
    return (
    <div className="container-fluid">
        <center>
            <h1 className="display-5 text-dark text-center">Newspaper</h1>
            <div id="accordian">
                <div className="card">
                    <div className="card-header">
                        <a className="card-link" data-toggle="collapse" href="#col4">
                            Page-1
                        </a>
                    </div>
                    <div id="col4" className="collapse" data-parent="#accordian">
                        <div className="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit dignissimos rerum vitae eius culpa neque, quo asperiores ipsum aperiam debitis dicta quibusdam adipisci odio atque nobis animi. Doloremque, rem corrupti!</div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <a className="card-link" data-toggle="collapse" href="#col5">
                            Page-2
                        </a>
                    </div>
                    <div id="col5" className="collapse" data-parent="#accordian">
                        <div className="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit dignissimos rerum vitae eius culpa neque, quo asperiores ipsum aperiam debitis dicta quibusdam adipisci odio atque nobis animi. Doloremque, rem corrupti!</div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <a className="card-link" data-toggle="collapse" href="#col6">
                            Page-3
                        </a>
                    </div>
                    <div id="col6" className="collapse" data-parent="#accordian">
                        <div className="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit dignissimos rerum vitae eius culpa neque, quo asperiores ipsum aperiam debitis dicta quibusdam adipisci odio atque nobis animi. Doloremque, rem corrupti!</div>
                    </div>
                </div>
            </div>
    
        </center>
    
    </div>
    )
}
export default Newspaper