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
                        We respect the unique and sensitive nature of the aged care sector. Our guidelines strive to 
                        ensure that all reviews and responses are respectful, helpful and informative. These guidelines 
                        may be updated from time to time. 
                    </p>

                    <p id="TOUText">
                        By posting a rating, review or response, you must ensure that the information you upload complies 
                        with our terms and conditions/ guidelines. We do not guarantee that anything that is submitted 
                        will be used on our website, or will stay on the website permanently.
                        Before a review is published ACCRA will check it against our moderation guidelines. These
                        reviews may then be modified or declined at the discretion of ACCRA. Where declined, ACCRA may, 
                        but is not required to, notify the reviewer via email why a review was declined. Reviews can be 
                        declined due to inappropriate content, language or for any other reason that ACCRA determines 
                        appropriate.
                    </p>    
                    <p id="TOUText">    
                        Please note as we moderate every review or response it can take some time before we publish what 
                        you write (typically 48 hours, but sometimes more, for example, if the review is posted over the 
                        weekend). All ratings and reviews must have the user's email verified before it will be posted. 
                        ACCRA will provide the reviewer with the option to not have their name published on the website 
                        and made available to providers.
                        The privacy of the reviewer and the privacy of others is important. Reviews or responses
                        must not identify individuals in an attempt to negatively affect the reputation of an individual
                        (this also applies to any information that could be reasonably used to identify an individual).
                    </p>
                    <p id="TOUText">
                        We may not publish reviews or responses that negatively impact the reputation of an
                        individual.
                        Reviews and responses have the power to influence others in the aged care sector. It's important 
                        that you only talk about your own experience.
                        Hearsay is not a review and most likely will not be posted after moderation.
                        Reviews that are not factual will be moderated before being posted
                        Reviews that are second-hand information will not be published
                        Comments about things that are not relevant to the service given by a provider may be removed 
                        and not published
                        If any review or response has the following included it will not be published:
                        Swearing, comments that may be, or encourage behaviour that is:
                        Offensive;
                        Abusive;
                        Defamatory;
                        Discriminatory;
                        Harassing;
                        Unlawful, or
                        Otherwise harmful
                        
                        Political commentary
                        Advertisements for products or services
                        Accusations of criminal conduct, or comments on anything we know is currently
                        being investigated by authorities.
                        Factual inaccuracies or information that could mislead or deceive someone
                        Content that infringes on someone else’s protected information, like their intellectual
                        property, or information that is confidential or personal
                        Reviews that are repetitive
                        Other comments that we reasonably believe are in violation of any applicable laws, or guidelines 
                        published by the Australian Competition and Consumer Commission, or other relevant regulatory 
                        body from time to time.
                    </p>
                    <p id="TOUText">
                        Providers have the option to provide a single response to approved reviews. Providers have a 
                        limited period to provide a response (generally 14 days) which can be extended at ACCRA’s 
                        discretion.
                    </p>
                    <p id="TOUText">
                        Before a provider's response is published ACCRA will check it against our moderation guidelines. 
                        Responses may be modified or declined at the discretion of ACCRA. Where declined, ACCRA may, but 
                        is not required to, notify the responder via email why a response was declined. Responses can be 
                        declined due to inappropriate content, language or for any other reason that ACCRA determines 
                        appropriate. Names may be removed for privacy purposes.
                        We will not publish or will remove reviews that we know have been written by a provider about 
                        their own service. We will remove or will not publish reviews that are presented as impartial, 
                        but are found to have been written by a provider, a provider’s competitor or by a person paid or 
                        induced to write the review.
                        ACCRA reserves the right to notify authorities where ACCRA believes an illegal activity may have 
                        occurred.
                    </p>
            </div>
        );
    }
}