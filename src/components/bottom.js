import React from 'react';
import './bottom.css';



function Bottom({ name, actual_temp, feels_like, weather }) {

    const temp_in_c = Math.round((actual_temp) - 273) + " *C";
    const temp_in_c_feels = Math.round((feels_like) - 273) + " *C";


    return (

        <>

            <section className="bottom-grand-parent">

                <div className="name">
                    <h1>CITY</h1>
                    <div>
                        {name}
                    </div>
                </div>
                <div className="temp">
                    <div className="actual-temp">
                        <h1>Actual Temperature</h1>
                        <div>
                            {temp_in_c}
                        </div>
                    </div>
                    <div className="feels-like">
                        <h1>Feels Like</h1>
                        <div>
                            {temp_in_c_feels}
                        </div>
                    </div>
                </div>

                <div className="weather">
                    <h1>Weather</h1>

                    <div>
                        {weather}
                    </div>

                </div>
            </section>



        </>

    );


}

export default Bottom;