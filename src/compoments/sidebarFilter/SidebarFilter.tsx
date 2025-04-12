import React from 'react';
import './sidebarStyles.css';

type Filters = {
  status: string;
  gender: string;
  species: string;
  type: string;
};

interface SidebarFilterProps {
  filters: Filters;
  onChange: (field: keyof Filters, value: string) => void;
}


const SidebarFilter: React.FC<SidebarFilterProps> = ({ filters, onChange }) => {

  return (
    <div className="sidebar-container">
      <div className="filter-group">
        <h3>Status</h3>
        <select value={filters.status} 
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange('status', event.target.value)}>
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="filter-group">
        <h3>Gender</h3>
        <select value={filters.gender} 
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange('gender', event.target.value)}>
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
          value={filters.species}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange('species', event.target.value)}
        />
      </div>

      <div className="filter-group">
        <h3>Type</h3>
        <input
          type="text"
          placeholder="Ej: Superhuman"
          value={filters.type}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange('type', event.target.value)}
        />
      </div>
    </div>
  );
};

export default SidebarFilter;
