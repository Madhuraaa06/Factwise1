import React, { useState } from 'react';
import Acc from "./Acc";
import './acc.css';

const List = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "John Doe",
      age: "19 Years",
      gender: "Rather not say",
      country: "India",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      name: "Jane Smith",
      age: "25 Years",
      gender: "Female",
      country: "USA",
      description: "Aenean massa. Cum sociis natoque Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elitelit. penatibus et magnis dis parturient montes."
    },
    {
      id: 3,
      name: "Mark Lee",
      age: "22 Years",
      gender: "Male",
      country: "UK",
      description: "Donec quam felis Lorem ipsum dolor sit amet, consectetur adipiscing elit., ultricies nec, Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elitipsum dolor sit amet, consectetur adipiscing elitpellentesque eu, pretium quis, sem."
    }
  ]);

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Profile Lists</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
        style={{
          width: '450px',
          marginBottom: '16px',
          boxSizing: 'border-box',
          border: '1px solid #ccc',
          padding: '8px'
        }} 
      />

      <div className='plist'>
        {filteredProfiles.map((pp) => (
          <Acc key={pp.id} pp={pp} />
        ))}
      </div>
    </div>
  );
}

export default List;
