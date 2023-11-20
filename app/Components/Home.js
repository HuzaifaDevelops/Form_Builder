// YourComponent.js
'use client';
import "../Loader";
import { useEffect, useRef, useState } from "react";
import "jquery-ui-sortable";
import "formBuilder";
import axios from "axios";

const FormBuilder = () => {
    const fb = useRef();
    const [data, setData] = useState({});

    useEffect(() => {
        // Ensure jQuery is defined before using it
        if (typeof window !== "undefined" && window.jQuery) {
            const fbEditor = document.getElementById('build-wrap');
            const formBuilder = $(fbEditor).formBuilder();


            document.getElementById('getJSON').addEventListener('click', function () {
                console.log(formBuilder.actions.getData('json', true));
                axios.post('http://localhost:3000/api/form', { form: formBuilder.actions.getData('json', true) })
                    .then(function (response) {
                        console.log(response);
                        formBuilder.actions.clearFields()
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            });

            document.getElementById('getData').addEventListener('click', () => {
                axios.get('http://localhost:3000/api/form').then((res) => {
                    console.log(res.data);
                })
            })
        }
    }, []);


    return (
        <>
            {/* ... (head and styling) ... */}
            <div className="p-5">
                <div id="build-wrap" ref={fb} />
                <div className="d-flex justify-content-center p-2">
                    <button id="getJSON" className="btn btn-primary ml-2">Send Data</button>
                    <button id="getData" className="btn btn-primary ml-2">Get Data</button>
                </div>
            </div>
        </>
    );
};

export default FormBuilder;
