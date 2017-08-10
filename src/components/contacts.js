import React from 'react';

class Article extends React.Component {
  render() {
    let name = this.props.data.name,
      phone = this.props.data.phone,
      key = this.props.index;

    return (
      <div className='article' id={key}>
        <p className='news__author'>{name}</p>
        <p className='news__text'>{phone}</p>
      </div>
    )
  }
}

export default class Contacts extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.props.state;
    this.onSearch = this.props.options.onSearch;
    this.onUserClick = this.props.options.onUserClick;
  }
  render() {
    let data = this.props.data;
    let contactsTemplate;
    let onUserClick = this.onUserClick;

    if (data.length > 0) {
      contactsTemplate = data.map(function (item, index) {
        return (
          <div key={index} onClick={onUserClick}>
            <Article data={item} index={index} key={index} onClick={onUserClick}/>
          </div>
        )
      })
    } else {
      contactsTemplate = <p>no contacts by your request</p>
    }

    return (
      <div className='contacts'>
        <div className="contact-search">
          <input onChange={this.onSearch.bind(this)}/>
        </div>
        <div className="container-list">
          {contactsTemplate}
        </div>
        <strong className={'news__count ' + (this.props.data.length > 0 ? '' : 'none') }>Total: {this.props.data.length}</strong>
      </div>
    );
  }
}