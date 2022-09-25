import React, { useReducer, useRef } from "react";
import reducer from "./utils/contactReducer";
import MessageCard from "./MessageCard";
import ColourChoicePanel from "./ColourChoicePanel";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Grid from '@mui/material/Grid';

function Contact() {
     let navigate = useNavigate();

  const initialState = {
    user_name: "",
    email: "",
    message: "",
    userMessage: "",
    textColour: "#000000",
    cardColour: "#ffffff"
  }

//   const [contactFormData, setContactFormData] = useState(
//     initialContactFormData
//   );

const [store, dispatch] = useReducer(reducer, initialState);
const {user_name, email, message, userMessage, textColour, cardColour} = store;
const formRef = useRef();

  function handleOnChange(event) {
    dispatch({
        type: "setFormData",
        data: event.target
      })
    }

  function setUserMessage(userMessage){
    dispatch({
      type: 'setUserMessage',
      data: userMessage
    })
  }

  function setTextColour(colour) {
    dispatch({
      type: "setTextColour",
      data: colour,
    });
  }

  function setCardColour(colour) {
    dispatch({
      type: "setCardColour",
      data: colour,
    });
  }

  async function sendEmail(formRef) {
    return emailjs.sendForm(
      'service_zgffhu1', 
      'template_bgdzyru', 
      formRef, 
      'WoMqXxiHaJU2v4G_T'
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    // console.log("type of message:", typeof this.state.message);
    // console.log("parse to a integer", parseInt(this.state.message));

    if (user_name.length === 0) {
        setUserMessage("Name must be provided!");
    } else if (email.length === 0) {
       setUserMessage("Email must be provided.");
    } else if (message.length === 0) {
        setUserMessage("Message must be provided.");
    } else if (!isNaN(parseInt(message))) {
        setUserMessage("Message must not be a number.");
    } else {
        // setUserMessage("");
        sendEmail(formRef.current).then(res => {
          console.log(res);
          navigate("/thanks");
        });
    }
}
  // once the form is loaded to the DOM, it will update the formRef obj
  // to { current: <form ... > }
  return (
    <section id="contact">
      <div>
        <h2>Contact</h2>
      </div>
      <br></br>
      <div>
      <Grid container spacing={1} columns={16} >
        <form ref={formRef}>
          <input type="hidden" name="user_email" value="michaelyangyang@hotmail.com" />
          
          <Grid item xs={8} >
            <label>Name: </label>
            <input
              type="text"
              name="user_name"
              value={user_name}
              onChange={handleOnChange}
            ></input>
          </Grid>
          <br></br>

          <Grid item xs={8} >
            <label>Email Address: </label>
            <input
              type="name"
              name="email"
              value={email}
              onChange={handleOnChange}
            ></input>
            </Grid>
          <br></br>

          <Grid item xs={8} >
          <label>Message: </label>
            <textarea
              type="textarea"
              name="message"
              rows="5"
              cols="33"
              value={message}
              onChange={handleOnChange}
            ></textarea>
           </Grid>
          
        </form>
        </Grid>
       
      </div>

      <div>
        <h4>This is what you have entered:</h4>
        <MessageCard name={user_name} email={email} message={message} textColour={textColour} cardColour={cardColour}/>
        <ColourChoicePanel
          textColour={textColour}
          cardColour={cardColour}
          setTextColour={setTextColour}
          setCardColour={setCardColour}
        />
        <br></br>
       <button onClick={handleSubmit}>Submit</button>
       <p style={{ color: "red" }}>
          <b>{userMessage}</b>
       </p>
        
      </div>
    </section>
  );

}

export default Contact;
