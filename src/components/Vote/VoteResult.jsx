const VoteResult = ({ total, democratePercentage, republicansPercentage }) => {
  return (
    <>
      <p>Total: {total}</p>
      <p>Democrats percent: {democratePercentage}%</p>
      <p>Republicans percent {republicansPercentage}%</p>
    </>
  );
};

export default VoteResult;
