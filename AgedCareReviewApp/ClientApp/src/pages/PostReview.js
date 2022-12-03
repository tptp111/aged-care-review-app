import React, { Component } from "react";
import "../styles/pages/PostReview.css";
import { Link, Navigate } from "react-router-dom";
import { SlideBar } from "../components/SlideBar";
import { Hint } from "../components/Hint";
import authService from "../components/api-authorization/AuthorizeService";

export class PostReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigate: false,
      userEmail: "",
      popoverOpen: false,
      facilityName: "Melbourne Aged Care",
      reviewScores: [
        {
          name: "care",
          value: 0,
        },
        {
          name: "food",
          value: 0,
        },
        {
          name: "amenities",
          value: 0,
        },
        {
          name: "staff",
          value: 0,
        },
        {
          name: "activities",
          value: 0,
        },
        {
          name: "safety",
          value: 0,
        },
      ],
      overallScore: 0,
      feedbackComments: "",
    };

    this.updateScore = this.updateScore.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this._subscription = authService.subscribe(() =>
      this.populateUserDetails()
    );
    this.populateUserDetails();
  }

  componentWillUnmount() {
    authService.unsubscribe(this._subscription);
  }

  async populateUserDetails() {
    const user = await Promise.all([authService.getUser()]);
    this.state.userEmail = user[0].name;
  }

  updateScore(event) {
    this.state.reviewScores[event.target.id].value = parseInt(
      event.target.value
    );
    let sum = 0;
    this.state.reviewScores.forEach((i) => {
      sum += i.value;
    });
    this.state.overallScore = (sum / 6).toFixed(2);
    var updatedState = this.state;
    this.setState(updatedState);
  }

  handleCommentChange(event) {
    this.state.feedbackComments = event.target.value;
  }

  async handleSubmit(event) {
    event.preventDefault();
    const token = await authService.getAccessToken();

    const today = new Date();
    const date =
      today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();

    let review = {
      id: 0,
      userEmail: this.state.userEmail,
      initialReviewDate: date,
      feedbackComments: this.state.feedbackComments,
      overallScore: this.state.overallScore,
      facilityName: this.state.facilityName,
      qualityOfCareScore: this.state.reviewScores[0].value,
      foodScore: this.state.reviewScores[1].value,
      amenitiesScore: this.state.reviewScores[2].value,
      staffScore: this.state.reviewScores[3].value,
      activityProgramsScore: this.state.reviewScores[4].value,
      safetyScore: this.state.reviewScores[5].value,
    };

    const response = await fetch("Review", {
      method: "POST",
      headers: !token
        ? {}
        : {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
      body: JSON.stringify(review),
    });

    if (response.ok) {
      this.setState({ navigate: true });
    }
  }

  render() {
    let nav = this.state.navigate;
    return (
      <div className="rev-column">
        {nav && <Navigate to="/ReviewConfirmation" replace={true} />}
        <h1 id="rev-h1-title"> Facility Review - {this.state.facilityName}</h1>
        <h1 id="rev-h1">Instructions</h1>
        <p id="rev-p">
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

        <h1 id="rev-h1">Facility Performance</h1>
        <div className="rev-horizontal-line"> </div>
        <p id="rev-p">
          Please provide your ratings for the below on a scale from 0 to 10.{" "}
          <br />
          <br />
          It is important you spend time thinking about each questions before
          answering.
        </p>
        <form className="review-form" onSubmit={this.handleSubmit}>
          <div className="rating-container">
            <div className="rating-container-header">
              <label form="temp" id="rev-comment-heading">
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
            <SlideBar id="careSlideBar" index={0} onChange={this.updateScore} />
          </div>

          <div className="rating-container">
            <div className="rating-container-header">
              <label form="temp" id="rev-comment-heading">
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
            <SlideBar id="foodSlideBar" index={1} onChange={this.updateScore} />
          </div>

          <div className="rating-container">
            <div className="rating-container-header">
              <label form="temp" id="rev-comment-heading">
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
              id="amenitiesSlideBar"
              index={2}
              onChange={this.updateScore}
            />
          </div>

          <div className="rating-container">
            <div className="rating-container-header">
              <label form="temp" id="rev-comment-heading">
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
              id="staffSlideBar"
              index={3}
              onChange={this.updateScore}
            />
          </div>

          <div className="rating-container">
            <div className="rating-container-header">
              <label form="temp" id="rev-comment-heading">
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
              id="activitiesSlideBar"
              index={4}
              onChange={this.updateScore}
            />
          </div>

          <div className="rating-container">
            <div className="rating-container-header">
              <label form="temp" id="rev-comment-heading">
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
              id="safetySlideBar"
              index={5}
              onChange={this.updateScore}
            />
          </div>

          <h1 id="rev-h1">Overall Rating</h1>

          <div className="rating-container">
            <p id="rev-comment-heading">
              We've determined the overall rating below based on your answers.
            </p>
            <h1>Overall Rating: {this.state.overallScore} / 10</h1>
          </div>

          <h1 id="rev-h1">Additional Comments</h1>
          <div className="rev-horizontal-line"></div>
          <div className="rating-container">
            <label id="rev-comment-heading">
              How would you describe your experience at this aged care facility?
            </label>
            <textarea
              id="review-comments-input"
              name="review-comments"
              placeholder="Please enter your comments here..."
              onChange={this.handleCommentChange}
              required
            ></textarea>
          </div>
          <input
            className="b b-primary"
            id="rev-submit-button"
            type="submit"
            value="Submit Review"
          />
        </form>
      </div>
    );
  }
}
