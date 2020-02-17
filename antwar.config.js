const _ = require("lodash");
const path = require("path");
const EVENT_NAME = "Freezing Edge";
const CONFERENCE_ID = "freezing-edge-2020";

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
        description: `${EVENT_NAME} (01.06.2020, Helsinki) is a one day live coding workshop and meetup.`,
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
    blog: {
      content: () => require.context("./pages/blog", false, /^\.\/.*\.md$/),
      index: () => {
        const index = require("./layouts/BlogIndex").default;

        index.title = "Blog";
        index.description = "";

        return index;
      },
      layout: () => require("./layouts/BlogPage").default,
      transform: pages =>
        generateAdjacent(_.sortBy(pages, "file.attributes.date")).reverse(),
      url: ({ sectionName, fileName }) =>
        `/${sectionName}/${cleanBlogPostName(fileName)}/`,
    },
  },
};

function cleanBlogPostName(resourcePath) {
  const parts = resourcePath.split("/");
  const beginning = parts.slice(0, -1);
  const end = _.trimStart(parts.slice(-1)[0], "0123456789-_");

  return beginning
    .concat(end)
    .join("/")
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/_/g, "-");
}

function generateAdjacent(pages) {
  return pages.map((page, i) => {
    const ret = _.cloneDeep(page); // Avoid mutation

    ret.previous = i > 0 && pages[i - 1];
    ret.next = i < pages.length - 1 && pages[i + 1];

    return ret;
  });
}

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
