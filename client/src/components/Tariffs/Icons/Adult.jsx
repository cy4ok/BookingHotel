import React from "react";

class Adult extends React.Component {
  render() {
    return (
      <svg className="w-3 h-6 mb-1 mr-1 text-gold">
        <svg viewBox="0 0 10 24">
          <path
            d="M8 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM4.031 9h1.915C7.61 9 8.954 10.157 9 11.588v2.47c0 .628-.479 1.197-1.185 1.413l-.365.098-.387 5.705c-.023.412-.41.726-.89.726H3.827c-.478 0-.866-.314-.889-.726L2.55 15.57l-.365-.098C1.48 15.274 1 14.706 1 14.059v-2.47C1.023 10.156 2.368 9 4.031 9z"
            fill="currentColor"
          ></path>
        </svg>
      </svg>
    );
  }
}

export default Adult;
