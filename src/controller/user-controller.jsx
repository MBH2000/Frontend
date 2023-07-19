// let [user, setUser] = useState({
//     name: null,
//     email: null,
//     password: null
//   })
//   let [name, setName] = useState(null);

//   function handleNameChange(e) {
//     setName(e.target.value);
//     setUser((oldVal) => ({ ...oldVal, name: e.target.value }));
//   }
//   let [type, setType] = useState(null);

//   function handleTypeChange(e) {
//     setType(e.target.value);
//     setUser((oldVal) => ({ ...oldVal, type: e.target.value }));
//   }
//   let [email, setEmail] = useState(null);

//   function handleEmailChange(e) {
//     setEmail(e.target.value);
//     setUser((oldVal) => ({ ...oldVal, email: e.target.value }));
//   }
//   let [password, setPassword] = useState(null);

//   function handlePasswordChange(e) {
//     setPassword(e.target.value);
//     setUser((oldVal) => ({ ...oldVal, password: e.target.value }));

//   }
//   async function handleSubmitt(){
//     try {
//       const response = await fetch('https://backend-zchf.onrender.com/user/register', {
//         method: "POST",
//         mode:'cors',
//         headers:{
//           'Content-Type':'application/json',
//         },
//         body: JSON.stringify(user)
//       });
  
//       const data = await response.json();
//       localStorage.setItem('name', data.user.name);
//       localStorage.setItem('token', data.token);
//       console.log(localStorage.getItem('name'));
//       console.log(localStorage.getItem('token'));
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   export default {handleEmailChange, handleNameChange, handlePasswordChange, handleSubmitt}