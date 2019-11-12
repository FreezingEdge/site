import React from "react";
import {
  AnchorHeader,
  Contacts,
  ContactMini,
  Markdown,
  connect,
} from "components";

const intro = `
In this single track, live coding focused event, you will learn about topics you would probably not hear otherwise.

Freezing Edge is a [React Finland](https://react-finland.fi) spin-off and it will be held right after the React focused event. In contrast to React Finland, it's a broad spectrum event that puts focus on live performance.

Although normal conferences have their place, the standard format can get a little predictable after a while. The purpose of Freezing Edge is to focus on the technologies of the future, hence the name. We want to show you what's upcoming and what developers in other domains are currently working on.

You should expect to learn about different aspects of multimedia (audio, graphics, extended reality) and programming languages of the future at least!

The conference takes place 01.06.2020 and the weather isn't going to be freezing, unfortunately.

[Read more about the conference!](/blog/freezing-edge-2020/)`;

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
    <AnchorHeader level={2}>Tickets</AnchorHeader>
    <div className="intro--main">
      <p>
        The tickets for Freezing Edge begin from 199 eur (VAT included). The
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
    </div>
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
