import React from "react";
import { Markdown } from "components";

const intro = `
Freezing Edge is a spin-off of [React Finland](https://react-finland.fi) conference arranged 1st of June, 2020 in Helsinki as a single day live coding focused event.`;

const main = `
## International Speakers

The eight speakers of the conference have varying backgrounds and our roster includes many of the leading names from the community. The single track format allows our visitors to get most out of the experience.

## Focused Audience

We expect the audience to be mostly local. Our target is to attract up to 200 attendees although the proximity of React Finland will likely extend the reach.

## Your Spot to Shine

We are offering the perfect spot for companies to promote their knowledge and presence in the developer ecosystem through sponsorships. In addition, there will be also side activities with speakers and organizers to connect and communicate with top level professionals.

## Packages

| | BRONZE | SILVER | GOLD
| - | - | - |
| Cost (VAT 0) | 1.000 € | 3.000 € | 5.000 €
| Available | 5 | 3 | 2
| Conference tickets | 2 x &#9786; | 4 x &#9786; | 6 x &#9786;
| Visibility on social media and website | &#9786; | &#9786; &#9786; | &#9786; &#9786; &#9786;
| Logo size on website and app | &#9786; | &#9786; &#9786; | &#9786; &#9786; &#9786;
| Banner in conference | &#10003; | &#10003; | &#10003;
| Banner on stage | | | &#10003;
| Speaker area access | &#10003; | &#10003; | &#10003;
| Logo on slides between the talks | &#10003; | &#10003; | &#10003;
| Job announcements | | &#10003; | &#10003;
| Area in sponsor lounge for booths / promotion | | &#10003; | &#10003;
| Item in the goodie bag* | | | &#10003;
| Attendance for the speaker events (e.g. the speakers' dinner) | | | &#9786;
| Special requests | | | &#10003;

> \* means we'll let people decide whether they want swag and what kind of swag they want as we're environmentally conscious. If attendees don't want swag, we'll use the equivalent amount of money for charity instead.

## How to Sponsor?

If you are interested in any of our sponsorship packages, get in touch (info <at> react-finland.fi)!
`;

const ForSponsors = () => (
  <>
    <section className="intro intro_sponsors">
      <div className="intro--main">
        <Markdown source={intro} />
      </div>
      <aside className="intro--aside" />
    </section>
    <div className="grid--5col">
      <Markdown source={main} />
    </div>
  </>
);

export default ForSponsors;
