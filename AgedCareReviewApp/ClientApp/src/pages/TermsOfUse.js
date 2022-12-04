import React, { Component } from 'react';
import '../styles/pages/TermsOfUse.css';
import {Link} from "react-router-dom";


export class TermsOfUse extends Component {
    static displayName = TermsOfUse.name;


    render() {
        return (
            <div className='col-lg-12 col-sm-12'>
                <img className='logo-img-TOU' src='/images/favicon.png' alt="image logo" width="200" height="185" />
                <p>

                </p>

                <h1 id="TOU-h1">Terms of Use</h1>
                <p id="TOUText">
                    Our guidelines aim to reflect the sensitivity and uniqueness of aged care.  With this in mind, we will safe-guard that all reviews and their responses are in line with our guidelines, which include informative, respectful and being useful. Our guidelines may be updated at our discretion.

                </p>

                <p id="TOUText">

                    You must ensure when posting a review, rating or response to a review, that you adhere to our guidelines at all times. Prior to publishing a review, ACCRA will verify its contents, in line with our moderation policy. Once this has been completed, ACCRA will either approve, decline or modify it at its discretion.  No guarantee is made that what you submit will remain on the website on a permanent basis.

                    The reasons for which a review can be declined, may include (but not limited to) inappropriate language, content or for anything else deemed necessary by ACCRA.
                </p>
                <p id="TOUText">
                    Please be advised, that there maybe be a delay between you submit a review, and when it may actually be published.  This I due to our moderation process, which usually takes 48-72 hours.  This may take longer if the review is posted during a weekend.

                    It is obligatory that the requested user’s information be accurate, accompanying the review, and verified prior to posting.

                    ACCRA will allow the reviewer to remain anonymous on the website and from aged care providers(by not having their name visible).

                    We value all interested party’s privacy, therefore a review must not contain any information that might identify them.
                </p>
                <p id="TOUText">
                    When completing a review, it is important to avoid hearsay, and instead relate your personal experiences only.  It is important to bare in mind that reviews or response have the ability to influence the reader and may affect the facility’s reputation in a negative manner.  Therefore, honesty and accuracy is vital.  Any reviews not adhering to the aforementioned will either be moderated or not posted.

                    In the advent that a review or response contains any of the below, it will either be moderated or not published.  Comments including ones that are sexist, racist, harassing, unlawful, abusive, advertisements, any accusations of criminal conduct that are currently under investigation, and factually incorrect.
                </p>
                <p id="TOUText">
                    Aged care providers are afforded the opportunity to provide one response to a review about them which has been published. There is a limited period of time (usually 2 weeks) for which they have the opportunity to do this.  This timeframe may be extended at the discretion of ACCRA.
                </p>
                <p id="TOUText">
                    Prior to an aged care provider's response being published, this response will be verified by ACCRA to ensure that it complies with our moderation guidelines. Once this has been completed, ACCRA will either approve, decline or modify it at its discretion.  ACCRA is under no obligation to notify an aged care provider that their response has been declined, if indeed this is the case.

                    In the advent that ACCRA has reason to believe that an illegal action has taken place, it receives the right to contact authorities regarding this.
                </p>
            </div>
        );
    }
}