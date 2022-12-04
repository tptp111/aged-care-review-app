import * as React from "react";
import "../styles/pages/FacilityProfile.css";
import "../styles/pages/Search.css";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { Fade, Slide, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Carousel from "react-bootstrap/Carousel";
import { Component } from "react";

export class FacilityProfile extends Component {
  static displayName = FacilityProfile.name;

  constructor(props) {
    super(props);
    this.state = { facility: "", loading: true, reviews: [] };
  }

  componentDidMount() {
    this.populateFacilitySearchResultData();
  }

  static renderFacilityProfile(facility, reviews) {
    function loadIcon(data) {
      const icons = {
        ["1"]: (
          <div>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        ),
        ["2"]: (
          <div>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
          </div>
        ),
        ["3"]: (
          <div>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        ),
        ["4"]: (
          <div>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        ),
        ["5"]: (
          <div>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        ),
        ["6"]: (
          <div>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        ),
        ["7"]: (
          <div>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        ),
        ["8"]: (
          <div>
            <i className="fas fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        ),
        ["9"]: (
          <div>
            <i className="fas fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        ),
        ["10"]: (
          <div>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        ),
        ["11"]: (
          <div>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        ),
      };
      return icons[data.id];
    }

    return (
      <div>
        <div className="profile-nav-buttons">
          <Link className="profile-b" to={"/facilitysearchresult/" + facility.postcode}>
            <input
              className="b b-accent b-sm"
              type="button"
              value="&laquo; Back to results"
            />
          </Link>
          <Link className="profile-b" to={"/postreview/" + facility.facilityName}>
            <input
              className="b b-primary b-sm"
              type="button"
              value="Review facility &raquo;"
            />
          </Link>
        </div>
        <div className="row">
          <div className="profile-body">
            <div className="profile-review-container row">
              <div className="col-lg-6 col-md-12">
                <div className="profile-details-left">
                  <h1 className="card-title">Benetas Brunswick</h1>
                    <div className="profile-rate">
                      <div>
                        {facility.overallScore >= 0 && facility.overallScore <= 0.6
                          ? loadIcon({ id: 11 })
                          : facility.overallScore > 0.6 &&
                            facility.overallScore <= 1.4
                          ? loadIcon({ id: 10 })
                          : facility.overallScore >= 1.4 &&
                            facility.overallScore <= 2.4
                          ? loadIcon({ id: 9 })
                          : facility.overallScore > 2.4 &&
                            facility.overallScore <= 3.4
                          ? loadIcon({ id: 8 })
                          : facility.overallScore > 3.4 &&
                            facility.overallScore <= 4.4
                          ? loadIcon({ id: 7 })
                          : facility.overallScore > 4.4 &&
                            facility.overallScore <= 5.4
                          ? loadIcon({ id: 6 })
                          : facility.overallScore > 5.4 &&
                            facility.overallScore <= 6.4
                          ? loadIcon({ id: 5 })
                          : facility.overallScore > 6.4 &&
                            facility.overallScore <= 7.4
                          ? loadIcon({ id: 4 })
                          : facility.overallScore > 7.4 &&
                            facility.overallScore <= 8.4
                          ? loadIcon({ id: 3 })
                          : facility.overallScore > 8.4 &&
                            facility.overallScore <= 9.4
                          ? loadIcon({ id: 2 })
                          : facility.overallScore > 9.4 &&
                            facility.overallScore <= 10
                          ? loadIcon({ id: 1 })
                          : loadIcon({ id: 11 })}
                      </div>
                    </div>
                    <p>
                      <b>Overall Rating: </b>
                      {facility.overallScore / 2} /5{" "}
                      <i>({facility.totalNumberOfReviews} reviews)</i>
                    </p>
                    <h6>
                      {facility.street}
                      <br></br>
                      {facility.suburbName}, {facility.postcode}
                    </h6>
                    <p className="profile-text">
                      <i className="information-icon fa-solid fa-circle-info"></i>
                      {facility.description}
                      <br></br>
                      <i className="information-icon fa-solid fa-globe"></i>
                      <a href="#">
                        https://aged-care-review-app.azurewebsites.net/
                      </a>
                    </p>
                  </div>
                </div>
              <div className="col-lg-6 col-md-12 carousel-col">
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
                </div>
            </div>
          </div>

          <div className="profile-body">
            <div className="profile-review-container">
              <h2 className="profile-h2">Categories</h2>
              <p>
                <center>
                  Residents rate facilities out of 10 based on the below
                  categories. <br></br>
                  Below is the average score for each category and the number of
                  times it has been rated.
                </center>
              </p>
              <hr style={{ marginTop: "20px", marginBottom: "30px" }} />
              <div className="criteria-box">
                <div className="row">
                  <div className="side col-3">
                    <div>
                      <i className="category-icon fa-solid fa-hand-holding-medical" />
                      Care
                    </div>
                  </div>
                  <div className="middle col-6">
                    <div className="bar-container">
                      <div
                        className="bar-score"
                        style={
                          facility.qualityOfCareScore >= 1 &&
                          facility.qualityOfCareScore < 2
                            ? { width: "15%" }
                            : facility.qualityOfCareScore >= 2 &&
                              facility.qualityOfCareScore < 3
                            ? { width: "25%" }
                            : facility.qualityOfCareScore >= 3 &&
                              facility.qualityOfCareScore < 4
                            ? { width: "35%" }
                            : facility.qualityOfCareScore >= 4 &&
                              facility.qualityOfCareScore < 5
                            ? { width: "45%" }
                            : facility.qualityOfCareScore >= 5 &&
                              facility.qualityOfCareScore < 6
                            ? { width: "55%" }
                            : facility.qualityOfCareScore >= 6 &&
                              facility.qualityOfCareScore < 7
                            ? { width: "65%" }
                            : facility.qualityOfCareScore >= 7 &&
                              facility.qualityOfCareScore < 8
                            ? { width: "75%" }
                            : facility.qualityOfCareScore >= 8 &&
                              facility.qualityOfCareScore < 9
                            ? { width: "85%" }
                            : facility.qualityOfCareScore >= 9 &&
                              facility.qualityOfCareScore <= 9.5
                            ? { width: "95%" }
                            : facility.qualityOfCareScore > 9.5
                            ? { width: "100%" }
                            : { width: "0%" }
                        }
                      ></div>
                    </div>
                  </div>
                  <div className="side right col-3">
                    <div>
                      {facility.qualityOfCareScore}{" "}
                      <em>({facility.totalNumberOfReviews})</em>
                    </div>
                  </div>
                  <hr style={{ marginBottom: "30px" }} />
                  <div></div>
                  <div className="side col-3">
                    <div>
                      <i className="category-icon fa-solid fa-utensils" />
                      Food
                    </div>
                  </div>
                  <div className="middle col-6">
                    <div className="bar-container">
                      <div
                        className="bar-score"
                        style={
                          facility.foodScore >= 1 && facility.foodScore < 2
                            ? { width: "15%" }
                            : facility.foodScore >= 2 && facility.foodScore < 3
                            ? { width: "25%" }
                            : facility.foodScore >= 3 && facility.foodScore < 4
                            ? { width: "35%" }
                            : facility.foodScore >= 4 && facility.foodScore < 5
                            ? { width: "45%" }
                            : facility.foodScore >= 5 && facility.foodScore < 6
                            ? { width: "55%" }
                            : facility.foodScore >= 6 && facility.foodScore < 7
                            ? { width: "65%" }
                            : facility.foodScore >= 7 && facility.foodScore < 8
                            ? { width: "75%" }
                            : facility.foodScore >= 8 && facility.foodScore < 9
                            ? { width: "85%" }
                            : facility.foodScore >= 9 &&
                              facility.foodScore <= 9.5
                            ? { width: "95%" }
                            : facility.foodScore > 9.5
                            ? { width: "100%" }
                            : { width: "0%" }
                        }
                      ></div>
                    </div>
                  </div>
                  <div className="side right col-3">
                    <div>
                      {facility.foodScore}{" "}
                      <em>({facility.totalNumberOfReviews})</em>
                    </div>
                  </div>
                  <hr style={{ marginBottom: "30px" }} />
                  <div className="side col-3">
                    <div>
                      <i className="category-icon fa-solid fa-couch" />
                      Amenities
                    </div>
                  </div>
                  <div className="middle col-6">
                    <div className="bar-container">
                      <div
                        className="bar-score"
                        style={
                          facility.amenitiesScore >= 1 &&
                          facility.amenitiesScore < 2
                            ? { width: "15%" }
                            : facility.amenitiesScore >= 2 &&
                              facility.amenitiesScore < 3
                            ? { width: "25%" }
                            : facility.amenitiesScore >= 3 &&
                              facility.amenitiesScore < 4
                            ? { width: "35%" }
                            : facility.amenitiesScore >= 4 &&
                              facility.amenitiesScore < 5
                            ? { width: "45%" }
                            : facility.amenitiesScore >= 5 &&
                              facility.amenitiesScore < 6
                            ? { width: "55%" }
                            : facility.amenitiesScore >= 6 &&
                              facility.amenitiesScore < 7
                            ? { width: "65%" }
                            : facility.amenitiesScore >= 7 &&
                              facility.amenitiesScore < 8
                            ? { width: "75%" }
                            : facility.amenitiesScore >= 8 &&
                              facility.amenitiesScore < 9
                            ? { width: "85%" }
                            : facility.amenitiesScore >= 9 &&
                              facility.amenitiesScore <= 9.5
                            ? { width: "95%" }
                            : facility.amenitiesScore > 9.5
                            ? { width: "100%" }
                            : { width: "0%" }
                        }
                      ></div>
                    </div>
                  </div>
                  <div className="side right col-3">
                    <div>
                      {facility.amenitiesScore}{" "}
                      <em>({facility.totalNumberOfReviews})</em>
                    </div>
                  </div>
                  <hr style={{ marginBottom: "30px" }} />
                  <div className="side col-3">
                    <div>
                      <i className="category-icon fa-solid fa-people-group" />
                      Staff
                    </div>
                  </div>
                  <div className="middle col-6">
                    <div className="bar-container">
                      <div
                        className="bar-score"
                        style={
                          facility.staffScore >= 1 && facility.staffScore < 2
                            ? { width: "15%" }
                            : facility.staffScore >= 2 &&
                              facility.staffScore < 3
                            ? { width: "25%" }
                            : facility.staffScore >= 3 &&
                              facility.staffScore < 4
                            ? { width: "35%" }
                            : facility.staffScore >= 4 &&
                              facility.staffScore < 5
                            ? { width: "45%" }
                            : facility.staffScore >= 5 &&
                              facility.staffScore < 6
                            ? { width: "55%" }
                            : facility.staffScore >= 6 &&
                              facility.staffScore < 7
                            ? { width: "65%" }
                            : facility.staffScore >= 7 &&
                              facility.staffScore < 8
                            ? { width: "75%" }
                            : facility.staffScore >= 8 &&
                              facility.staffScore < 9
                            ? { width: "85%" }
                            : facility.staffScore >= 9 &&
                              facility.staffScore <= 9.5
                            ? { width: "95%" }
                            : facility.staffScore > 9.5
                            ? { width: "100%" }
                            : { width: "0%" }
                        }
                      ></div>
                    </div>
                  </div>
                  <div className="side right col-3">
                    <div>
                      {facility.staffScore}{" "}
                      <em>({facility.totalNumberOfReviews})</em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-body">
          <div className="profile-review-container">
            <h2 className="profile-h2">Reviews</h2>

            {reviews.map((review) => (
              <div className="profile-cards">
                <div className="profile-card">
                  <div className="profile-card-top">
                    <div className="profile-name">
                      <div className="profile-img one" alt="">
                        AN
                      </div>
                      <p>Anonymous</p>
                    </div>
                    <div className="profile-rate">
                      <div>
                        {review.overallScore >= 0 && review.overallScore <= 0.6
                          ? loadIcon({ id: 11 })
                          : review.overallScore > 0.6 &&
                            review.overallScore <= 1.4
                          ? loadIcon({ id: 10 })
                          : review.overallScore >= 1.4 &&
                            review.overallScore <= 2.4
                          ? loadIcon({ id: 9 })
                          : review.overallScore > 2.4 &&
                            review.overallScore <= 3.4
                          ? loadIcon({ id: 8 })
                          : review.overallScore > 3.4 &&
                            review.overallScore <= 4.4
                          ? loadIcon({ id: 7 })
                          : review.overallScore > 4.4 &&
                            review.overallScore <= 5.4
                          ? loadIcon({ id: 6 })
                          : review.overallScore > 5.4 &&
                            review.overallScore <= 6.4
                          ? loadIcon({ id: 5 })
                          : review.overallScore > 6.4 &&
                            review.overallScore <= 7.4
                          ? loadIcon({ id: 4 })
                          : review.overallScore > 7.4 &&
                            review.overallScore <= 8.4
                          ? loadIcon({ id: 3 })
                          : review.overallScore > 8.4 &&
                            review.overallScore <= 9.4
                          ? loadIcon({ id: 2 })
                          : review.overallScore > 9.4 &&
                            review.overallScore <= 10
                          ? loadIcon({ id: 1 })
                          : loadIcon({ id: 11 })}
                      </div>
                    </div>
                  </div>

                  <div className="profile-card-content">
                    <p>{review.feedbackComments}</p>
                  </div>

                  <div className="profile-card-action">
                    <span>{review.initialReviewDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return FacilityProfile.renderFacilityProfile(
      this.state.facility,
      this.state.reviews
    );
  }

  async populateFacilitySearchResultData() {
    console.log(window.location.href);
    var facilityName = window.location.href.split("/").pop();
    const response = await fetch(window.location.href);
    const data = await response.json();
    const reviewResponse = await fetch("Review/" + facilityName);
    const reviewData = await reviewResponse.json();

    this.setState({ facility: data, loading: false, reviews: reviewData });
  }
}
