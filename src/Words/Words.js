import React from 'react';

const Words = ({words}) => (
  <ul>{words.map((word) => <li key={word}>{word}</li>)}</ul>
);

export default Words;
