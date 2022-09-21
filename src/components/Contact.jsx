import React, { useReducer } from "react";
import reducer from "./utils/contactReducer";
import MessageCard from "./MessageCard";
import ColourChoicePanel from "./ColourChoicePanel";
// import { useNavigate } from "react-router-dom";

function Contact() {
    // let navigate = useNavigate();

  const initialState = {
    name: "",
    email: "",
    message: "",
    userMessage: "",
    textColour: "#f0f8ff",
    cardColour: "#ffffff"
  }

//   const [contactFormData, setContactFormData] = useState(
//     initialContactFormData
//   );

const [store, dispatch] = useReducer(reducer, initialState);
const {name, email, message, userMessage, textColour, cardColour} = store;

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

  function handleSubmit(event) {
    event.preventDefault();

    // console.log("type of message:", typeof this.state.message);
    // console.log("parse to a integer", parseInt(this.state.message));

    if (name.length === 0) {
        setUserMessage("Name must be provided!");
    } else if (email.length === 0) {
       setUserMessage("Email must be provided.");
    } else if (message.length === 0) {
        setUserMessage("Message must be provided.");
    } else if (!isNaN(parseInt(message))) {
        setUserMessage("Message must not be a number.");
    } else {
        setUserMessage("You have been entered valid input!");
    }
}

  return (
    <section id="contact">
      <div>
        <h2>Contact</h2>
      </div>
      <br></br>
      <div>
        <form>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleOnChange}
          ></input>
          <br></br>
          <label>Email Address: </label>
          <input
            type="name"
            name="email"
            value={email}
            onChange={handleOnChange}
          ></input>
          <br></br>
          <label>Message: </label>
          <textarea
            type="textarea"
            name="message"
            rows="5"
            cols="33"
            value={message}
            onChange={handleOnChange}
          ></textarea>
          <button onClick={handleSubmit}>Submit</button>
        </form>

        <p style={{ color: "red" }}>
          <b>{userMessage}</b>
        </p>
      </div>

      <div>
        <h4>This is what you have entered:</h4>
        <MessageCard name={name} email={email} message={message} textColour={textColour} cardColour={cardColour}/>
        <ColourChoicePanel
          textColour={textColour}
          cardColour={cardColour}
          setTextColour={setTextColour}
          setCardColour={setCardColour}
        />
      
        
      </div>
    </section>
  );
}

export default Contact;
