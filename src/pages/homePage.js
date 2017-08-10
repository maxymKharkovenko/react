import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../data/events';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

export default class homePage extends React.Component {

  render() {
    return (
      <div className="home-page">
        <BigCalendar className="calendar"
          events={events}
          views={allViews}
          defaultDate={new Date()}/>

        <div className="create-contact">
          <div className="form-group row">
            <label for="example-text-input" className="col-2 col-form-label">First Name</label>
            <div className="col-10">
              <input className="form-control" type="text" placeholder="First Name" id="example-first-input"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="example-search-input" className="col-2 col-form-label">Last Name</label>
            <div className="col-10">
              <input className="form-control" type="search" placeholder="Last Name" id="example-last-input"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="example-email-input" className="col-2 col-form-label">Email</label>
            <div className="col-10">
              <input className="form-control" type="email" placeholder="xxx@example.com" id="example-email-input"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="example-url-input" className="col-2 col-form-label">URL</label>
            <div className="col-10">
              <input className="form-control" type="url" placeholder="https://google.com" id="example-url-input"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="example-tel-input" className="col-2 col-form-label">Telephone</label>
            <div className="col-10">
              <input className="form-control" type="tel" placeholder="x-(xxx)-xxx-xxx" id="example-tel-input"/>
            </div>
          </div>
          <div className="form-group row">
            <label for="example-number-input" className="col-2 col-form-label">Position</label>
            <div className="col-10">
              <input className="form-control" type="text" placeholder="Position" id="example-position-input"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}