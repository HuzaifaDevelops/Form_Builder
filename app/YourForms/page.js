'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Form from '../Components/UserForm';

const YourComponent = () => {
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/form');
      console.log(JSON.parse(response.data[0].form));
      setData(JSON.parse(response.data[0].form))
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // console.log(data); // Log the updated data whenever it changes
  }, [data]);

  return (
    <>
      <Navbar />
      <Form formData={data}/>
    </>
  );
};

export default YourComponent;







