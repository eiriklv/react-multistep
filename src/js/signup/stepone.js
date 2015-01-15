var React = require('react')

var StepOne = React.createClass({
  mixins: [ React.addons.LinkedStateMixin ],
  getInitialState() {
    return { startDate: new Date() }
  },
  render() {
    return (
      <div>
        <h5>Here is Content 1</h5>
        <input className="six columns" type="date" min="2015-01-01"
                                     valueLink={this.linkState('startDate')}
                                     autoFocus/>
      </div>
  )}
})
module.exports = StepOne