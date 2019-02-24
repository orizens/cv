'use strict';
const { Component, h, render } = window.preact;

/** Example classful component */
class App extends Component {
  state = data;

  componentDidMount() {}
  render(props, state) {
    return h(
      'div',
      { id: 'cv' },
      h(
        'div',
        { className: 'cv-section first-cv-section fixed' },
        h(Header, state.profile),
        h(ContactInfo, state.profile)
      )
    );
  }
}

/** Components can just be pure functions */
const Header = props => {
  return h(
    'div',
    { className: 'person' },
    h('img', { src: dataProfileImage, style: 'width: 120px' }),
    h('h1', null, data.profile.name),
    h('h2', null, data.profile.role)
  );
};

const ContactInfo = props => {
  return h(
    'div',
    { id: 'contact-info' },
    h(
      'ul',
      {
        className: 'list-unstyled'
      },
      data.profile.contact.map(item => ContactItem(item))
    )
  );
};
const ContactItem = props => {
  return h(
    'li',
    null,
    h(
      'a',
      {
        href: props.href,
        className: `unstyled-links`
      },
      h('span', { className: `fa fa-${props.icon}` }, props.text)
    )
  );
};

// render(h(App), document.body);
render(h(Header), document.querySelector('.first-cv-section'));
render(h(ContactInfo), document.querySelector('.first-cv-section'));
