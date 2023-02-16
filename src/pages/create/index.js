export default function App() {
    function Submit(e) {
      const formEle = document.querySelector("form");
      const formDatab = new FormData(formEle);
      fetch(
        "https://script.google.com/macros/s/AKfycbwTJjzGBrXgInQnjBpKTWaGreUC3UiS011OPB3ekJ5pPsyxYAfq6aDRG3QxkJA3hqQ/exec",
        {
          method: "POST",
          body: formDatab
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return (
      <div className="App">
        <h1>Contact Me form</h1>
        <h2>
          This demonstrates how to send data from a website form to Google sheet
          in React or Vanilla jS
        </h2>
        <div>
          <form className="form" onSubmit={(e) => Submit(e)}>
            <input placeholder="Your Name" name="IdBook" type="text" />
            <input placeholder="Your Email" name="Name" type="text" />
            <input placeholder="Your Message" name="Type" type="text" />
            <input placeholder="Your Message" name="Stat" type="text" />
            <input name="IdBook" type="submit" />
          </form>
        </div>
      </div>
    );
  }
  