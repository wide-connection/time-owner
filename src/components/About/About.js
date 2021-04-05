
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
                               

                                <div class = "contetnBx">

                                     <h1 class ="about_topic">Wide Connection</h1>
                                     <img src={code} alt="" className="code"/> 
                                     <p class ="about_content">
                                        The Wide Connection is a small Start-Up group dreaming to make the most useful and practical application to brighten user’s daily life.
                                         We are moving forward for our dreams by developing time-management application 'Time Owner'.
                                       
                                     </p>
                                </div>

                        </div>
                        
                        <div class = "box-left">
                               

                                <div class = "contetnBx">

                                <h1 class ="about_topic">Time Owner</h1>
                                <img src={chocolate} alt="" className="chocolate"/> 
                                    <p class ="about_content">
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