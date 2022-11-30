import React, { Component } from 'react';
import '../styles/pages/Review.css';
import {Link} from "react-router-dom";
import {SlideBar} from '../components/SlideBar';

export class Review extends Component {
    static displayName = Review.name;
    
    render() {

        return (
                    
            <div className='col-lg-12 col-sm-12 rev-column'>
                <h1 id="rev-h1-title"> Facility Review</h1>
                <h1 id="rev-h1">Instructions</h1>
                <p id="rev-p">
                    Your review will consist of rating the facility performance and providing your comments in line 
                    with your experience.
                </p>

                <p id="rev-p">
                    Please take time and care when providing responses.  All reviews are subject to moderation in 
                    accordance with our
                    <Link to="/TermsOfUse">
                        <span> <a>Terms of Use</a></span>.
                    </Link>
                </p>
                <p id="rev-p">
                    Hover over the
                    <img className='lightBulb-img' src='/images/LightBulb.png' alt="light bulb"/>
                    for some more guidance on the questions.
                </p>
                
                <h1 id="rev-h1">Facility Performance</h1>
                <div className="rev-horizontal-line"> </div>
                <p id="rev-p">
                    Please provide your ratings for the below on a scale from 0 to 10.
                </p>
                <p id="rev-p">
                    It is important you spend time thinking about each questions before answering.
                </p>
                <form action="/home">  
                <div className="qualityOfCare-container">
                    <p>
                        <label form="temp" id="rev-comment-heading">How would you rate the <strong>quality of care
                        </strong> at this aged care facility?</label>
                        <div className="dropdown">
                        <button className="button">
                            <img className='lightBulb-img' src='/images/LightBulb.png' alt="light bulb"/>
                        </button>
                            <div className="dropdown-content">
                                <p>Dressing – Timely & neat.</p>
                                <p>Toileting – Timely/ not waiting too long for help.  Cleaned.</p>
                                <p>Cared for with dignity and respect.</p>
                            </div>
                        </div>
                        <br/> <br/>
                        <p>  </p>
                        <SlideBar></SlideBar>
                        </p>
                </div>
                    <div className="rev-horizontal-line"> </div>
                    <div className="food-container">
                        <p>
                            <label id="rev-comment-heading">How would you rate the <strong>food </strong>at this aged 
                                care facility? </label>
                            <div className="dropdown">
                            <button className="button">
                                <img className='lightBulb-img' src='/images/LightBulb.png' alt="light bulb"/>
                            </button>
                                <div className="dropdown-content">
                                    <p>Given choice as to what to eat</p>
                                    <p>Presentation</p>
                                    <p>Taste</p>
                                    <p>Served warm when needed</p>
                                    <p>Variety of menu</p>
                                    <p>Assistance with feeding if needed</p>
                                    <p>Snacks available during the day</p>
                                </div>
                            </div>    
                            <br/> <br/>
                            <p>  </p>
                            <SlideBar></SlideBar>
                        </p>
                    </div>
                    <div className="rev-horizontal-line"> </div>
                    <div className="facilities-container">
                        <p>
                            <label id="rev-comment-heading">How would you rate the <strong>physical facilities</strong>? 
                            </label>
                            <div className="dropdown">
                            <button className="button">
                                <img className='lightBulb-img' src='/images/LightBulb.png' alt="light bulb"/>
                            </button>
                                <div className="dropdown-content">
                                    <p>Quality of common areas (lounge, indoor recreation, outdoor areas, activity rooms, 
                                        gym).</p>
                                    <p>Cleanliness</p>
                                    <p>Accessibility (e.g. Automatic doors, wide hallways)</p>
                                    <p>Lighting (not too bright, not too dark).</p>
                                </div>
                            </div>
                            <br/> <br/>
                            <p>  </p>
                            <SlideBar></SlideBar>
                        </p>
                    </div>
                    <div className="rev-horizontal-line"> </div>
                    <div className="qualityOfStaff-container">
                        <p>
                            <label id="rev-comment-heading">How would you rate the <strong>quality of staff </strong> 
                                at this aged care facility? </label>
                            <div className="dropdown">
                            <button className="button">
                                <img className='lightBulb-img' src='/images/LightBulb.png' alt="light bulb"/>
                            </button>
                                <div className="dropdown-content">
                                    <p>Caring</p>
                                    <p>Friendly</p>
                                    <p>Treat you with dignity and respect.</p>
                                    <p>Knowledgeable.</p>
                                    <p>Well groomed.</p>
                                    <p>Adequate numbers of staff for each shift.</p>
                                </div>
                            </div>
                            <br/> <br/>
                            <p>  </p>
                            <SlideBar></SlideBar>
                        </p>
                    </div>
                    <div className="rev-horizontal-line"> </div>
                    <div className="qualityOfStaff-container">
                        <p>
                            <label id="rev-comment-heading">How would you rate the quality of the  <strong>activities program
                            </strong> at this aged care facility? </label>
                            <div className="dropdown">
                                <button className="button">
                                    <img className='lightBulb-img' src='/images/LightBulb.png' alt="light bulb"/>
                                </button>
                                <div className="dropdown-content">
                                    <p>Consultation</p>
                                    <p>Variety</p>
                                    <p>Stimulating</p>
                                    <p>External activities</p>
                                </div>
                            </div>
                            <br/> <br/>
                            <p>  </p>
                            <SlideBar></SlideBar>
                        </p>
                    </div>
                    <div className="rev-horizontal-line"> </div>
                    <div className="qualityOfStaff-container">
                        <p>
                            <label id="rev-comment-heading">Do you feel <strong>safe </strong> at this aged care 
                                facility? </label>
                            <div className="dropdown">
                                <button className="button">
                                    <img className='lightBulb-img' src='/images/LightBulb.png' alt="light bulb"/>
                                </button>
                                <div className="dropdown-content">
                                    <p>Have you experienced any of the following?:</p>
                                    <p>Falls.</p>
                                    <p>Pressure sores.</p>
                                    <p>Skin tears.</p>
                                    <p>Bruised skin.</p>
                                    <p>Missed or late medication provided.</p>
                                    <p>Abuse (neglect, financial, physical, sexual, other).</p>
                                </div>
                            </div>
                            <br/> <br/>
                            <p>  </p>
                            <SlideBar></SlideBar>
                        </p>
                    </div> 
                    
                <h1 id="rev-h1">Overall Rating</h1>
                <div className="rev-horizontal-line"> </div>
                <div className="rating-container">
                    <p>
                        <label id="rev-comment-heading">How would you rate the overall performance of this aged care 
                            facility? </label><br/>
                        <p>   </p>
                        <div className="rate">
                            <input type="radio" id="star5" name="rate" value="5"/>
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4"/>
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3"/>
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2"/>
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1"/>
                            <label htmlFor="star1" title="text">1 star</label>
                        </div>
                    </p>
                </div>
                    
                <h1 id="rev-h1">Comments</h1>
                <div className="rev-horizontal-line"> </div>
                <div className="review-container"> 
                <p>
                    <label id="rev-comment-heading">How would you describe your experience at this aged care facility? 
                    </label><br/>
                    <p>   </p>
                    <textarea id="review-comments-input" name="review-comments"  placeholder="Please enter your comments 
                    here..." required>  
                    </textarea>
                </p>
                </div>

                <div>
                    <Link to="/ReviewConfirmation">
                        <button className='b b-primary' id="rev-submit-button">Submit</button>
                    </Link>
                </div>
                </form>    
            </div>
        );
    }
}

