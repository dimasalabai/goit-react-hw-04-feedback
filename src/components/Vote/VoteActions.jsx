const VoteActions = ({ options, leaveVote }) => {
  const buttonElement = options.map(name => (
    <button
      onClick={() => {
        leaveVote(name);
      }}
      key={name}
    >
      {name}
    </button>
  ));
  return buttonElement;
};

export default VoteActions;
