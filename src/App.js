//............NOTE..............

//I'm not hanadling the input type check here, for simplicity purpose
//we can check if(type === 'email|number|password'...) and render accordingly

import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { formState, formFields } from './data';
import './style.css';

export default function App() {
  const [form, setForm] = useState(formState);

  const [progress, setProgress] = useState({
    bgColor: '#e3e432',
    completed: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleProgressChanage = (e) => {
    let progress = 0;
    Object.values(form).forEach((value) => {
      if (value !== '') {
        progress += Math.floor(100 / Object.entries(form).length);
      }
    });
    setProgress({ ...progress, completed: progress });
  };

  return (
    <div className="App">
      <ProgressBar bgColor={progress.bgColor} completed={progress.completed} />
      <form>
        {formFields.fields.map(({ name, type }) => {
          return (
            <input
              name={name}
              id={name}
              value={form[name]}
              onChange={handleChange}
              onBlur={handleProgressChanage}
              type={type}
              placeholder={`${name}...`}
            />
          );
        })}
      </form>
    </div>
  );
}
