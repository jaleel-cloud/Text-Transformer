(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(13),n(3)),i=(n(15),function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),o=n[0],c=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{action:"",className:"form-container"},r.a.createElement("div",{className:"heading"},r.a.createElement("h1",null,"Write the Text below:")),r.a.createElement("textarea",{class:"textArea",placeholder:"Enter your Text",name:"",id:"box",cols:"80",rows:"20",value:o,onChange:function(e){c(e.target.value)}}),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{id:"btn",onClick:function(){var e=o.toUpperCase();c(e)},type:"button"},"Convert to UpperCase"),r.a.createElement("button",{id:"btn",onClick:function(){var e=o.toLowerCase();c(e)},type:"button"},"ConvertS to LowerCase"),r.a.createElement("button",{id:"btn",onClick:function(){c(" ")},type:"button"},"Clear TextArea"),r.a.createElement("button",{id:"btn",onClick:function(){var e=o.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ");c(e)},type:"button"},"Capitalize"),r.a.createElement("button",{id:"btn",onClick:function(){var e=document.getElementById("box");e.select(),navigator.clipboard.writeText(e.value)},type:"button"},"click to copy"),r.a.createElement("button",{id:"btn",onClick:function(){var e=o.split(/[ ]+/);c(e.join(" "))},type:"button"},"Remove extra space"))))),r.a.createElement("div",{className:"container2"},r.a.createElement("h2",null,"Your text Summary"),r.a.createElement("h3",null,"Total words and Characters :"),r.a.createElement("h4",null,o.split(" ").length,"  words and ",o.length,"characters"),r.a.createElement("p",null,"A person can read this ",o.split("").length," words and ",o.length," characters in ",.008*o.split(" ").length," minutes")))});var u=function(){return r.a.createElement(i,null)};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(u,null))},4:function(e,t,n){e.exports=n(19)}},[[4,2,1]]]);
//# sourceMappingURL=main.b5de2814.chunk.js.map