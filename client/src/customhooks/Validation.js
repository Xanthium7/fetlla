import { useState } from "react";
// custom hook to perform form validation
function Usevalidate() {
  const [values, setvalues] = useState({});
  const [errors, seterrors] = useState({});
  let value;
  const handelChange = (event) => {
    const name = event.target.name;
    if (name === "authname" || name === "title" || name === "message") {
      value = event.target.value;
    } else {
      value = event.target.value.trim();
    }

    setvalues((prevvalues) => {
      return {
        ...prevvalues,
        [name]: value,
      };
    });

    validate(name, value, values);
  };

  const removevalue = () => {
    setvalues({});
  };
  const validate = (name, value, values) => {
    switch (name) {
      case "username":
        if (value.length <= 4) {
          seterrors({
            ...errors,
            username: "Username atleast have 5 letters",
          });
        } else {
          const newobj = { ...errors };
          delete newobj.username;
          seterrors(newobj);
        }

        break;
      case "message":
        if (value.length <= 10) {
          seterrors({
            ...errors,
            message: "message atleast have 10 letters",
          });
        } else {
          const newobj = { ...errors };
          delete newobj.message;
          seterrors(newobj);
        }

        break;
      case "authname":
        if (value.length <= 4) {
          seterrors({
            ...errors,
            authname: "Name atleast have 5 letters",
          });
        } else {
          const newobj = { ...errors };
          delete newobj.authname;
          seterrors(newobj);
        }
        break;
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          seterrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          const newobj = { ...errors };
          delete newobj.email;
          seterrors(newobj);
        }
        break;

      case "pass":
        if (value.length <= 4) {
          seterrors({
            ...errors,
            pass: "Password should atleast have 5 letters",
          });
        } else {
          const newobj = { ...errors };
          delete newobj.pass;
          seterrors(newobj);
        }
        break;
      case "cpass":
        if (values.pass !== value) {
          seterrors({
            ...errors,
            cpass: "Password not match",
          });
        } else {
          const newobj = { ...errors };
          delete newobj.cpass;
          seterrors(newobj);
        }
        break;
      case "title":
        if (value.length <= 6) {
          seterrors({
            ...errors,
            title: "Title should atleast have 6 letters",
          });
        } else {
          const newobj = { ...errors };
          delete newobj.title;
          seterrors(newobj);
        }
        break;

      default:
        break;
    }
  };
  return {
    values,
    errors,
    handelChange,
    removevalue,
  };
}

export default Usevalidate;
