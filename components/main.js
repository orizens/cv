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
    href: 'http://orizens.com/cv',
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
  <span class="fa fa-laptop section-title-icon"></span> Work Experience
</h2>
      ` +
  [
    {
      role: 'Front End Engineer / Tech Lead',
      date: '2020 - Present',
      company: 'Stealth Startup',
      tagline:
        'Leading Front End Development for Web & Mobile Apps using: React, React Native (Android/iOS), Typescript, Redux, Redux Toolkit, SCSS, Cypress, Cucumber/Gherkin, Jest, Testing Library, Jira, GraphQL, AWS/Amplify, Git',
      clientTitle: ``,
      clients: [],
      projectsTitle: `Responsibilities:`,
      projects: [
        [`Architecture`, `Designing & Developing The Front End Architecture`],
        [`Product`, `Leading and planning the project tasks with jira`],
        [`Team Lead`, `Leading and coordinating development in a small team`],
        [`UX`, `Designing and defining UX solutions`],
      ],
    },
    {
      role: 'Senior Front End Engineer & Consultant',
      date: '2018 - 2020',
      company: 'Tangent Logic , Full-Time',
      tagline:
        'Developing Web Applications using React, Angular, Typescript, Redux, NGRX, Javascript, SASS',
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
              href="http://www.orizens.com"
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
          `A Book reading app that provides real time feedback to readers using speech recognition, while creating a positive and fun experience .`,
          `https://readm.netlify.app`,
        ],
        [
          `Echoes Player`,
          `free & open source media player based on youtube api, developed with Javascript and Angular.`,
          `https://echoesplayer.com`,
        ],
        [
          `Orizens Npm Packages`,
          `Open Source npm packages (used by <strong>Google</strong>, <strong>Microsoft</strong>, <strong>Amazon</strong>, <strong>Disney</strong>, <strong>Sap</strong> and more) for Javascript development and Angular.`,
          `https://npmjs.com/~orizens`,
        ],
      ],
    },
    {
      role: 'Senior Frond End Engineer, Front End Architect',
      date: '2010 - 2016',
      company: 'Tikal Knowledge, Full-Time',
      tagline: `Developing Web Applications using Javascript, CSS3 & HTML5, Node.js. In addition, Tech Leading Tikal’s Javascript Group
          - recruiting experts, Speaker, hosting js workshops, writing at the company’s blog about JS & Web Development
          as well as consulting for various customers.`,
      projectsTitle: ``,
      projects: [],
      highlight: true,
      clientTitle: `Clients i've worked with:`,
      clients: [
        [
          `ADP`,
          `Developing Web Application using: React, Ecmascript 2015, Bootstrap + SASS, Jasmine & karma, Git`,
        ],
        [
          `Takadu`,
          `Designing & Developing Web Application using: Angular.js, Ecmascript 2015, Gulp.js, Bootstrap
            + SASS, Node.js (for REST), Jasmine & karma, Git &, Mercurial, BitBucket`,
        ],
        [
          `Perion`,
          `Designing & Developing Javascript Web Application using: Angular.js, Gulp.js, Bootstrap + LESS,
            Node.js (for REST), Jasmine & karma, Git & Github`,
        ],
        [
          `Verix`,
          `Leading Javascript Engineer and Front End Architect with - Angular.js, Backbone.js, Require.js, HTML5,
            CSS3 & LESS development, Yeoman (Bower, Grunt.js), Jasmine`,
        ],
        [
          `Optier`,
          `Javascript Engineer and Front End Architect Converting a GWT project to Javascript - Backbone.js,
            Require.js, HTML5, CSS3 & Sass development`,
        ],
        [
          `Time To Know (ltd)`,
          `Leading Javascript Engineer and Front End Architect with Javascript - Backbone.js, Require.js,
            HTML5 & CSS3 development`,
        ],
        [
          `Conduit`,
          `Front End Architecture, HTML, CSS3 & Javascript Development`,
        ],
        [`Clarizen`, `Javascript Development & Consulting, Usability`],
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
      projectsTitle: `Responsibilities:`,
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
