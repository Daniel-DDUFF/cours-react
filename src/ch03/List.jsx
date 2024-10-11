import React from 'react';

const List = ({ children }) => {
  // Convert children to an array for easier manipulation
  const childrenArray = React.Children.toArray(children);

  return (
    <ul>
      {childrenArray.map((child, index) => {
        // Determine whether the child should be highlighted
        const isHighlighted = index % 2 === 0; // Highlight even-indexed children

        // Render the child directly with conditional styling
        return (
          <li key={index} style={{ color: isHighlighted ? 'red' : 'black' }}>
            {React.isValidElement(child) ? child : child}
          </li>
        );
      })}
    </ul>
  );
};

export const Child = ({ text }) => {
  return <div>{text}</div>;
};

export default List;
