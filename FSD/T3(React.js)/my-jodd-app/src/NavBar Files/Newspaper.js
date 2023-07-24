import React from "react"
const Newspaper = () => {
    return (
    <div class="container-fluid">
        <center>
            <h1 class="display-5 text-dark text-center">Newspaper</h1>
            <div id="accordian">
                <div class="card">
                    <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href="#col4">
                            Page-1
                        </a>
                    </div>
                    <div id="col4" class="collapse" data-parent="#accordian">
                        <div class="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit dignissimos rerum vitae eius culpa neque, quo asperiores ipsum aperiam debitis dicta quibusdam adipisci odio atque nobis animi. Doloremque, rem corrupti!</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href="#col5">
                            Page-2
                        </a>
                    </div>
                    <div id="col5" class="collapse" data-parent="#accordian">
                        <div class="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit dignissimos rerum vitae eius culpa neque, quo asperiores ipsum aperiam debitis dicta quibusdam adipisci odio atque nobis animi. Doloremque, rem corrupti!</div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href="#col6">
                            Page-3
                        </a>
                    </div>
                    <div id="col6" class="collapse" data-parent="#accordian">
                        <div class="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit dignissimos rerum vitae eius culpa neque, quo asperiores ipsum aperiam debitis dicta quibusdam adipisci odio atque nobis animi. Doloremque, rem corrupti!</div>
                    </div>
                </div>
            </div>
    
        </center>
    
    </div>
    )
}
export default Newspaper