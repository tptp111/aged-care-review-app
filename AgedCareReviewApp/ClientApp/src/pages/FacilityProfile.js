import * as React from 'react';
import '../styles/pages/FacilityProfile.css';
import '../styles/pages/Search.css';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import {Fade, Slide, Zoom} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Carousel from 'react-bootstrap/Carousel';
import {Component} from "react";



export class FacilityProfile extends Component {

    static displayName = FacilityProfile.name;

    constructor(props) {
        super(props);
        this.state = {facility: "", loading: true, reviews: []};
    }

    componentDidMount() {
        this.populateFacilitySearchResultData();
    }
    
    static renderFacilityProfile(facility, reviews) {
        return (
            <div>
                <input className="back-button" type="button" value="&laquo; Back to results"/>
                <div className='facility-row'>
                    <div className="profile-body">
                        <div className="profile-review-container">
                            <div className='profile-details-left'>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={facility.facilityImagePath}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={"/images/facility/benetas.png"}
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={"/images/facility/benetas.png"}
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                                <h1 className="card-title">{facility.facilityName}</h1>
                                <div className="profile-rate">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                                <p><b>Overall Rating: </b>
                                    {facility.overallScore} /5 <i>({facility.totalNumberOfReviews} reviews)</i></p>
                                <h6>{facility.street}<br></br>{facility.suburbName}, {facility.postcode}</h6>
                                <p className="profile-text"><i
                                    className="category-icon fa-solid fa-circle-info"></i> {facility.description}<br></br><i
                                        className="category-icon fa-solid fa-globe"></i><a
                                        href="#">https://aged-care-review-app.azurewebsites.net/</a></p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="profile-body">
                        <div className="profile-review-container">
                            <h2 className="profile-h2">Categories</h2>
                            <div className="criteria-box">
                                <div className="side">
                                    <div><i className="category-icon fa-solid fa-hand-holding-medical"></i>Care</div>
                                </div>
                                <div className="middle">
                                    <div className="bar-container">
                                        <div className="bar-5"></div>
                                    </div>
                                </div>
                                <div className="side right">
                                    <div>{facility.qualityOfCareScore} <em>({facility.totalNumberOfReviews})</em></div>
                                </div>
                                <div className="side">
                                    <div><i className="category-icon fa-solid fa-utensils"></i>Food</div>
                                </div>
                                <div className="middle">
                                    <div className="bar-container">
                                        <div className="bar-4"></div>
                                    </div>
                                </div>
                                <div className="side right">
                                    <div>{facility.foodScore} <em>({facility.totalNumberOfReviews})</em></div>
                                </div>
                                <div className="side">
                                    <div><i className="category-icon fa-solid fa-couch"></i>Facilities</div>
                                </div>
                                <div className="middle">
                                    <div className="bar-container">
                                        <div className="bar-3"></div>
                                    </div>
                                </div>
                                <div className="side right">
                                    <div>{facility.amenitiesScore} <em>({facility.totalNumberOfReviews})</em></div>
                                </div>
                                <div className="side">
                                    <div><i className="category-icon fa-solid fa-people-group"></i>Staff</div>
                                </div>
                                <div className="middle">
                                    <div className="bar-container">
                                        <div className="bar-2"></div>
                                    </div>
                                </div>
                                <div className="side right">
                                    <div>{facility.staffScore}<em>({facility.totalNumberOfReviews})</em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-body">
                    <div className="profile-review-container">
                        <h2 className="profile-h2">Reviews</h2>

                {reviews.map(review =>
                    <div className="profile-cards">
                        <div className="profile-card">
                            <div className="profile-card-top">
                                <div className="profile-name">
                                    <div className="profile-img one" alt="">AN</div>
                                    <p>Anonymous</p>
                                </div>
                                <div className="profile-rate">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                            </div>

                            <div className="profile-card-content">
                                <p>{review.feedbackComments}
                                </p>
                            </div>

                            <div className="profile-card-action">
                                <span>{review.initialReviewDate}</span>
                            </div>
                        </div>
                    </div>
                            )}
                    </div>
                </div>
                
                
            </div>
        );
    }
    

    render() {
        return (
                FacilityProfile.renderFacilityProfile(this.state.facility, this.state.reviews)
        );
    }

    async populateFacilitySearchResultData() {
        console.log(window.location.href)
        var facilityName = window.location.href.split("/").pop();
        const response = await fetch(window.location.href);
        const data = await response.json();
        const reviewResponse = await fetch('Review/' + facilityName);
        const reviewData = await reviewResponse.json();

        this.setState({facility: data, loading: false, reviews: reviewData});
    }
}