import React from "react";
import {
  /*AnchorHeader,
  Contacts,
  ContactMini,*/
  Markdown,
  connect,
} from "components";

const intro = `
In this live coding focused workshop/meetup you will learn about topics you would probably not hear otherwise. The paid workshop will take place before the meetup that's open for all.

The first meetup takes place 01.06.2020 and the weather isn't going to be freezing, unfortunately. More details to come!`;

const secondary = `
By the way, we proudly follow [Berlin code of conduct](http://berlincodeofconduct.org/).

[Join React Finland Slack to connect with other attendees!](https://join.slack.com/t/react-finland/shared_invite/enQtMzQ0NDM1ODczMjE2LTI3MjZlZGNjNTNkOTU5N2E1OWYxYzY0MWE0Y2NiNWMxMWZiMWEyYjc4MmM1ZDQwZmFhOTkyODBmM2E4NjcxZjM)
`;

const Index = () => (
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
      </div>
    <AnchorHeader level={2}>Speakers</AnchorHeader>
    <div className="grid--full speakers">
      <Contacts
        items={conference && conference.speakers}
        render={ContactMini}
      />
    </div>
    <AnchorHeader level={2}>Tickets</AnchorHeader>
    <div className="intro--main">
      <p>
        The tickets for Freezing Edge begin from 99 eur (VAT included). The
        ticket includes access to the one day conference, lunch, snacks during
        the breaks, and an afterparty.
      </p>
    </div>
    <div className="buy-container">
      <a
        className="buy-button"
        href="https://fienta.com/freezing-edge-2020?dc887244cff3ca32249a722f217ad0d6"
      >
        Buy tickets
      </a>
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
