import{j as n}from"./index-zqpnlBSv.js";const a=({order:e,showStatus:t=!0})=>n.jsx("div",{children:n.jsxs("p",{children:[n.jsxs("span",{children:["Order Id: ",e.paymentIntent.id]})," / ",n.jsxs("span",{children:["Amount:"," ",(e.paymentIntent.amount/=100).toLocaleString("en-US",{style:"currency",currency:"USD"})]})," / ",n.jsxs("span",{children:["Currency: ",e.paymentIntent.currency.toUpperCase()]})," / ",n.jsxs("span",{children:["Method: ",e.paymentIntent.payment_method_types[0]]})," / ",n.jsxs("span",{children:["Payment: ",e.paymentIntent.status.toUpperCase()]})," / ",n.jsxs("span",{children:["Order On:"," / ",new Date(e.paymentIntent.created*1e3).toLocaleString()]})," / ",n.jsx("br",{}),t&&n.jsxs("span",{className:"badge bg-primary text-white",children:["STATUS: ",e.orderStatus]})," / "]})});export{a as S};
