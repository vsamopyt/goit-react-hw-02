import { useState, useEffect } from 'react';
import clsx from 'clsx';
import css from './App.module.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

function App() {
  const [feedBacks, setUpdate] = useState(() => {
    const feedBacksStorage = JSON.parse(
      window.localStorage.getItem('feedbacks')
    );
    if (feedBacksStorage !== null) {
      return feedBacksStorage;
    } else {
      return { good: 0, neutral: 0, bad: 0 };
    }
  });
  const updateFeedback = feedbackType => {
    setUpdate({ ...feedBacks, [feedbackType]: (feedBacks[feedbackType] += 1) });
  };

  useEffect(() => {
    window.localStorage.setItem('feedbacks', JSON.stringify(feedBacks));
  }, [feedBacks]);
  const setDefault = () => {
    setUpdate({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeebacks = feedBacks.good + feedBacks.neutral + feedBacks.bad;
  const positiveFeebacks =
    Math.round((feedBacks.good / totalFeebacks) * 100) + '%';
  const feedbacksArray = Object.keys(feedBacks);

  return (
    <div className={clsx(css['mainContainer'])}>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />
      <div className={clsx(css['buttonsContainer'])}>
        {feedbacksArray.map((item, idx) => {
          return (
            <Options
              key={idx}
              title={item}
              onUpdate={() => {
                updateFeedback(item);
              }}
            />
          );
        })}

        {totalFeebacks > 0 && <Options title="Reset" onUpdate={setDefault} />}
      </div>

      {totalFeebacks === 0 ? (
        <Notification text="No feedback yet." />
      ) : (
        <div>
          <div className={clsx(css['valuesFeddbackContainer'])}>
            {feedbacksArray.map((item, idx) => {
              return (
                <Feedback key={idx} title={item} value={feedBacks[item]} />
              );
            })}
          </div>

          <div className={clsx(css['totalFeedbackConteiner'])}>
            <Feedback title="Total" value={totalFeebacks} />
            <Feedback title="Positive" value={positiveFeebacks} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
