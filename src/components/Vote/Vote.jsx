import { Component } from 'react';

import Block from './Block/Block';
import VoteActions from './VoteActions';
import VoteResult from './VoteResult';

import styles from './vote.module.css';

class Vote extends Component {
  static voteOptions = ['democrats', 'republicans'];

  state = {
    democrats: 0,
    republicans: 0,
  };

  calcTotal() {
    const { democrats, republicans } = this.state;
    const total = democrats + republicans;
    //   Можна використати, якщо багато значень
    // const values = Object.values(this.state);
    // const total = values.reduce((acum, value) => acum + value, 0);
    return total;
  }

  calcPercentage(keyName) {
    const total = this.calcTotal();
    if (!total) {
      return 0;
    }
    const value = this.state[keyName]; // в [] бо не знаємо ім'я властивості
    return Number(((value / total) * 100).toFixed(2));
  }

  leaveVote = keyName => {
    this.setState(prevState => {
      return {
        [keyName]: prevState[keyName] + 1,
      };
    });
  };

  render() {
    // const { democrats, republicans } = this.state;

    const total = this.calcTotal();

    const democratePercentage = this.calcPercentage('democrats');
    const republicansPercentage = this.calcPercentage('republicans');

    return (
      <div className={styles.wrapper}>
        <Block title="Залиште голос">
          <VoteActions options={Vote.voteOptions} leaveVote={this.leaveVote} />
        </Block>
        <Block title="Резуультат">
          <VoteResult
            total={total}
            democratePercentage={democratePercentage}
            republicansPercentage={republicansPercentage}
          />
        </Block>
      </div>
    );
  }
}

export default Vote;
