const path = require("path");
const EVENT_NAME = "Freezing Edge";
const CONFERENCE_ID = "freezing-edge-2019";

module.exports = {
  apiUrl: "https://api.react-finland.fi/graphql",
  conferenceId: CONFERENCE_ID,
  template: {
    file: path.resolve(__dirname, "templates/page.ejs"),
    context: {
      helmet: {},
    },
  },
  renderPage: require("./utils/render-page"),
  output: "build",
  layout: () => require("./layouts/SiteBody").default,
  paths: {
    "404.html": page("404", {
      description: "Page was not found",
      title: "Page not found",
    }),
    "/": page(
      "index",
      {
        title: EVENT_NAME,
        description: `${EVENT_NAME} (12-13.11.2019, Helsinki) is a conference that comes with a workshop day and a day of live coding.`,
      },
      {
        conferenceId: CONFERENCE_ID,
      }
    ),
    "for-attendees": page("for-attendees", {
      title: "For Attendees",
      description: `What should I know as a ${EVENT_NAME} attendee`,
    }),
    "for-speakers": page("for-speakers", {
      title: "For Speakers",
      description: `What should I know as a ${EVENT_NAME} speaker?`,
    }),
    "for-sponsors": page("for-sponsors", {
      title: "For Sponsors",
      description: `What should I know as a ${EVENT_NAME} sponsor?`,
    }),
    about: page("about", {
      title: "Organizers",
      description: `Who is organizing ${EVENT_NAME}?`,
    }),
    imprint: page("imprint", {
      title: "Imprint",
      description: `How to reach ${EVENT_NAME} organizers?`,
    }),
    "privacy-policy": page("privacy-policy", {
      title: "Privacy Policy",
      description: `What is the privacy policy of ${EVENT_NAME}?`,
    }),
    schedule: page(
      "schedule",
      {
        title: "Schedule",
        description: `What is the schedule of ${EVENT_NAME}?`,
      },
      {
        conferenceId: CONFERENCE_ID,
      }
    ),
    speakers: page(
      "speakers",
      {
        title: "Speakers",
        speakers: `Who is going to speak at ${EVENT_NAME}?`,
      },
      {
        conferenceId: CONFERENCE_ID,
      }
    ),
    workshops: page(
      "workshops",
      {
        title: "Workshops",
        description: `Which workshops will be held at ${EVENT_NAME}?`,
      },
      {
        conferenceId: CONFERENCE_ID,
      }
    ),
  },
};

function page(name, meta = {}, parameters) {
  const ret = () => {
    let pageComponent = require(`./pages/${name}`).default;

    if (parameters) {
      pageComponent = pageComponent(parameters);
    }

    pageComponent.description = meta.description;
    pageComponent.title = meta.title;

    return pageComponent;
  };

  ret.name = name;

  return ret;
}
