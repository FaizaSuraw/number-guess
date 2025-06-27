import React from "react";

type Props = {
  feedback: string;
};

const Feedback: React.FC<Props> = ({ feedback }) => {
  if (!feedback || feedback === "Correct") return null;

  return <p className="feedback-message">{feedback}</p>;
};

export default Feedback;
