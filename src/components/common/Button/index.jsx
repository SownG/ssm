import React from 'react';
import './styles.less';

export default class Button extends React.Component {
  render() {
    const { text, bstyle } = this.props;
    return (
      <button {...this.props} className={bstyle ? `btn-${bstyle}` : ''} >{text}</button>
    );
  }
}
