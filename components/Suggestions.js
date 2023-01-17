import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      id: i,
      avatar: faker.internet.avatar(),
      username: faker.internet.userName(),
      companyName: faker.company.companyName(),
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div>
      <h1>I am suggestions.</h1>
    </div>
  );
};

export default Suggestions;
