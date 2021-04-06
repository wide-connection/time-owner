
import { setMilliseconds } from 'date-fns';
import { relativeTimeRounding } from 'moment';
import React, { Component } from 'react';
import './About.css';
import wideconnectionLogo from './images/WIdeConnection_Logo.jpg';
import timeOwnerLogo from './images/TimeOwnerLogo.png'
import useCaseDiagram from './images/UseCaseDiagram.JPG'
import classDiagram from './images/classDiagram.JPG'
import functionalFlow from './images/functionalDecomp.jpg'
import ConceptFlow from './images/conecptualModel.JPG'
import ProcessFlow from './images/ProcessFlow.jpg'
import timeowner from './images/TimeOwner.jpg'
import classDiagram2 from './images/classDiagram2.png'
import UseCaseImg from './images/UseCase.JPG'

import arrow from './images/arrow.png'
import Alice_WC from './images/Alice/Alice_WC.JPG'
import Alice_PF from './images/Alice/Alice_PF.JPG'
import Alice_SC from './images/Alice/Alice_Schedule.JPG'
import Alice_AT from './images/Alice/Alice_AddTask.JPG'
import Alice_GO from './images/Alice/Alice_Goal.JPG'
import Alice_ST from './images/Alice/Alice_ST.JPG'

const About = () => {
    return (

        <div id = "container" class="hfeed">
            <a href="#" className="to-top">
                <img className="scrollTop" src={arrow}/>
            </a>

            <div className="grid-container">
                <div className="aboutRow1">
                    <div className="about1content">
                        
                        <h4> Wide Connection </h4>
                        <div>
                            <p>The Wide Connection is a small Start-Up group dreaming to make the most useful and practical application to brighten user’s daily life.</p>
                            <a href="#aboutWideConnection"> ▷ Click here to see more details</a>
                        </div>        
                    </div>
                    <div className="abtimg1">
                        <img src={wideconnectionLogo} alt="" /> 
                    </div>
                </div>
                    
                <div className="aboutRow2">
                    <div className="about2content">
                        <h4> Time Owner </h4>
                        <div>
                            <p>Time Owner is time-management application, that would include daily to-do list, as well as calendar view.</p>
                            <a href="#aboutTimeOwner"> ▷ Click here to see more details</a>
                        </div>
                    </div>  
                    
                    <div className="abtimg2">
                        <img src={timeowner} alt="" /> 
                    </div>      
                </div>
                <div className="aboutRow1">
                    <div className="about1content">
                        
                        <h4> Use Case </h4>
                        <div>
                            <p>usage senario for our program? </p>
                            <a href="#aboutUseCase"> ▷ Click here to see more details</a>
                        </div>        
                    </div>
                    <div className="abtimg1">
                        <img className="usecaseImg" src={UseCaseImg}  /> 
                    </div>
                </div>
                <div className="aboutRow2">
                    
                    <div className="about2content">
                        <h4> Class Diagram </h4>
                        <div>
                            <p>Here is our class diagram if you are interested in our web-app.</p>
                            <a href="#aboutClassDiagram"> ▷ Click here to see more details</a>
                        </div>
                    </div>
                    <div className="abtimg2">
                        <img src={classDiagram2} alt="" /> 
                    </div>        
                </div>
                <div className="aboutRow1">
                    <div className="about1content">
                        
                        <h4> Conception Module </h4>
                        <div>
                            <p>Our conception module for our project  </p>
                            <a href="#aboutConceptionModule"> ▷ Click here to see more details</a>
                        </div>        
                    </div>
                    <div className="abtimg1">
                        <img src={functionalFlow} alt=""/> 
                    </div>
                </div>
                <div className="aboutRow2">
                    
                    <div className="about2content">
                        <h4> Future </h4>
                        <div>
                            <p>we are moving forward! here is our future plans</p>
                            <a href="#aboutOurFuture"> ▷ Click here to see more details</a>
                        </div>
                    </div>
                    <div className="abtimg2">
                        <img src={wideconnectionLogo} alt=""/> 
                    </div>        
                </div>
            </div>
            <div id = "main">

                <div id = "content" class = "main-post">

                    <div class = "wrap">


                    <div class = "entry-content">

                        <div class = "contentbox" id = "aboutWideConnection">
                               

                                <div>

                                    <h1 class ="about_topic">Wide Connection</h1>
                                     <img src={wideconnectionLogo} alt="" className="wideconnectionLogo"/>

                                        <h3 style={{textAlign: 'center', marginTop: '50px'}}>"Time Owner will ease your daily life!"</h3>

                                     <p class ="about_content">
                                        The Wide Connection is a small Start-Up group dreaming to make the most useful and practical application to brighten user’s daily life.<br /><br />
                                         We are moving forward for our dreams by developing time-management application 'Time Owner'.
                                       
                                     </p>

                

                                </div>
                                    
                             
                        </div>
                        
                        <div class = "contentbox" id = "aboutTimeOwner">
                               

                               
                            <div>

                     
                                <img src={timeowner} alt="" className="timeOwnerLogo"/> 

                                    <p class ="about_content">
                                    Wide connection’s 'Time Owner' is time-management application, that would include daily to-do list, as well as calendar view.<br /><br />
                                    Time Owner will allow user to plan their days, weeks, and month ahead, as well as track their current productivity.<br /><br />
                                    Time Owner will encourage users to create life goals and help with scheduling them out.<br /><br />
                                    Time Owner would present user a statistic with how productive they were, and how close they are to fulfilling their goals.<br /><br />
                                    Time Owner is also designed for user to assign the goal and checklist to have a constant visual reminder and to increase chance to achieve their goal.<br /><br />
                                    Desperate user might choose to commit to their goal financially and receive a fine if goal is not completed.<br /><br />
                                    Time Owner will allow user to choose maximum fine amount for not achieving goal commitment.
                                     </p>

                  
                            </div>

                            
                                
                               

                        </div>

                        <div class = "contentbox" id = "aboutUseCase">
                               

                               
                               <div>
   
                               <h1 class ="about_topic">Usecase Diagram</h1>
                                   <img src={useCaseDiagram} alt="" className="useCaseDiagram"/> 

                     
                               </div>
   
                               
                                   
                                  
   
                           </div>

                           <div class = "contentbox" id = "aboutClassDiagram">
                               

                               
                               <div>
   
                               <h1 class ="about_topic">Class Diagram</h1>
                                   <img src={classDiagram} alt="" className="classDiagram"/> 
   
                                
   
                     
                               </div>
   
                               
                                   
                                  
   
                           </div>

                           <div class = "contentbox" id = "aboutConceptionModule">
                               
                               
                               

                               
                               <div>
   
                               <h1 class ="about_topic">Concept and Key Flow</h1>
                                   <img src={functionalFlow} alt="" className="functionalFlow"/> 

                                   <img src={ConceptFlow} alt="" className="ConceptFlow"/> 

                                   <img src={ProcessFlow} alt="" className="ProcessFlow"/> 
   
                                       
   
                     
                               </div>
   
                               
                                   
                                  
   
                           </div>

                           <div class = "contentbox" id = "aboutOurFuture">
                               
                               

                               
                               <div>
   
                               <h1 style={{paddingBottom: '50px'}}class ="about_topic">Our Future Plan</h1>
                                   <img src={Alice_WC} alt="" className="Alice_WC"/> 

                                   <img src={Alice_PF} alt="" className="Alice_PF"/> 

                                   <img src={ Alice_SC} alt="" className=" Alice_SC"/> 

                                   <img src={  Alice_AT} alt="" className="  Alice_AT"/> 

                                   <img src={ Alice_GO} alt="" className="  Alice_GO"/> 

                                   <img src={Alice_ST} alt="" className=" Alice_ST"/> 
   
                                       
   
                     
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