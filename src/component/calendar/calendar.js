import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-title">
          <h4>Calendar</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-3">
              <a className="btn btn-lg btn-success btn-block waves-effect waves-light" href="#" data-toggle="modal" data-target="#modal-category">
                <i className="fa fa-plus" /> Create News
                </a>
              <div className="m-t-20" id="external-events">
                <br />
                <p>Drag and drop your event or click in the calendar</p>
                <div className="external-event bg-primary ui-draggable ui-draggable-handle" style={{ position: 'relative' }} data-class="bg-primary">
                  <i className="fa fa-move" />New Theme Release
                  </div>
                <div className="external-event bg-pink ui-draggable ui-draggable-handle" style={{ position: 'relative' }} data-class="bg-pink">
                  <i className="fa fa-move" />My Event
                  </div>
                <div className="external-event bg-warning ui-draggable ui-draggable-handle" style={{ position: 'relative' }} data-class="bg-warning">
                  <i className="fa fa-move" />Meet manager
                  </div>
                <div className="external-event bg-dark ui-draggable ui-draggable-handle" style={{ position: 'relative' }} data-class="bg-dark">
                  <i className="fa fa-move" />Create New theme
                  </div>
              </div>
              {/* checkbox */}
              <div className="checkbox m-t-40">
                <input id="drop-remove" type="checkbox" />
                <label htmlFor="drop-remove">
                  Remove after drop
                  </label>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card-box">
                <div className="fc fc-unthemed fc-ltr" id="calendar"><div className="fc-toolbar fc-header-toolbar"><div className="fc-left"><div className="fc-button-group"><button className="fc-prev-button fc-button fc-state-default fc-corner-left" type="button"><span className="fc-icon fc-icon-left-single-arrow" /></button><button className="fc-next-button fc-button fc-state-default fc-corner-right" type="button"><span className="fc-icon fc-icon-right-single-arrow" /></button></div><button disabled className="fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right fc-state-disabled" type="button">today</button></div><div className="fc-right"><div className="fc-button-group"><button className="fc-month-button fc-button fc-state-default fc-corner-left fc-state-active" type="button">month</button><button className="fc-agendaWeek-button fc-button fc-state-default" type="button">week</button><button className="fc-agendaDay-button fc-button fc-state-default fc-corner-right" type="button">day</button></div></div><div className="fc-center"><h2>June 2019</h2></div><div className="fc-clear" /></div><div className="fc-view-container"><div className="fc-view fc-month-view fc-basic-view"><table><thead className="fc-head"><tr><td className="fc-head-container fc-widget-header"><div className="fc-row fc-widget-header"><table><thead><tr><th className="fc-day-header fc-widget-header fc-sun"><span>Sun</span></th><th className="fc-day-header fc-widget-header fc-mon"><span>Mon</span></th><th className="fc-day-header fc-widget-header fc-tue"><span>Tue</span></th><th className="fc-day-header fc-widget-header fc-wed"><span>Wed</span></th><th className="fc-day-header fc-widget-header fc-thu"><span>Thu</span></th><th className="fc-day-header fc-widget-header fc-fri"><span>Fri</span></th><th className="fc-day-header fc-widget-header fc-sat"><span>Sat</span></th></tr></thead></table></div></td></tr></thead><tbody className="fc-body"><tr><td className="fc-widget-content"><div className="fc-scroller fc-day-grid-container" style={{ height: '347px', overflowX: 'hidden', overflowY: 'hidden' }}><div className="fc-day-grid fc-unselectable"><div className="fc-row fc-week fc-widget-content fc-rigid" style={{ height: '57px' }}><div className="fc-bg"><table><tbody><tr><td className="fc-day fc-widget-content fc-sun fc-other-month fc-past" data-date="2019-05-26" /><td className="fc-day fc-widget-content fc-mon fc-other-month fc-past" data-date="2019-05-27" /><td className="fc-day fc-widget-content fc-tue fc-other-month fc-past" data-date="2019-05-28" /><td className="fc-day fc-widget-content fc-wed fc-other-month fc-past" data-date="2019-05-29" /><td className="fc-day fc-widget-content fc-thu fc-other-month fc-past" data-date="2019-05-30" /><td className="fc-day fc-widget-content fc-fri fc-other-month fc-past" data-date="2019-05-31" /><td className="fc-day fc-widget-content fc-sat fc-past" data-date="2019-06-01" /></tr></tbody></table></div><div className="fc-content-skeleton"><table><thead><tr><td className="fc-day-top fc-sun fc-other-month fc-past" data-date="2019-05-26"><span className="fc-day-number">26</span></td><td className="fc-day-top fc-mon fc-other-month fc-past" data-date="2019-05-27"><span className="fc-day-number">27</span></td><td className="fc-day-top fc-tue fc-other-month fc-past" data-date="2019-05-28"><span className="fc-day-number">28</span></td><td className="fc-day-top fc-wed fc-other-month fc-past" data-date="2019-05-29"><span className="fc-day-number">29</span></td><td className="fc-day-top fc-thu fc-other-month fc-past" data-date="2019-05-30"><span className="fc-day-number">30</span></td><td className="fc-day-top fc-fri fc-other-month fc-past" data-date="2019-05-31"><span className="fc-day-number">31</span></td><td className="fc-day-top fc-sat fc-past" data-date="2019-06-01"><span className="fc-day-number">1</span></td></tr></thead><tbody><tr><td /><td /><td /><td /><td /><td /><td /></tr></tbody></table></div></div><div className="fc-row fc-week fc-widget-content fc-rigid" style={{ height: '57px' }}><div className="fc-bg"><table><tbody><tr><td className="fc-day fc-widget-content fc-sun fc-past" data-date="2019-06-02" /><td className="fc-day fc-widget-content fc-mon fc-past" data-date="2019-06-03" /><td className="fc-day fc-widget-content fc-tue fc-past" data-date="2019-06-04" /><td className="fc-day fc-widget-content fc-wed fc-past" data-date="2019-06-05" /><td className="fc-day fc-widget-content fc-thu fc-past" data-date="2019-06-06" /><td className="fc-day fc-widget-content fc-fri fc-past" data-date="2019-06-07" /><td className="fc-day fc-widget-content fc-sat fc-past" data-date="2019-06-08" /></tr></tbody></table></div><div className="fc-content-skeleton"><table><thead><tr><td className="fc-day-top fc-sun fc-past" data-date="2019-06-02"><span className="fc-day-number">2</span></td><td className="fc-day-top fc-mon fc-past" data-date="2019-06-03"><span className="fc-day-number">3</span></td><td className="fc-day-top fc-tue fc-past" data-date="2019-06-04"><span className="fc-day-number">4</span></td><td className="fc-day-top fc-wed fc-past" data-date="2019-06-05"><span className="fc-day-number">5</span></td><td className="fc-day-top fc-thu fc-past" data-date="2019-06-06"><span className="fc-day-number">6</span></td><td className="fc-day-top fc-fri fc-past" data-date="2019-06-07"><span className="fc-day-number">7</span></td><td className="fc-day-top fc-sat fc-past" data-date="2019-06-08"><span className="fc-day-number">8</span></td></tr></thead><tbody><tr><td /><td /><td /><td /><td /><td /><td /></tr></tbody></table></div></div><div className="fc-row fc-week fc-widget-content fc-rigid" style={{ height: '57px' }}><div className="fc-bg"><table><tbody><tr><td className="fc-day fc-widget-content fc-sun fc-past" data-date="2019-06-09" /><td className="fc-day fc-widget-content fc-mon fc-past" data-date="2019-06-10" /><td className="fc-day fc-widget-content fc-tue fc-today fc-state-highlight" data-date="2019-06-11" /><td className="fc-day fc-widget-content fc-wed fc-future" data-date="2019-06-12" /><td className="fc-day fc-widget-content fc-thu fc-future" data-date="2019-06-13" /><td className="fc-day fc-widget-content fc-fri fc-future" data-date="2019-06-14" /><td className="fc-day fc-widget-content fc-sat fc-future" data-date="2019-06-15" /></tr></tbody></table></div><div className="fc-content-skeleton"><table><thead><tr><td className="fc-day-top fc-sun fc-past" data-date="2019-06-09"><span className="fc-day-number">9</span></td><td className="fc-day-top fc-mon fc-past" data-date="2019-06-10"><span className="fc-day-number">10</span></td><td className="fc-day-top fc-tue fc-today fc-state-highlight" data-date="2019-06-11"><span className="fc-day-number">11</span></td><td className="fc-day-top fc-wed fc-future" data-date="2019-06-12"><span className="fc-day-number">12</span></td><td className="fc-day-top fc-thu fc-future" data-date="2019-06-13"><span className="fc-day-number">13</span></td><td className="fc-day-top fc-fri fc-future" data-date="2019-06-14"><span className="fc-day-number">14</span></td><td className="fc-day-top fc-sat fc-future" data-date="2019-06-15"><span className="fc-day-number">15</span></td></tr></thead><tbody><tr><td /><td /><td className="fc-event-container"><a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end bg-danger fc-draggable"><div className="fc-content"><span className="fc-time">3:29p</span> <span className="fc-title">See John Deo</span></div></a></td><td /><td className="fc-event-container"><a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end bg-dark fc-draggable"><div className="fc-content"><span className="fc-time">11:23a</span> <span className="fc-title">Hey!</span></div></a></td><td /><td className="fc-event-container"><a className="fc-day-grid-event fc-h-event fc-event fc-start fc-end bg-primary fc-draggable"><div className="fc-content"><span className="fc-time">1:23p</span> <span className="fc-title">Buy a Theme</span></div></a></td></tr></tbody></table></div></div><div className="fc-row fc-week fc-widget-content fc-rigid" style={{ height: '57px' }}><div className="fc-bg"><table><tbody><tr><td className="fc-day fc-widget-content fc-sun fc-future" data-date="2019-06-16" /><td className="fc-day fc-widget-content fc-mon fc-future" data-date="2019-06-17" /><td className="fc-day fc-widget-content fc-tue fc-future" data-date="2019-06-18" /><td className="fc-day fc-widget-content fc-wed fc-future" data-date="2019-06-19" /><td className="fc-day fc-widget-content fc-thu fc-future" data-date="2019-06-20" /><td className="fc-day fc-widget-content fc-fri fc-future" data-date="2019-06-21" /><td className="fc-day fc-widget-content fc-sat fc-future" data-date="2019-06-22" /></tr></tbody></table></div><div className="fc-content-skeleton"><table><thead><tr><td className="fc-day-top fc-sun fc-future" data-date="2019-06-16"><span className="fc-day-number">16</span></td><td className="fc-day-top fc-mon fc-future" data-date="2019-06-17"><span className="fc-day-number">17</span></td><td className="fc-day-top fc-tue fc-future" data-date="2019-06-18"><span className="fc-day-number">18</span></td><td className="fc-day-top fc-wed fc-future" data-date="2019-06-19"><span className="fc-day-number">19</span></td><td className="fc-day-top fc-thu fc-future" data-date="2019-06-20"><span className="fc-day-number">20</span></td><td className="fc-day-top fc-fri fc-future" data-date="2019-06-21"><span className="fc-day-number">21</span></td><td className="fc-day-top fc-sat fc-future" data-date="2019-06-22"><span className="fc-day-number">22</span></td></tr></thead><tbody><tr><td /><td /><td /><td /><td /><td /><td /></tr></tbody></table></div></div><div className="fc-row fc-week fc-widget-content fc-rigid" style={{ height: '57px' }}><div className="fc-bg"><table><tbody><tr><td className="fc-day fc-widget-content fc-sun fc-future" data-date="2019-06-23" /><td className="fc-day fc-widget-content fc-mon fc-future" data-date="2019-06-24" /><td className="fc-day fc-widget-content fc-tue fc-future" data-date="2019-06-25" /><td className="fc-day fc-widget-content fc-wed fc-future" data-date="2019-06-26" /><td className="fc-day fc-widget-content fc-thu fc-future" data-date="2019-06-27" /><td className="fc-day fc-widget-content fc-fri fc-future" data-date="2019-06-28" /><td className="fc-day fc-widget-content fc-sat fc-future" data-date="2019-06-29" /></tr></tbody></table></div><div className="fc-content-skeleton"><table><thead><tr><td className="fc-day-top fc-sun fc-future" data-date="2019-06-23"><span className="fc-day-number">23</span></td><td className="fc-day-top fc-mon fc-future" data-date="2019-06-24"><span className="fc-day-number">24</span></td><td className="fc-day-top fc-tue fc-future" data-date="2019-06-25"><span className="fc-day-number">25</span></td><td className="fc-day-top fc-wed fc-future" data-date="2019-06-26"><span className="fc-day-number">26</span></td><td className="fc-day-top fc-thu fc-future" data-date="2019-06-27"><span className="fc-day-number">27</span></td><td className="fc-day-top fc-fri fc-future" data-date="2019-06-28"><span className="fc-day-number">28</span></td><td className="fc-day-top fc-sat fc-future" data-date="2019-06-29"><span className="fc-day-number">29</span></td></tr></thead><tbody><tr><td /><td /><td /><td /><td /><td /><td /></tr></tbody></table></div></div><div className="fc-row fc-week fc-widget-content fc-rigid" style={{ height: '62px' }}><div className="fc-bg"><table><tbody><tr><td className="fc-day fc-widget-content fc-sun fc-future" data-date="2019-06-30" /><td className="fc-day fc-widget-content fc-mon fc-other-month fc-future" data-date="2019-07-01" /><td className="fc-day fc-widget-content fc-tue fc-other-month fc-future" data-date="2019-07-02" /><td className="fc-day fc-widget-content fc-wed fc-other-month fc-future" data-date="2019-07-03" /><td className="fc-day fc-widget-content fc-thu fc-other-month fc-future" data-date="2019-07-04" /><td className="fc-day fc-widget-content fc-fri fc-other-month fc-future" data-date="2019-07-05" /><td className="fc-day fc-widget-content fc-sat fc-other-month fc-future" data-date="2019-07-06" /></tr></tbody></table></div><div className="fc-content-skeleton"><table><thead><tr><td className="fc-day-top fc-sun fc-future" data-date="2019-06-30"><span className="fc-day-number">30</span></td><td className="fc-day-top fc-mon fc-other-month fc-future" data-date="2019-07-01"><span className="fc-day-number">1</span></td><td className="fc-day-top fc-tue fc-other-month fc-future" data-date="2019-07-02"><span className="fc-day-number">2</span></td><td className="fc-day-top fc-wed fc-other-month fc-future" data-date="2019-07-03"><span className="fc-day-number">3</span></td><td className="fc-day-top fc-thu fc-other-month fc-future" data-date="2019-07-04"><span className="fc-day-number">4</span></td><td className="fc-day-top fc-fri fc-other-month fc-future" data-date="2019-07-05"><span className="fc-day-number">5</span></td><td className="fc-day-top fc-sat fc-other-month fc-future" data-date="2019-07-06"><span className="fc-day-number">6</span></td></tr></thead><tbody><tr><td /><td /><td /><td /><td /><td /><td /></tr></tbody></table></div></div></div></div></td></tr></tbody></table></div></div></div>
              </div>
            </div>
            {/* end col */}
            {/* BEGIN MODAL */}
            <div className="modal fade none-border" id="event-modal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button className="close" aria-hidden="true" type="button" data-dismiss="modal">×</button>
                    <h4 className="modal-title">
                      <strong>Add New Event</strong>
                    </h4>
                  </div>
                  <div className="modal-body" />
                  <div className="modal-footer">
                    <button className="btn btn-default waves-effect" type="button" data-dismiss="modal">Close</button>
                    <button className="btn btn-success save-event waves-effect waves-light" type="button">Create event</button>
                    <button className="btn btn-danger delete-event waves-effect waves-light" type="button" data-dismiss="modal">Delete</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal Add Category */}
            <div className="modal fade none-border" id="modal-category">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button className="close" aria-hidden="true" type="button" data-dismiss="modal">×</button>
                    <h4 className="modal-title">
                      <strong>Add a category </strong>
                    </h4>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <label className="control-label">Category Name</label>
                          <input name="category-name" className="form-control form-white" type="text" placeholder="Enter name" />
                        </div>
                        <div className="col-md-6">
                          <label className="control-label">Choose Category Color</label>
                          <select name="category-color" className="form-control form-white" data-placeholder="Choose a color...">
                            <option value="success">Success</option>
                            <option value="danger">Danger</option>
                            <option value="info">Info</option>
                            <option value="pink">Pink</option>
                            <option value="primary">Primary</option>
                            <option value="warning">Warning</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-default waves-effect" type="button" data-dismiss="modal">Close</button>
                    <button className="btn btn-danger waves-effect waves-light save-category" type="button" data-dismiss="modal">Save</button>
                  </div>
                </div>
              </div>
            </div>
            {/* END MODAL */}
          </div>
        </div>
      </div>
    );
  }
}
export default Calendar;