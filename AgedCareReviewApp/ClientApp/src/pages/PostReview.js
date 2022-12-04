import React, { Component } from "react";
import "../styles/pages/PostReview.css";
import { Link, Navigate } from "react-router-dom";
import { SlideBar } from "../components/SlideBar";
import { Hint } from "../components/Hint";

export class PostReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigate: false,
      popoverOpen: false,
      facilityName: "Melbourne Aged Care",
      firstName:"",
      lastName:"",
      userEmail:"",
      userType:"I am a current / past resident at this facility",
      medicareNumber:"",
      overallScore: 0,
      qualityOfCareScore: 0,
      foodScore: 0,
      amenitiesScore: 0,
      staffScore: 0,
      activityProgramsScore: 0,
      safetyScore: 0,
      feedbackComments: "",
      errors: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateScore(event) {
    const index = event.target.id;
    const value = parseInt(event.target.value);
    this.setState({[index]: value}, () => {
      this.calculateOverall();
    });
  }

  calculateOverall() {
    const { qualityOfCareScore, foodScore, amenitiesScore, staffScore, activityProgramsScore, safetyScore } = this.state;
    const sum = qualityOfCareScore
       + foodScore
       + amenitiesScore
       + staffScore 
       + activityProgramsScore 
       + safetyScore;

    this.state.overallScore = (sum / 6).toFixed(2);
    var updatedState = this.state;
    this.setState(updatedState);
  }

  handleInputChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({[id]: value});
  }

  applyValidations() {
     const { firstName, lastName, userEmail, medicareNumber, feedbackComments } = this.state;
     let isValid = true;
     const errors = {};

     if (firstName.trim().length === 0) {
      errors.firstNameLength = "Please enter your first name";
      isValid = false;
     }

     if (lastName.trim().length === 0) {
      errors.lastNameLength = "Please enter your last name";
      isValid = false;
     }

     if (userEmail.trim().length === 0) {
      errors.userEmailLength = "Please enter your email address";
      isValid = false;
     }

     if (medicareNumber.trim().length === 0) {
      errors.medicareNumberLength = "Please enter your medicare number";
      isValid = false;
     }

     if (feedbackComments.trim().length === 0) {
      errors.feedbackCommentsLength = "Please enter your additional comments";
      isValid = false;
     }

     this.setState({ errors });
     return isValid;
  }

  async handleSubmit(event) {
    event.preventDefault();
    const isValid = this.applyValidations();

    if (!isValid)
      return;

    const today = new Date();
    const date =
      today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();

    let review = {
      id: 0,
      reviewValidated: false,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userEmail: this.state.userEmail,
      medicareNumber: this.state.medicareNumber,
      userType: this.state.userType,
      initialReviewDate: date,
      feedbackComments: this.state.feedbackComments,
      overallScore: this.state.overallScore,
      facilityName: this.state.facilityName,
      qualityOfCareScore: this.state.qualityOfCareScore,
      foodScore: this.state.foodScore,
      amenitiesScore: this.state.amenitiesScore,
      staffScore: this.state.staffScore,
      activityProgramsScore: this.state.activityProgramsScore,
      safetyScore: this.state.safetyScore,
    };

    const response = await fetch("Review", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(review),
    });

    if (response.ok) {
      this.setState({ navigate: true });
    }
  }

  render() {
    let nav = this.state.navigate;
    const errors = this.state.errors;
    return (
      <div className="rev-column">
        {nav && <Navigate to="/ReviewConfirmation" replace={true} />}
        <h1 className="rev-h1-title">
          {" "}
          Facility Review - {this.state.facilityName}
        </h1>
        <h1 className="rev-h1">Instructions</h1>
        <p className="rev-p">
          Your review will consist of rating the facility performance and
          providing your comments in line with your experience. <br />
          <br />
          Please take time and care when providing responses. All reviews are
          subject to moderation in accordance with our{" "}
          <Link to="/TermsOfUse">
            <a>Terms of use</a>
          </Link>
          . <br />
          <br />
          Hover over the{" "}
          <img
            data-toggle="popover"
            className="hint"
            src="/images/LightBulb.png"
            alt="light bulb"
          />{" "}
          for some more guidance on the questions.
        </p>
        <form className="review-form needs-validation" onSubmit={this.handleSubmit}>
          <h1 className="rev-h1">Your Details</h1>
          <div className="rating-container">
            <div className="rating-container-header">
              <label form="temp" className="rev-comment-heading">
                Please tell us about yourself.
              </label>
              <div className="info">
                <Hint
                  title="Personal Data"
                  content="This information is used to manually verify the legitimacy of your review. After your review is verified by our staff, it will be displayed on the facility profile page."
                  placement="left"
                  trigger="hover"
                />
              </div>
            </div>
            <div className="form-group rev-form-group">
              <label className="rev-comment-heading">
                First name
              </label>
              <input
                type="text"
                className={"form-control form-control-lg rev-form-input " + (errors.firstNameLength ? "is-invalid" : "")}
                id="firstName"
                placeholder="Enter your first name"
                onChange={this.handleInputChange}
              />
              <small
                id="firstNameHelp"
                className="form-text text-muted rev-small-error"
              >{errors.firstNameLength}</small>
            </div>
            <div className="form-group rev-form-group">
              <label className="rev-comment-heading">
                Last name
              </label>
              <input
                type="text"
                className={"form-control form-control-lg rev-form-input " + (errors.lastNameLength ? "is-invalid" : "")}
                id="lastName"
                placeholder="Enter your last name"
                onChange={this.handleInputChange}
              />
              <small
                id="firstNameHelp"
                className="form-text text-muted rev-small-error"
              >{errors.lastNameLength}</small>
            </div>
            <div className="form-group rev-form-group">
              <label className="rev-comment-heading">
                Email address
              </label>
              <input
                type="text"
                className={"form-control form-control-lg rev-form-input " + (errors.userEmailLength ? "is-invalid" : "")}
                id="userEmail"
                placeholder="Enter your email address"
                onChange={this.handleInputChange}
              />
              <small
                id="firstNameHelp"
                className="form-text text-muted rev-small-error"
              >{errors.userEmailLength}</small>
            </div>
            <div className="form-group rev-form-group">
              <label className="rev-comment-heading">
                Medicare number
              </label>
              <input
                type="text"
                className={"form-control form-control-lg rev-form-input " + (errors.medicareNumberLength ? "is-invalid" : "")}
                id="medicareNumber"
                placeholder="Enter your medicare number"
                onChange={this.handleInputChange}
              />
              <small
                id="firstNameHelp"
                className="form-text text-muted rev-small-error"
              >{errors.medicareNumberLength}</small>
            </div>
            <div className="form-group rev-form-group">
              <label className="rev-comment-heading">
                Which of the following best described you?
              </label>
              <select
                class="form-control form-control-lg rev-form-input"
                id="userType"
                onChange={this.handleInputChange}
              >
                <option>I am a current / past resident at this facility</option>
                <option>
                  I am a carer of a current / past resident at this facility
                </option>
                <option>I am a current / past employee at this facility</option>
                <option>Other</option>
              </select>
              <small
                id="firstNameHelp"
                className="form-text text-muted"
              ></small>
            </div>
            <label form="temp" className="rev-comment-footer">
              We use this information to verify your identity.
            </label>
          </div>
          <h1 className="rev-h1">Facility Performance</h1>
          <div className="rev-horizontal-line"> </div>
          <p className="rev-p">
            Please provide your ratings for the below on a scale from 0 to 10.{" "}
            <br />
            It is important you spend time thinking about each questions before
            answering.
          </p>
          <div className="rating-container">
            <div className="rating-container-header">
              <label form="temp" className="rev-comment-heading">
                How would you rate the <strong>quality of care</strong> at{" "}
                {this.state.facilityName}?
              </label>
              <div className="info">
                <Hint
                  title="Quality of care"
                  content="
                    <ul>
                      <li>Dressing timely and neat.</li>
                      <li>Toileting timely and not waiting too long for help.</li>
                      <li>Cared for with dignity and respect.</li>
                    </ul>"
                  placement="left"
                  trigger="hover"
                />
              </div>
            </div>
            <SlideBar index={"qualityOfCareScore"} onChange={this.updateScore} />
          </div>

          <div className="rating-container">
            <div className="rating-container-header">
              <label form="temp" className="rev-comment-heading">
                How would you rate the <strong>food</strong> at{" "}
                {this.state.facilityName}?
              </label>
              <div className="info">
                <Hint
                  title="Food"
                  content="
                      <ul>
                        <li>Given choice as to what to eat.</li>
                        <li>Presentation and taste.</li>
                        <li>Served warm when needed.</li>
                        <li>Variety of menu.</li>
                        <li>Assistance with eating if needed.</li>
                        <li>Snacks available during the day.</li>
                      </ul>"
                  placement="left"
                  trigger="hover"
                />
              </div>
            </div>
            <SlideBar index={"foodScore"} onChange={this.updateScore} />
          </div>

          <div className="rating-container">
            <div className="rating-container-header">
              <label form="temp" className="rev-comment-heading">
                How would you rate the <strong>physical facilities</strong> at{" "}
                {this.state.facilityName}?
              </label>
              <div className="info">
                <Hint
                  title="Physical Facilities"
                  content="
                      <ul>
                        <li>Clean and tidy.</li>
                        <li>Accessibility (e.g. automatic doors, wide hallways).</li>
                        <li>Lighting (not too bright, not too dark).</li>
                      </ul>"
                  placement="left"
                  trigger="hover"
                />
              </div>
            </div>
            <SlideBar
              index={"amenitiesScore"}
              onChange={this.updateScore}
            />
          </div>

          <div className="rating-container">
            <div className="rating-container-header">
              <label form="temp" className="rev-comment-heading">
                How would you rate the <strong>quality of staff</strong> at{" "}
                {this.state.facilityName}?
              </label>
              <div className="info">
                <Hint
                  title="Staff"
                  content="
                      <ul>
                        <li>Caring.</li>
                        <li>Friendly.</li>
                        <li>Treat you with dignity and respect.</li>
                        <li>Knowledgeable.</li>
                        <li>Well groomed.</li>
                        <li>Adequate numbers of staff for each shift.</li>
                      </ul>"
                  placement="left"
                  trigger="hover"
                />
              </div>
            </div>
            <SlideBar
              index={"staffScore"}
              onChange={this.updateScore}
            />
          </div>

          <div className="rating-container">
            <div className="rating-container-header">
              <label form="temp" className="rev-comment-heading">
                How would you rate the quality of the{" "}
                <strong>activities program</strong> at {this.state.facilityName}
                ?
              </label>
              <div className="info">
                <Hint
                  title="Activities Program"
                  content="
                        <ul>
                          <li>Consultation.</li>
                          <li>Variety.</li>
                          <li>Stimulating.</li>
                          <li>Availability of external activities.</li>
                        </ul>"
                  placement="left"
                  trigger="hover"
                />
              </div>
            </div>
            <SlideBar
              index={"activityProgramsScore"}
              onChange={this.updateScore}
            />
          </div>

          <div className="rating-container">
            <div className="rating-container-header">
              <label form="temp" className="rev-comment-heading">
                Do you feel <strong>safe</strong> at {this.state.facilityName}?
              </label>
              <div className="info">
                <Hint
                  title="Safety"
                  content="
                        Have you experienced any of the following?
                        <ul>
                          <li>Falls.</li>
                          <li>Pressure sores.</li>
                          <li>Skin tears.</li>
                          <li>Bruised skin.</li>
                          <li>Missed or late medication provided.</li>
                          <li>Abuse (neglect, financial, physical, sexual, other).</li>
                        </ul>"
                  placement="left"
                  trigger="hover"
                />
              </div>
            </div>
            <SlideBar
              index={"safetyScore"}
              onChange={this.updateScore}
            />
          </div>

          <h1 className="rev-h1">Overall Rating</h1>

          <div className="rating-container">
            <p className="rev-comment-heading">
              We've determined this overall rating below based on your answers.
            </p>
            <h1 className="rev-overall">
              Overall Rating: {this.state.overallScore} / 10
            </h1>
          </div>

          <h1 className="rev-h1">Additional Comments</h1>
          <div className="rev-horizontal-line"></div>
          <div className="rating-container">
            <label className="rev-comment-heading">
              How would you describe your experience at this aged care facility?
            </label>
            <textarea
              className={"review-comments-input form-control " + (errors.feedbackCommentsLength ? "is-invalid" : "")}
              rows="5"
              id="feedbackComments"
              placeholder="Please enter your comments here..."
              onChange={this.handleInputChange}
            ></textarea>
            <small
              id="firstNameHelp"
              className="form-text text-muted rev-small-error"
            >{errors.feedbackCommentsLength}</small>
          </div>
          <p className="review-error-summary" style={(Object.keys(errors).length === 0 ? {display: 'none'} : {})}>Please ensure each field is filled out correctly.</p>
          <input
            className="b b-primary rev-submit-button"
            type="submit"
            value="Submit Review"
          />
        </form>
      </div>
    );
  }
}