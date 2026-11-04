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
      role: 'Senior & Lead UI Engineer',
      date: '2026 - Present',
      company: 'ZScaler',
      tagline:
        'Architecting scalable UI solutions and establishing engineering standards (TDD, test infrastructure, build performance) while upskilling 5+ engineers through direct mentorship.',
      clientTitle: ``,
      clients: [],
      projectsTitle: `Highlights:`,
      projects: [
        [`Quality systems`, `redesigned E2E infrastructure with base fixtures and simplified reusable components for e2e & visual regression tests, so teams ship with confidence.`],
        [`Standards & mentoring`, `established TDD standards and mentored 5+ engineers through code reviews and pairing.`],
        [`Delivery speed`, `reduced build times with modern tooling (Vite, Bun).`],
        [`Tech`, `React, Vite, MUI, Typescript, Tanstack-Table, GraphQL, Tanstack-Query, Vitest, Playwright, CSS, GitHub Actions.`]
      ]
    },
    {
      role: 'Lead UI Engineer',
      date: '2024 - 2026',
      company: 'HighRes BioSolutions',
      tagline:
        'Led UI engineering in a life-science lab automation environment: introduced BDD with Playwright to reduce UI production bugs, mentored team members and established React & TypeScript best practices.',
      clientTitle: ``,
      clients: [],
      projectsTitle: `Highlights:`,
      projects: [
        [`Quality & release safety`, `BDD with Playwright (component and integration testing) to reduce UI production bugs, plus feature flags for safer rollouts.`],
        [`Delivery speed`, `reduced build times (Vite, Bun) and CI run times for unit and E2E tests.`],
        [`Architecture & standards`, `designed and shipped UI architecture with React & TypeScript and set best practices for the team.`],
        [`Tech`, `React, Vite, Typescript, Tailwind, Tanstack-Query, CSS, Playwright (component and integration testing).`]
      ]
    },
    {
      role: 'CTO & Lead Software Engineer',
      date: '2023 - 2024',
      company: 'AKTO SPACE',
      tagline:
        'Owned technical direction as CTO and led development of a desktop application from start to finish with Electron.js and React.',
      clientTitle: ``,
      clients: [],
      projectsTitle: `Highlights:`,
      projects: [
        [`CTO / technical direction`, `set the technical strategy for desktop and web applications written in JS & TS, with video interaction as a core component of the product.`],
        [`Architecture & delivery`, `designed and delivered the desktop app with web technologies, from architecture to release.`],
        [`Tech`, `React, Typescript, CSS, ChakraUI, Electron.js, and Node.js.`]
      ]
    },
    {
      role: 'Senior Front End Tech Lead / Engineer',
      date: '2022 - 2023',
      company: 'Rivery',
      tagline:
        'Led the migration from Angular 1 to React, Redux & RTK-Query: defined the architecture, integrated ChakraUI and worked closely with the backend team.',
      projectsTitle: `Highlights:`,
      projects: [
        [`Architecture`, `designed and implemented a new architecture that reduced the mental model for development, making it faster to add and update features.`],
        [`Technical lead`, `updated the tech stack and reduced defects and dev and prod build times.`],
        [`Growth & experimentation`, `worked on signup funnels, onboarding and analytics instrumentation, and used feature flags for controlled rollouts.`],
        [`Mentoring`, `mentored 4 engineers through code reviews, pairing sessions, and discussions on React and front end testing best practices.`],
        [`Quality`, `wrote and shipped 230+ tested user scenarios with Cypress, growing e2e coverage from the ground up while coaching the team on TDD.`],
        [`Tech`, `React, RTK Toolkit (Redux), RTK Query, Typescript, Chakra UI, SCSS, Cypress (+ Cypress Cloud), Cucumber/Gherkin, Testing Library, StoryBook, Git, Github Actions`],
      ],
    },
    {
      role: 'Head of Front End Engineering / Tech Lead',
      date: '2020 - 2022',
      company: '1Care.ai',
      tagline:
        'Led the front end team (2 junior engineers and 1 intermediate engineer) to create the web & mobile applications.',
      clientTitle: ``,
      clients: [],
      projectsTitle: `Highlights:`,
      projects: [
        [`Team leadership`, `led and coordinated a team of 3 developers, with code reviews and technical discussions.`],
        [`Delivery planning`, `planned weekly tasks in Jira to keep the project moving forward.`],
        [`Architecture`, `made code interchangeable between web and mobile.`],
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
      clientTitle: '',
      clients: [
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
      role: 'Senior Front End Engineer, Front End Architect',
      date: '2010 - 2016',
      company: 'Tikal Knowledge, Full-Time',
      tagline: `Developing Web Applications using Javascript, Angular, Backbone and React, CSS & HTML, Node.js. In addition, Tech Leading Tikal’s Javascript Group
          - recruiting experts, Speaker, hosting js workshops, writing at the company’s blog about JS & Web Development
          as well as consulting for various customers, improved test coverage and components accessiblity with storybook and react.`,
      projectsTitle: ``,
      projects: [],
      highlight: true,
      clientTitle: ``,
      clients: []
    },
    {
      role: `UI Front End Developer`,
      date: `2008 - 2010`,
      company: `Comverse, Full-Time`,
      tagline: `Developed Web GUI for an internal web application using OOP Javascript, Ajax, HTML, CSS, XML & XSLT, Regex. Leading
          GUI assignments in a team, writing design documents and providing UI & UX solutions, refactoring Javascript UI to a Component based architecture and leading design system with CSS`,
      clientTitle: ``,
      clients: [],
      projectsTitle: ``,
      projects: [
      ],
    },
    {
      role: `Web Developer & Web Designer Freelance`,
      date: `2005 - 2010`,
      company: `Orizens.com, Full-Time`,
      tagline: `Designing & Developing websites for various customers around the country using: HTML, JS, CSS, PHP, Wordpress,
          Flash & Actionscript, Swishmax, VBA. Founder of VisitWeb - free online event management service.`,
      projectsTitle: ``,
      highlight: true,
      projects: [
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
