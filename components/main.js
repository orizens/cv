//============================
//    Contact List
//============================
const ul = document.querySelector('#contact-list');
ul.innerHTML = [
  {
    href: 'mailto:farhioren@gmail.com',
    icon: 'envelope-o',
    text: 'farhioren@gmail.com',
  },
  {
    href: 'https://orizens.com/cv',
    icon: 'link',
    text: 'orizens.com/cv',
  },
]
  .map(({ href, icon, text }) => {
    return `
<li>
  <a
    href="${href}"
    class="unstyled-links">
      <span class="fa fa-${icon}"></span>
      ${text}
  </a>
</li>
            `;
  })
  .join('');
[
  {
    text: '+1 (646) 753 4899',
  },
  {
    text: '+1 (551) 246 0056',
  },
].forEach(({ text }) => {
  const li = document.createElement('li');
  li.innerHTML = `
              <span class="fa fa-phone"></span>
              <strong>${text}</strong>
            `;
  ul.appendChild(li);
});
//============================
//    Work Experience
//============================
const work = document.querySelector('#work-experience');
work.innerHTML =
  `
<h2 class="cv-section-name">
  <span class="fa fa-laptop section-title-icon"></span> Experience
</h2>
      ` +
  [
    {
      role: 'CTO & Lead Software Engineer',
      date: '2023 - Present',
      company: 'AKTO SPACE',
      tagline:
        'Advisingn on tech direction and leading the development of the desktop application from start to finish with elecron.js and react',
      clientTitle: ``,
      clients: [],
      projectsTitle: `Highlights:`,
      projects: [
        [`Architecture & Development`, `Designing & Developing Desktop App with web technologies`],
        [`Advistory / CTO`, `Specializing as a technical advisor for both desktop and web applications written in JS & TS, with a focus on seamlessly integrating video interaction as a core component of the product.`],
        [`Tech`, `React, Typescript, CSS, ChakraUI, Electron.js, and Node.js.`]
      ]
    },
    {
      role: 'Senior Front End Tech Lead / Engineer',
      date: '2022 - 2023',
      company: 'Rivery',
      tagline:
        'Leading a migration of an old Angular 1 app to React, Redux & RTK-Query with full system design integration with ChakraUI in collaboration with backend team.',
      clientTitle: ``,
      clients: [],
      projectsTitle: `Highlights:`,
      projects: [
        [`Architecture`, `Reduced the mental model for development and adding and updating features.`],
        [`Technical Front End Lead`, `Reduced defects by updating tech and decreasing dev and prod build times.`],
        [`Mentoring`, `Mentored 4 team members on react and front end testing with: code review, discussions and following front end best practices.`],
        [`Tech`, `React, RTK Toolkit (Redux), RTK Query, Typescript, Chakra UI, SCSS, Cypress (+ Cypress Cloud), Cucumber/Gherkin, Testing Library, StoryBook, Git, Github Actions`],
        [`E2E`, `Increased the e2e coverage, and mentored the team for test driven development - shipped well tested +230 user scenarios with cypress.`],
      ],
    },
    {
      role: 'Head of Front End Engineering / Tech Lead',
      date: '2020 - 2022',
      company: '1Care.ai',
      tagline:
        'Leading front end development with 2 junior engineers and 1 intermidate engineer to create the web & mobile applications.',
      clientTitle: ``,
      clients: [],
      projectsTitle: `Highlights:`,
      projects: [
        [`Architecture`, `responsible for making code interchangeable with both web and mobile`],
        [`Product`, `Planning out tasks to keep the project moving forward each week with jira`],
        [`Team Lead & Mentoring`, `Leading and coordinating development of a team of 3 developers, code review and discussions.`],
        [`Tech`, `React, React Native (Android/iOS), Typescript, Redux, Redux Toolkit, Blueprint, SCSS, Cypress, Cucumber/Gherkin, Jest, Testing Library, Jira, GraphQL, AWS/Amplify, Git`],
        [`UX`, `Designing and defining the UX solutions for the ui challanges and improving the user experience.`],
      ],
    },
    {
      role: 'Senior Front End Engineer & Consultant',
      date: '2018 - 2020',
      company: 'Tangent Logic , Full-Time',
      tagline:
        'Developing web applications and making sure code is reusable and well tested with React, Redux, Angular, Typescript, Redux, NGRX, Javascript, SASS, CSS.',
      clientTitle: 'Consulting to startups and large companies on:',
      highlight: true,
      clients: [
        [
          'Lifion',
          'Front End Development with: React, Node.js, Jest, Enzyme, Testing Library, Typescript, Sass, Code Reviews',
        ],
      ],
    },
    {
      role: 'Senior Front End Engineer & Consultant',
      date: '2016 - 2018',
      company: 'Orizens (Self Owned) , Full-Time',
      tagline: `Developing Web Applications with  React, Angular, Redux, NgRx, Typescript, CI/CD and Web Technologies. Writing at the <a
              href="https://www.orizens.com"
              target="_blank">
              Orizens.com Blog</a> - Thoughts about Javascript Development.`,
      clientTitle: 'Consulting to startups and large companies on:',
      clients: [
        ['Javascript Development', 'for any projects'],
        ['Angular, NGRX', 'Project Development (using best practices)'],
        ['Responsive Web Apps', 'Using CSS Responsive Best Practices'],
        ['GatsbyJS', 'Creating React Based Websites'],
        ['AngularJS', 'Migarting To Angular (+2)'],
        ['Project Bootstraping with js Testing (bdd/tdd)', 'unit & e2e'],
        ['JS UI Architecture Code', 'Scalable'],
        ['Code Reviews', 'applying all the above'],
        ['Conduct Workshops', 'javascript & angular'],
      ],
      projectsTitle: 'Personal Projects',
      highlight: true,
      projects: [
        [
          `ReadM (co-founder)`,
          `empowers teachers by providing an automated smart assessment tool for monitoring students' reading fluency (K-4th and ESL/ELL's students), while providing live reports with up to date insights.`,
          `https://readm.app`,
        ],
        [
          `Echoes Player`,
          `free & open source media player based on youtube api, developed with Javascript and Angular.`,
          `https://echoesplayer.netlify.app`,
        ],
        [
          `Orizens Npm Packages`,
          `Open Source npm packages (used by <strong>Google</strong>, <strong>Microsoft</strong>, <strong>Amazon</strong>, <strong>Disney</strong>, <strong>Sap</strong> and more) for Javascript development and Angular, downloaded over Million times.`,
          `https://npmjs.com/~orizens`,
        ],
      ],
    },
    {
      role: 'Senior Frond End Engineer, Front End Architect',
      date: '2010 - 2016',
      company: 'Tikal Knowledge, Full-Time',
      tagline: `Developing Web Applications using Javascript, Angular, Backbone and Readt, CSS & HTML, Node.js. In addition, Tech Leading Tikal’s Javascript Group
          - recruiting experts, Speaker, hosting js workshops, writing at the company’s blog about JS & Web Development
          as well as consulting for various customers.`,
      projectsTitle: ``,
      projects: [],
      highlight: true,
      clientTitle: `Clients i've worked with:`,
      clients: [
        [
          `ADP`,
          `Improved test coverage and components accessiblity with storybook and react.`,
        ],
        [
          `Takadu`,
          `Developed web app from start to finish with design system implementation.`,
        ],
        [
          `Perion`,
          `Led fullstack app from start to finish with auth and api integration in a front team of 2 people.`,
        ],
        [
          `Verix`,
          `Leading web app from start to finish which led to clients growth.`,
        ],
        [
          `Optier`,
          `Designed and developed web app while supporting junior developers`,
        ],
        [
          `Time To Know (ltd)`,
          `Defined the web app front end architecture and developed it with backbone.js as a base, interating server api's.`,
        ],
        [
          `Conduit`,
          `Developed new features to ship a desktop application.`,
        ],
        [`Clarizen`, `Developed new features for the web app and fixed incoming bugs.`],
      ],
    },
    {
      role: `UI Front End Developer`,
      date: `2008 - 2010`,
      company: `Comverse, Full-Time`,
      tagline: `Developed Web GUI for an internal web application using OOP Javascript, Ajax, HTML, CSS, XML & XSLT, Regex. Leading
          GUI assignments in a team, writing design documents and providing UI & UX solutions.`,
      clientTitle: ``,
      clients: [],
      projectsTitle: `Highlights:`,
      projects: [
        [
          `Architecture`,
          `Refactoring Javascript UI to a Component based architecture`,
        ],
        [`Implementation`, `Complete separation of XSLT and JS`],
        [`Style`, `Leading UI concepts with CSS design`],
      ],
    },
    {
      role: `Web Developer & Web Designer Freelance`,
      date: `2005 - 2010`,
      company: `Orizens.com, Full-Time`,
      tagline: `Designing & Developing websites for various customers around the country using: HTML, JS, CSS, PHP, Wordpress,
          Flash & Actionscript, Swishmax, VBA.`,
      projectsTitle: `Personal Projects`,
      highlight: true,
      projects: [
        [
          `VisitWeb`,
          `free online event management service for planning events, seating arrangements, developed with 
            Javascript`,
        ],
      ],
    },
  ]
    .map(
      ({
        template,
        role,
        date,
        company,
        tagline,
        projectsTitle,
        clients,
        projects,
        clientTitle,
        highlight = false,
      }) => {
        const renderSection = function (arr, title, icon) {
          if (!title) return '';
          const renderLabel = (link, name) =>
            link ? `<a href="${link}">${name}</a>` : name;
          const listHtml = arr
            .map(
              ([name, desc, link]) =>
                `<li>
                  <span class="fa fa-${icon}"></span> 
                  ${
                    highlight
                      ? '<span class="item-client">' +
                        renderLabel(link, name) +
                        '</span>'
                      : name
                  } - ${desc}
                </li>
                `
            )
            .join('');
          return `
        <h3>${title}</h3>
        <ul class="list-unstyled">
          ${listHtml}
        </ul>
      `;
        };
        return `
      <div class="item">
        <section class="header">
          <h2>${role}</h2>
          <h4 class="date">
          <span class="fa fa-calendar"></span>${date}
          </h4>
        </section>
        <div class="row">
          <h4 class="company">
            <span class="fa fa-building-o"></span> ${company}
          </h4>
        </div>
        <p>${tagline}</p>
        ${renderSection(clients, clientTitle, 'at')}
        ${renderSection(projects, projectsTitle, 'code-fork')}
      </div>
      `;
      }
    )
    .join('');
