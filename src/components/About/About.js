
import { setMilliseconds } from 'date-fns';
import { relativeTimeRounding } from 'moment';
import React from 'react';
import './About.css';
import code from './code.jpg';
import chocolate from './Chcolate.jpg'

const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

const About = () => {


    return (
        
        
       
        <div id = "container" class="hfeed">
            <div className="grid-container">
                <div className="aboutRow1">
                    <div className="about1content">
                        
                        <h4> Wide Connection </h4>
                        <div>
                            <p>The Wide Connection is a small Start-Up group dreaming to make the most useful and practical application to brighten user’s daily life.</p>
                            <a href="#section1"> ▷ Click here to see more details</a>
                        </div>        
                    </div>
                    <div className="abtimg1">
                        <img src={chocolate} alt="" className="chocolate"/> 
                    </div>
                </div>
                    
                <div className="aboutRow2">
                    <div className="about2content">
                        <h4> Time Owner </h4>
                        <div>
                            <p>Time Owner is time-management application, that would include daily to-do list, as well as calendar view.</p>
                            <a href="#section2"> ▷ Click here to see more details</a>
                        </div>
                    </div>  
                    
                    <div className="abtimg2">
                        <img src={chocolate} alt="" className="chocolate"/> 
                    </div>      
                </div>
                <div className="aboutRow1">
                    <div className="about1content">
                        
                        <h4> Use Case </h4>
                        <div>
                            <p>usage senario for our program? </p>
                            <a href="#section1"> ▷ Click here to see more details</a>
                        </div>        
                    </div>
                    <div className="abtimg1">
                        <img src={chocolate} alt="" className="chocolate"/> 
                    </div>
                </div>
                <div className="aboutRow2">
                    
                    <div className="about2content">
                        <h4> class diagram </h4>
                        <div>
                            <p>Here is our class diagram if you are interested in our web-app.</p>
                            <a href="#section2"> ▷ Click here to see more details</a>
                        </div>
                    </div>
                    <div className="abtimg2">
                        <img src={chocolate} alt="" className="chocolate"/> 
                    </div>        
                </div>
                <div className="aboutRow1">
                    <div className="about1content">
                        
                        <h4> conception module </h4>
                        <div>
                            <p>Our conception module for our project  </p>
                            <a href="#section1"> ▷ Click here to see more details</a>
                        </div>        
                    </div>
                    <div className="abtimg1">
                        <img src={chocolate} alt="" className="chocolate"/> 
                    </div>
                </div>
            </div>
            <div id = "main">

                <div id = "content" class = "main-post">

                    <div class = "wrap">



                           



                    

                    <div class = "entry-content">

                        <div class = "box-right">
                               

                                <div class = "contetnBx">

                                     <h1 class ="about_topic" id="section1">Wide Connection</h1>
                                     <img src={code} alt="" className="code"/> 
                                     <p class ="about_content">
                                        The Wide Connection is a small Start-Up group dreaming to make the most useful and practical application to brighten user’s daily life.
                                         We are moving forward for our dreams by developing time-management application 'Time Owner'.
                                       
                                     </p>
                                </div>

                        </div>
                        
                        <div class = "box-left">
                               

                                <div class = "contetnBx">

                                <h1 class ="about_topic" id="section2">Time Owner</h1>
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