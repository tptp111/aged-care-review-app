import React, {Component} from 'react';
import '../styles/Main.css';
import '../styles/pages/Home.css';
export class FacilitySearchResults extends Component {
    static displayName = FacilitySearchResults.name;

    constructor(props) {
        super(props);
        this.state = {facilities: [], loading: true};
    }

    componentDidMount() {
        this.populateFacilitySearchResultData();
    }

    static renderFacilitySearchCards(facilities) {
        return (
            <div>
                {facilities.map(facility =>
                    <div className='facility-card-list col-lg-8 col-sm-10'>
                        <article className="card">
                            <img src='/images/facility/benetas.png'/>
                            <div className="card-body">
                                <h1 className="card-title">{facility.facilityName}</h1>
                                <p><b>Overall Rating: </b>
                                    {facility.overallScore} / 5 <i>({facility.totalNumberOfReviews} reviews)</i></p>
                                {/*<h6>{facility.street} {facility.suburbName} {facility.postcode}{}</h6>*/}
                                <hr/>
                                {/*<p className="card-text"><b>Description: </b>{facility.description}</p>*/}
                                <a href="#" className="btn btn-primary text-right">View Facility</a>
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
            : FacilitySearchResults.renderFacilitySearchCards(this.state.facilities);
        return (
            <div>
                <h1>Facility Search Results</h1>
                <p className="screen-description">View a list of available properties that match your search criteria</p>
                {contents}
            </div>
        );
    }

    async populateFacilitySearchResultData() {
        const response = await fetch('facilitysearchresult');
        const data = await response.json();
        this.setState({facilities: data, loading: false});
    }
}
