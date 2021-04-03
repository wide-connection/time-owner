
import { setMilliseconds } from 'date-fns';
import { relativeTimeRounding } from 'moment';
import React from 'react';
import './About.css';
import code from './code.jpg';
import chocolate from './Chcolate.jpg'



const About = () => {


    return (

        <div id = "container" class="hfeed">

            <div id = "main">

                <div id = "content" class = "main-post">

                    <div class = "wrap">



                           



                    

                    <div class = "entry-content">

                        <div class = "box-right">
                                <div class = "imageBx">

                                    <img src = {code} alt = "code" className = "code"/>

                                </div>

                                <div class = "contetnBx">

                                     <h1>Wide Connection</h1>
                                     <p>
                                        The Wide Connection is a small Start-Up group dreaming to make the most useful and practical application to brighten user’s daily life.
                                         We are moving forward for our dreams by developing time-management application 'Time Owner'.
                                     </p>
                                </div>

                        </div>
                        
                        <div class = "box-left">
                                <div class = "imageBx">

                                    <img src = {chocolate} alt = "chocolate" className = "chocolate"/>

                                </div>

                                <div class = "contetnBx">

                                     <h1>Time Owner</h1>
                                     <p>
                                        The Wide Connection is a small Start-Up group dreaming to make the most useful and practical application to brighten user’s daily life.
                                         We are moving forward for our dreams by developing time-management application 'Time Owner'.
                                     </p>
                                </div>

                        </div>

                    </div>


                    </div>


                </div>


            </div>



        </div>
           
       
    );
}

export default About;