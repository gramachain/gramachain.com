
import React from 'react'

import Hero from './Hero'

export default function Slider(props) {
    return (
        <div className="slider">
            <div className="slide">
                <Hero
                    { ...props }
                    buttonTitle="NONE"
                    subtitle="The software suite of applications provided by the Grama Foundation are professionally designed user experiences that provide first-class ease of use, increased productivity, and a common-sense layout.  Information is autofilled when necessary. All software will meet or exceed GS1/ISO standards."
                    title="User Experience" />
                <div className="image">
                    <img alt="Farming" src="img/placeholder.png" />
                </div>
            </div>
        </div>
    )
}
