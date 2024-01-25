import styles from './feedback-options.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonElement = options.map(name => (
    <button
      onClick={() => {
        onLeaveFeedback(name);
      }}
      className={styles.btn}
      key={name}
    >
      {name}
    </button>
  ));
  return buttonElement;
};

export default FeedbackOptions;
