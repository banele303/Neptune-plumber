// components/PhoneSnippet.js
import React from 'react';

const PhoneSnippet = () => {
  return (
    <script>
      {`
        gtag('config', 'AW-11405523497/9bVtCIyjnJwZEKn0yb4q', {
          'phone_conversion_number': '083 300 0705'
        });
      `}
    </script>
  );
};

export default PhoneSnippet;
