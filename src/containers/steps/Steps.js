import React from 'react';
import './steps.scss';

const StepsDetails = [
  {
    title: 'your info',
  },
  {
    title: 'Select plan',
  },
  {
    title: 'add-ons',
  },
  {
    title: 'summary',
  },
];

const Steps = () => {
  return (
    <main className='Steps'>
      <div className='StepsBG'>
        {StepsDetails.map((step, index) => {
          const { title } = step;
          return (
            <div key={title} className='Step'>
              <div className='Number'>{index + 1}</div>
              <div className='Details'>
                <div className='Header'>{`Step ${index}`}</div>
                <div className='Title'>{title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Steps;
