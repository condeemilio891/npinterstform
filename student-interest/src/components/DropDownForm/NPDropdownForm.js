import React, { useState } from 'react';

const NPDropdownForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="location">Select a location:</label>
      <select id="location" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="austin">Austin</option>
        <option value="houston">Houston</option>
        <option value="orlando">Orlando</option>
        <option value="plano">Plano</option>
        <option value="np-online">NP Online</option>
      </select>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
};

export default NPDropdownForm;