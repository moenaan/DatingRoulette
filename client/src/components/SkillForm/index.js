import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_SKILL } from '../../utils/mutations';

import Auth from '../../utils/auth';

const SkillForm = ({ profileId, pickRandomWord, randomWord}) => {
  const [skill, setSkill] = useState('');

  const [addSkill, { error }] = useMutation(ADD_SKILL);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addSkill({
        variables: { profileId, skill },
      });

      setSkill('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h4>What will you choose?...</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="date-display col-12 col-lg-10">
            <input
              placeholder="Generate now..."
              value={randomWord}
              className="form-input w-100"
              
            />
          </div>
          

          <div className="col-12 col-lg-3">
            <button className="generate-button" type="button" onClick={() => pickRandomWord()}>
              GENERATE DATE
            </button>
          </div>

          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to generate a date. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    
    </div>
  );
};

export default SkillForm;

