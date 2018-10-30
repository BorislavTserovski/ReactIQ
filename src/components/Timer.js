import * as React from 'react';

export class Timer extends React.Component {

  render() {
    return (
      <div>
        <p> Time: {this.props.minutes} : {this.props.seconds}</p>
      </div>
    );
  }
}