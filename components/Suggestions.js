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
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div>
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src={profile.avatar}
            alt="User Profile"
          />

          <div>
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3>Works at {profile.companyName}</h3>
          </div>
          </div>
      ))};
    </div>
  );
};

export default Suggestions;
