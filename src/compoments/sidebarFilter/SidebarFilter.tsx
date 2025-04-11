import React, { useEffect, useState } from 'react';
import './sidebarStyles.css';

const SidebarFilter = () => {
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");


  return (
    <div className="sidebar-container">
      <div className="filter-group">
        <h3>Status</h3>
        <select value={status} onChange={
          (event: React.ChangeEvent<HTMLSelectElement>) => setStatus(event.target.value)}>
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="filter-group">
        <h3>Gender</h3>
        <select value={gender} onChange={
          (event: React.ChangeEvent<HTMLSelectElement>) => setGender(event.target.value)}>
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="filter-group">
        <h3>Specie</h3>
        <input
          type="text"
          placeholder="Ej: Human"
          value={species}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSpecies(event.target.value)}
        />
      </div>

      <div className="filter-group">
        <h3>Type</h3>
        <input
          type="text"
          placeholder="Ej: Superhuman"
          value={type}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setType(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SidebarFilter;
