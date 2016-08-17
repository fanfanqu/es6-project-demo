import Register from './register.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

ReactDOM.render(
  <Register />,
  document.getElementById("content")
);

// use jquery
console.log($('#content').text());

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();
}
