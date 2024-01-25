import { Component } from 'react';
import styles from './main-menu.module.css';

class MainMenu extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activeIndex: 0,
  //   };
  // }
  static defaultProps = {
    items: [],
  };

  state = {
    activeIndex: 0,
  };

  handleClick(idx) {
    this.setState({
      activeIndex: idx,
    });
  }

  render() {
    const { items } = this.props;
    const { activeIndex } = this.state;

    const element = items.map(({ id, text, href }, index) => {
      return (
        <li key={id}>
          <a
            onClick={() => this.handleClick(index)}
            href={href}
            className={
              index === activeIndex
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
          >
            {text}
          </a>
        </li>
      );
    });
    return <ul className={styles.menu}>{element}</ul>;
  }
}

export default MainMenu;
