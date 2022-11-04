
### This repository was created for NextJs case study.
### In this project following topics are to be covered;

✔ NextJs environment

✔ Next Route (Link,Page,Head etc)

✔ Conditional Rendering

✔ React Hooks

✔ React Icons, React Toastify

✔ Components and Props Logic

✔ Data iteration

✔ Seo Optimization

✔ Bootstrap

✔ Module Css

✔ To reduce boilerplate code, stayed information in JSON file.

```
NextJs Project (folder)
|
|----readme.md
|----.next
|----node.modules
|----assets
|----json
        |----json.jsx
        |----json2.jsx
|----components
        |----Card.jsx
        |----Footer.jsx
        |----Layout.jsx
        |----Navbar.jsx
        |----Referans.jsx
|----package-lock.json
|----package.json 
|----style
        |----index.module.css
|----pages   
        |----_app.js
        |----404.js
        |----Hizmetler.jsx
        |----index.jsx
        |----Main.jsx
```


#### To use Toastift follow these steps;
```
$ npm install --save react-toastify
$ yarn add react-toastify

```
### To send mail with nextJs 

```
<form action="https://formsubmit.co/yourMailHere"
              method="POST"
              name="contact_form"
              onSubmit={handleSubmit}
              target="_blank"
            >     
      ```

```
import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function App(){
    const notify = () => toast("Wow so easy!");

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
```
