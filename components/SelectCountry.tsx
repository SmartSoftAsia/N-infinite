import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector() {
  const [value, setValue] = useState(null);

  const countryData = useMemo(() => countryList().getData(), []);
  const options = countryData.map((country) => ({
    value: country.label,
    label: country.label,
  }));

  const changeHandler = (selectedOption: any) => {
    setValue(selectedOption);
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      borderRadius: "9999px",
    }),
  };
  return (
    <Select
      options={options}
      value={value}
      onChange={changeHandler}
      styles={customStyles}
    />
  );
}

export default CountrySelector;
