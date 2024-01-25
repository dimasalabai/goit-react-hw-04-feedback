import { Component } from 'react';

import styles from './toggle-button.module.css';

class ToggleButton extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onClick = this.handleClick.bind(this);
  // }
  static defaultProps = {
    type: 'submit',
  };
  state = {
    active: false,
  };
  //!   this.onClick = this.handleClick.bind(this); - аналогічно цьому знизу method = () => {}
  //! якщо значення стейту залежить від попереднього, то в setState передаємо колбек, якщо ні - то об'єкт
  handleClick = () => {
    this.setState(prevActive => {
      return {
        active: !prevActive.active,
      };
    });
  };
  render() {
    const { text, type } = this.props;
    const { active } = this.state;

    const fullClassName = active
      ? `${styles.btn} ${styles.active}`
      : styles.btn;

    return (
      <button onClick={this.handleClick} className={fullClassName} type={type}>
        {text}
      </button>
    );
  }
}

export default ToggleButton;
