import{r,b as c,a as m,j as e,G as u,B as d,f as g}from"./index-zqpnlBSv.js";/* empty css                      */const x=()=>{const[t,o]=r.useState(""),{user:a}=c(s=>({...s})),i=m();r.useEffect(()=>{a&&a.token&&i("/")},[a,i]);const n=async s=>{s.preventDefault(),await u(g,t,{url:"http://localhost:5173/register/complete",handleCodeInApp:!0}),d.success(`Email is sent to ${t}. Click the link to complete your registration.`),window.localStorage.setItem("emailForRegistration",t),o(""),console.log(window.localStorage.setItem("emailForRegistration",t))},l=()=>e.jsxs("form",{onSubmit:n,children:[e.jsx("input",{type:"email",className:"form-control",value:t,onChange:s=>o(s.target.value),placeholder:"Your Email",autoFocus:!0}),e.jsx("button",{type:"submit",className:"btn btn-dark",children:"Register"})]});return e.jsx("div",{className:"container p-5",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-md-6 offset-md-3",children:[e.jsx("h4",{children:"Register"}),l()]})})})};export{x as default};