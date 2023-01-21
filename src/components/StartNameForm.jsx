import React from "react";

const StartNameForm = ({ startupName, updateFields }) => {
  return (
    <div className='startupNameForm'>
      <h3>
        Please provide some information about your new startup.
        <br />
        You can skip questions and quit the questionaire any time.
      </h3>
      <input
        type='text'
        placeholder='What is your startup called?'
        required
        autoFocus
        value={startupName}
        onChange={(e) => updateFields({ startupName: e.target.value })}
      />
    </div>
  );
};

export default StartNameForm;
