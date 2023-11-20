import React, { useState } from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';



const UserForm = ({ formData }) => {
  const [userInput, setUserInput] = useState('');

  const AutocompleteField = ({ data }) => (
    <div className='p-2'>
      <input type="text" name={data.name} className={data.className} />
    </div>
  );

  const ButtonField = ({ data }) => (
    <div className='p-2'>
      <button type={data.subtype} className={data.className} name={data.name}>
        {data.label}
      </button>
    </div>
  );

  const CheckboxGroupField = ({ data }) => (
    <div className='p-2'>
      {data.values.map((value, index) => (
        <div key={index}>
          <input
            type="checkbox"
            name={data.name}
            value={value.value}
            defaultChecked={value.selected}
          />
          {value.label}
        </div>
      ))}
    </div>
  );

  const DateField = ({ data }) => (
    <div className='p-2'>
      <input type="date" name={data.name} className={data.className} />
    </div>
  );

  const FileUploadField = ({ data }) => (
    <div className='p-2'>
      <input type="file" name={data.name} className={data.className} />
    </div>
  );

  const HeaderField = ({ data }) => (
    <div className='p-2'>
      <data.subtype>{data.label}</data.subtype>
    </div>
  );

  const HiddenField = ({ data }) => (
    <div className='p-2'>
      <input type="hidden" name={data.name} />
    </div>
  );

  const ParagraphField = ({ data }) => (
    <div className='p-2'>
      <p>{data.label}</p>
    </div>
  );

  const RadioGroupField = ({ data }) => (
    <div className='p-2'>
      {data.values.map((value, index) => (
        <div key={index}>
          <input
            type="radio"
            name={data.name}
            value={value.value}
            defaultChecked={value.selected}
          />
          {value.label}
        </div>
      ))}
    </div>
  );

  const SelectField = ({ data }) => (
    <div className='p-2'>
      <select name={data.name} className={data.className}>
        {data.values.map((value, index) => (
          <option key={index} value={value.value} selected={value.selected}>
            {value.label}
          </option>
        ))}
      </select>
    </div>
  );


  const TextField = ({ data }) => (
    <div className='p-2'>
      <label>{data.label}</label>
      <input type={data.subtype} name={data.name} required={data.required} onChange={(e) =>{
         console.log(e.target.value)
      }} className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${data.className}`} placeholder={data.placeholder} />
    </div >
  );

  const TextAreaField = ({ data }) => (
    <div className='p-2'>
      <label>{data.label}</label>
      <textarea name={data.name} onChange={(e) =>{
         console.log(e.target.value)
      }} className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${data.className}`}></textarea>
    </div>
  );



  return (
    <>

      <div className='mx-auto lg:w-1/2 md:w-2/3 mt-10'>
        <div className='flex flex-wrap m-2 border-solid border-2 border-indigo-600 rounded-2xl'>
          <form className='w-full' onSubmit={e => {e.preventDefault()
            //  console.log(e.target)
             }}> 
            {formData.map((fieldData, index) => {
              switch (fieldData.type) {
                case 'autocomplete':
                  return <AutocompleteField key={index} data={fieldData} />;
                case 'button':
                  return <ButtonField key={index} data={fieldData} />;
                case 'checkbox-group':
                  return <CheckboxGroupField key={index} data={fieldData} />;
                case 'date':
                  return <DateField key={index} data={fieldData} />;
                case 'file':
                  return <FileUploadField key={index} data={fieldData} />;
                case 'header':
                  return <HeaderField key={index} data={fieldData} />;
                case 'hidden':
                  return <HiddenField key={index} data={fieldData} />;
                case 'paragraph':
                  return <ParagraphField key={index} data={fieldData} />;
                case 'radio-group':
                  return <RadioGroupField key={index} data={fieldData} />;
                case 'select':
                  return <SelectField key={index} data={fieldData} />
                case 'text':
                  return <TextField key={index} data={fieldData} />
                case 'textarea':
                  return <TextAreaField key={index} data={fieldData} />
                default:
                  return null;
              }
            })}
          </form>
      </div>
    </div >
    </>
  )
}

export default UserForm
