import React from "react";
import {
  AnchorHeader,
  Contacts,
  ContactMini,
  Markdown,
  connect,
} from "components";

const intro = `
In this single live coding focused event you will learn more about topics you would likely not hear otherwise while connecting with the broader developer community.

The workshops take place 12.11 while the actual conference is held 13.11.`;

const secondary = `
By the way, we proudly follow [Berlin code of conduct](http://berlincodeofconduct.org/).

[Join React Finland Slack to connect with other attendees!](https://join.slack.com/t/react-finland/shared_invite/enQtMzQ0NDM1ODczMjE2LTJlZmUxNDEyMThkYzYxNDI0OTQ5ZDc5MTQ0N2Q5OGMwZmM1ZmI0ZDlkMzgxNDk5YTEzMDJiOGY2MjFlNzAxODk)
`;

const Index = ({ conference }) => (
  <>
    <section className="intro intro_home">
      <div className="intro--main">
        <Markdown source={intro} />
      </div>
      <aside className="intro--aside">
        <Markdown source={secondary} />
      </aside>
    </section>
    {/*<AnchorHeader level={2}>MCs</AnchorHeader>
    <div className="grid--full speakers">
      <Contacts items={conference && conference.mcs} render={ContactMini} />
    </div>
    <AnchorHeader level={2}>Workshop Instructors</AnchorHeader>
    <div className="grid--full speakers">
      <Contacts
        items={
          conference &&
          [].concat(...conference.workshops.map(workshop => workshop.speakers))
        }
        render={ContactMini}
      />
      </div>*/}
    <AnchorHeader level={2}>Speakers</AnchorHeader>
    <div className="grid--full speakers">
      <Contacts
        items={conference && conference.speakers}
        render={ContactMini}
      />
    </div>
    {/*<AnchorHeader level={2}>Tickets</AnchorHeader>
    <div className="grid--full">
      Not available at the moment.
      <tito-widget event="freezing-edge/2019">
        Loading. Patience my padawan!
      </tito-widget>
    </div>*/}
  </>
);

export default ({ conferenceId }) =>
  connect(
    `
fragment SpeakerFragment on Contact {
  name
  about
  social {
    homepage
    github
    twitter
    linkedin
  }
  image {
    url
  }
}

query PageQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    mcs {
      ...SpeakerFragment
    }
    workshops {
      speakers {
        ...SpeakerFragment
      }
    }
    speakers {
      ...SpeakerFragment
    }
  }
}
`,
    () => ({
      conferenceId,
    })
  )(Index);
