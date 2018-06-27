import React, { Component } from 'react';
import styles from './HorizontalHashComponent.css';

class HorizontalHashComponent extends Component {
  render() {
    // eslint-disable-next-line
    console.log('Styles', styles);
    return (<div>
      <div className={styles.horizontalHashComponent}/>
    </div>);
  }
}

export default HorizontalHashComponent;
