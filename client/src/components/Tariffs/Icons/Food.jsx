import React from "react";

class Food extends React.Component {
  render() {
    return (
      <svg className="mr-2 w-5 h-5">
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M18 24v-6.54l-1.22-.39A3 3 0 0 1 14.5 14c0-2.05 2-10.49 3.49-12.21A4.53 4.53 0 0 1 21 0v24zM11.29 0H10v10H8.5V0h-2v10H5V0H3.71S3 7 3 9s.66 3 1.29 3.5A10.21 10.21 0 0 0 6 13.57V24h3V13.57a10.21 10.21 0 0 0 1.71-1.07C11.34 12 12 11 12 9s-.71-9-.71-9z"
          ></path>
        </svg>
      </svg>
    );
  }
}

export default Food;
