// import Form from 'react-bootstrap/Form';

// export default function Create() {
//   function Submit(e) {
//     const formEle = document.querySelector("form");
//     const formDatab = new FormData(formEle);
//     fetch(
//       "https://script.google.com/macros/s/AKfycbzdSt0rYzMSdPe0-Jnw0qx9fThon7nO0YkvAZpQl_nIeMlN3ckb1SP2s8SoSwkao3iuyQ/exec",
//       {
//         method: "POST",
//         body: formDatab
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   return (
//     <div className="App">
//       <h1>Contact Me form</h1>
//       <h2>
//         This demonstrates how to send data from a website form to Google sheet
//         in React or Vanilla jS
//       </h2>
//       <div>
//         <form className="form" onSubmit={(e) => Submit(e)}>
//           <input placeholder="ระบุ ID" name="IdBook" type="text" />
//           <input placeholder="ชื่อหนังสือ" name="Name" type="text" />
//           <Form.Select aria-label="Default select example" name="Type">
//             <option value="1">One</option>
//             <option value="2">Two</option>
//             <option value="3">Three</option>
//           </Form.Select>
//           <Form.Select aria-label="Default select example" name="Stat">
//             <option value="1">พร้อมใช้</option>
//             <option value="2">ถูกยืม</option>
//           </Form.Select>
//           <input name="IdBook" type="submit" />
//         </form>
//       </div>
//     </div>
//   );
// }
