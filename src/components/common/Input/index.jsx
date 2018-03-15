import React from 'react';
import './styles.less';

export default class Input extends React.Component {
  render() {
    return (
      <input {...this.props} />
    );
  }
}
