import React, {Component} from 'react';
import '../styles/Main.css';
import '../styles/pages/Home.css';
import '../styles/pages/FacilitySearchResults.css';
import {Link, useParams, useLocation} from 'react-router-dom';
export class FacilitySearchResults extends Component {

    static displayName = FacilitySearchResults.name;

    constructor(props) {
        super(props);
        this.state = {facilities: [], loading: true, postcode: ""};
    }

    componentDidMount() {
        this.populateFacilitySearchResultData();
    }

    static renderFacilitySearchCards(facilities, postcode) {
        return (
            <div>
                <h3 className="facility-count">There are {facilities.length} facilities which match your criteria</h3>
                {facilities.map(facility =>
                    <div className='facility-card-list col-lg-8 col-sm-10'>
                        <article className="card">
                            <img src={facility.facilityImagePath}/>
                            <div className="card-body">
                                <h1 className="card-title">{facility.facilityName}</h1>
                                <p><b>Overall Rating: </b>
                                    {facility.overallScore / 2} / 5 <i>({facility.totalNumberOfReviews} reviews)</i></p>
                                <hr/>
                                <Link to={'/facilityprofile/' + facility.facilityName }>
                                <button className="btn btn-primary text-right">View Facility</button>
                                </Link>
                            </div>
                        </article>
                    </div>
                    )
                    }
                    </div>
                    );
                }


                render() {
                let contents = this.state.loading
                ? <p><em>Searching For Properties ....</em></p>
                : FacilitySearchResults.renderFacilitySearchCards(this.state.facilities, this.state.postcode);
                return (
                <div>
                <h1>Facility Search Results</h1>
            {contents}
                </div>
                );
            }

                async populateFacilitySearchResultData() {
                var postcode = window.location.href.split("/").pop();
                const response = await fetch('facilitysearchresult/' + postcode);
                const data = await response.json();
                this.setState({facilities: data, loading: false, postcode: postcode});
            }
                }
