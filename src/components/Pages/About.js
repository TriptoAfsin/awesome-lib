import React from 'react'

function About() {
    return (
        <React.Fragment>
            <div className="row mt4 ml4 center-self">
                <div className="column fade">
                    <p className="txt-xl">Purpose of this webapp is to find usefull JS, CSS librararies easilty and quickly</p>
                    <p className="txt-xl">It's a personally maintained repo where anyone can freely contribute😄</p>

                    <a className="button blue txt-lg bold mt4" href="https://github.com/TriptoAfsin/API-Host/blob/main/usefulJSDB.json" target="_blank" rel="noreferrer">Contribute Now</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About
