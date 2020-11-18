import React from 'react'

function Contact() {
    return (
        <React.Fragment>
            <div className="row mt4 ml4 center-self">
                <div className="column float-left center-self ml4">
                        <a><img src="./imgs/dev.jpg" className="rounded-img shadow" alt="TriptoAfsin" width="180px" height="180px"></img></a>
                </div>
                <div className="column float-right pad4">
                        <p className="txt-xl left-txt bold">TriptoAfsin</p>
                        <p className="txt-l mt2 left-txt">Hi I'm TriptoAfsin, I'm a freelance webdevloper who is interested in tech and passionate about learning😄</p>
                        <p className="txt-l left-txt">Currently I'm studying engineering at Bangladesh University of Textiles</p>

                        <div className="row mt4 floatUp">
                            <h2 className="left-txt mr4">Get in touch: </h2>
                            <a href="mailto:afsintripto@gmail.com"><img className="" src="./imgs/mail.png" width="48px" height="auto" alt="mail"></img></a>
                            <a href="https://github.com/TriptoAfsin" target="_blank" rel="noreferrer"><img className="" src="./imgs/github.png" width="48px" height="auto" alt="github"></img></a>
                        </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact
