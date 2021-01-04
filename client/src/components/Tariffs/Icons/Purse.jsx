import React from "react";

class Purse extends React.Component {
  render() {
    return (
      <svg className="mr-2 w-5 h-5">
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M17 18h6v.62A2.38 2.38 0 0 1 20.62 21H3.38A2.38 2.38 0 0 1 1 18.62V5.38A2.38 2.38 0 0 1 3.38 3h17.24A2.38 2.38 0 0 1 23 5H3v1h20v3h-6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2zm-1-8v7h8v-7z"
          ></path>
        </svg>
      </svg>
    );
  }
}

export default Purse;
