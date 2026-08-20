const contactList = document.querySelector('#contact-list');
if (contactList) {
  contactList.innerHTML = `
    <li><a href="mailto:farhioren@gmail.com">farhioren@gmail.com</a></li>
    <li><a href="https://github.com/orizens" target="_blank" rel="noopener">github.com/orizens</a></li>
    <li><a href="https://www.linkedin.com/in/orenfarhi/" target="_blank" rel="noopener">linkedin.com/in/orenfarhi</a></li>
  `;
}

const work = document.querySelector('#work-experience');

const experiences = [
  {
    role: 'Senior & Lead UI Engineer',
    date: '2026 - Present',
    company: 'Zscaler',
    tagline: 'Hands-on architect and engineer building scalable UI solutions with React and TypeScript while establishing modern testing practices and mentoring engineers.',
    projects: [
      ['Architecture & Testing', 'Redesigned E2E infrastructure around reusable base fixtures and simplified components for E2E and visual regression testing.'],
      ['Mentorship', 'Provided hands-on technical guidance and helped upskill 5+ engineers.'],
      ['Tech', 'React, Vite, MUI, TypeScript, TanStack Table, GraphQL, TanStack Query, Vitest, Playwright, CSS, GitHub Actions.']
    ]
  },
  {
    role: 'Lead UI Engineer',
    date: '2024 - 2026',
    company: 'HighRes BioSolutions',
    tagline: 'Hands-on technical lead driving UI architecture, React and TypeScript engineering practices, automated testing and developer mentorship.',
    projects: [
      ['Architecture & Development', 'Designed, built and shipped production UI with React, TypeScript and Playwright.'],
      ['Quality', 'Established BDD and automated testing practices with Playwright to improve confidence in UI releases.'],
      ['Tech', 'React, Vite, TypeScript, Tailwind, TanStack Query, CSS, Playwright.']
    ]
  },
  {
    role: 'CTO & Lead Software Engineer',
    date: '2023 - 2024',
    company: 'AKTO SPACE',
    tagline: 'Technical advisor and hands-on engineering leader responsible for architecture and development of a desktop application from the ground up.',
    projects: [
      ['Architecture & Development', 'Designed and developed a desktop application using Electron, React and Node.js.'],
      ['Technical Advisory', 'Advised on desktop and web architecture with a focus on integrating video interaction as a core product capability.'],
      ['Tech', 'React, TypeScript, Electron, Node.js, Chakra UI, CSS.']
    ]
  },
  {
    role: 'Senior Frontend Tech Lead / Engineer',
    date: '2022 - 2023',
    company: 'Rivery',
    tagline: 'Hands-on technical lead driving a major migration from Angular 1 to React, Redux Toolkit and RTK Query while modernizing architecture, testing and developer workflows.',
    projects: [
      ['Architecture', 'Designed and implemented a new frontend architecture that simplified the development model and made features faster to add and maintain.'],
      ['Modernization', 'Led hands-on refactoring of the codebase, modernized the technology stack and improved development and production workflows.'],
      ['Mentorship', 'Mentored 4 engineers through code reviews, pairing sessions and technical discussions around React and frontend testing.'],
      ['E2E Quality', 'Built and shipped 230+ tested user scenarios with Cypress, establishing E2E coverage from the ground up.'],
      ['Tech', 'React, Redux Toolkit, RTK Query, TypeScript, Chakra UI, SCSS, Cypress, Cucumber/Gherkin, Testing Library, Storybook, GitHub Actions.']
    ]
  },
  {
    role: 'Head of Frontend Engineering / Tech Lead',
    date: '2020 - 2022',
    company: '1Care.ai',
    tagline: 'Led frontend development across web and mobile applications while combining architecture, hands-on engineering, UX and team leadership.',
    projects: [
      ['Architecture', 'Designed an application architecture supporting interchangeable web and mobile development.'],
      ['Leadership', 'Led and coordinated a team of 3 developers through planning, code review and technical discussions.'],
      ['UX', 'Defined UX solutions for product challenges and improved the overall user experience.'],
      ['Tech', 'React, React Native, TypeScript, Redux Toolkit, GraphQL, Cypress, Cucumber/Gherkin, Jest, Testing Library, AWS Amplify, Git.']
    ]
  },
  {
    role: 'Senior Frontend Engineer & Consultant',
    date: '2018 - 2020',
    company: 'Tangent Logic',
    tagline: 'Developed production web applications and consulted with startups and enterprise teams on frontend architecture, quality and engineering practices.',
    projects: [
      ['Consulting', 'Delivered frontend engineering for clients including Lifion using React, Node.js, TypeScript and modern testing practices.'],
      ['Engineering Quality', 'Built reusable, well-tested applications and contributed through code reviews and architecture discussions.'],
      ['Tech', 'React, Angular, TypeScript, Redux, NgRx, Jest, Enzyme, Testing Library, Sass, CSS.']
    ]
  },
  {
    role: 'Senior Frontend Engineer & Consultant',
    date: '2016 - 2018',
    company: 'Orizens',
    tagline: 'Independent frontend engineering and consulting across React, Angular, Redux, NgRx, TypeScript and modern web technologies.',
    projects: [
      ['ReadM - Co-Founder', 'Built an AI-powered reading practice platform that helps educators assess reading fluency and provides actionable insights for students.', 'https://readm.app'],
      ['Open Source', 'Created and maintained JavaScript and Angular packages used by organizations including Google, Microsoft, Amazon, Disney and SAP, with more than one million downloads.', 'https://www.npmjs.com/~orizens'],
      ['Technical Writing', 'Published technical articles and engineering insights through Orizens.com.']
    ]
  },
  {
    role: 'Senior Frontend Engineer / Frontend Architect',
    date: '2010 - 2016',
    company: 'Tikal Knowledge',
    tagline: 'Built web applications while serving as a technical leader for the JavaScript group and supporting engineering enablement across the organization.',
    projects: [
      ['Technical Leadership', 'Led the JavaScript engineering group, including recruiting, mentoring and technical direction.'],
      ['Developer Enablement', 'Hosted JavaScript workshops, spoke about web development and contributed technical writing.'],
      ['Architecture & Quality', 'Consulted for customers and improved testing, component architecture and accessibility practices.']
    ]
  },
  {
    role: 'UI Frontend Developer',
    date: '2008 - 2010',
    company: 'Comverse',
    tagline: 'Developed web GUI applications and led UI assignments involving JavaScript architecture, UX, componentization and CSS design systems.',
    projects: [
      ['UI Architecture', 'Refactored JavaScript UI into a component-based architecture and led CSS design system work.'],
      ['Leadership', 'Led GUI assignments, wrote design documents and provided UI and UX solutions.']
    ]
  },
  {
    role: 'Web Developer & Designer',
    date: '2005 - 2010',
    company: 'Orizens.com',
    tagline: 'Designed and developed websites and web applications for customers while building an early foundation in product and full-stack web development.',
    projects: [
      ['Product Development', 'Founded VisitWeb, a free online event management service, while delivering web projects for customers.'],
      ['Tech', 'JavaScript, CSS, HTML, PHP, WordPress, Flash, ActionScript and VBA.']
    ]
  }
];

const renderProject = ([name, description, link]) => {
  const title = link ? `<a href="${link}" target="_blank" rel="noopener">${name}</a>` : name;
  return `<li><strong>${title}</strong> - ${description}</li>`;
};

if (work) {
  work.innerHTML = experiences.map(({ role, date, company, tagline, projects }) => `
    <article class="item">
      <div class="header">
        <h2>${role}</h2>
        <div class="date">${date}</div>
      </div>
      <div class="row"><div class="company">${company}</div></div>
      <p>${tagline}</p>
      <ul>${projects.map(renderProject).join('')}</ul>
    </article>
  `).join('');
}
