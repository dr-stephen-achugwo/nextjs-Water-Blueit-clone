import React from "react";
import Layout from "../components/Layout";
import style from "../styles/index.module.css";
import Head from 'next/head'
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Services = () => {

useEffect(() => {
    toast("Welcome to Our Page" , {
      type : "success",
      color : "black"
    })
}, [])

  return (
    <Layout>
     
      <div className={style.main}>
      <Head>
        <title>Water Resource</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://blueitfuture.com/resimler/blueit.png"
                width={"400px"}
                alt=""
              />
               <div>
                <strong className="text-white">Give Life to Future!

                </strong>
               </div>
            </div>
           

            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <p className="text-white">
                Blueit is connected to a real time hardware and software that monitors and optimizes water consumption in buildings. Blueit builds the "Management System".
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default Services;
