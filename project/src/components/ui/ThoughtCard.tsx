import React from 'react';
import { Thought } from '../../data/thoughts';

interface ThoughtCardProps {
  thought: Thought;
}

const ThoughtCard: React.FC<ThoughtCardProps> = ({ thought }) => {
  // Format the timestamp
  const date = new Date(thought.timestamp);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="border-l-2 border-primary-600 pl-4 py-2 hover:border-primary-400 transition-colors duration-300">
      <p className="font-tech text-gray-200">
        <span className="text-primary-500">&gt; </span>
        {thought.content}
      </p>
      <div className="mt-1 text-xs text-gray-500 font-tech">
        {formattedDate}
      </div>
    </div>
  );
};

export default ThoughtCard;