import React from 'react';

const fetchCityName = ({latitude, longtitude, setAddress}) => {
  console.log(latitude, longtitude);
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longtitude}&key=AIzaSyBt7wxG0Y0nPWVY6MHbIyCaHA8GZ7239p0`,
  )
    .then((response) => response.json())
    .then((data) => {
      const results = data.results[0];
      const address_components = results.address_components;
      const formatted_address = results.formatted_address;
      const getName = (zone) =>
        address_components.filter((item) =>
          item.types[0] === zone ? true : false,
        )[0].long_name;
      setAddress({
        subdistrict: getName('administrative_area_level_3'),
        formatted_address: formatted_address,
      });
    });
};

export default fetchCityName;
