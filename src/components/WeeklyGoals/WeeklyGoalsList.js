import React, { useState } from 'react';
import WeeklyGoalsForm from './WeeklyGoalsForm';
import WeeklyGoals from './WeeklyGoals';
import './WeeklyGoals.scss';

function WeeklyGoalsList() {
  const [goals, setGoals] = useState([]);

  const addGoal = goal => {
    if (!goal.text || /^\s*$/.test(goal.text)) {
      return;
    }

    const newGoals = [goal, ...goals];

    setGoals(newGoals);
    console.log(...goals);
  };

  const updateGoal = (goalId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setGoals(prev => prev.map(item => (item.id === goalId ? newValue : item)));
  };

  const removeGoal = id => {
    const removedArr = [...goals].filter(goal => goal.id !== id);

    setGoals(removedArr);
  };

  const completeGoal = id => {
    let updatedGoals = goals.map(goal => {
      if (goal.id === id) {
        goal.isComplete = !goal.isComplete;
      }
      return goal;
    });
    setGoals(updatedGoals);
  };

  return (
    <>
      <h1>Weekly Goals</h1>
      <WeeklyGoalsForm onSubmit={addGoal} />
      <WeeklyGoals
        goals={goals}
        completeGoal={completeGoal}
        removeGoal={removeGoal}
        updateGoal={updateGoal}
      />
    </>
  );
}

export default WeeklyGoalsList;