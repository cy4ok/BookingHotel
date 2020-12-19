import React from "react";

class Child extends React.Component {
  render() {
    return (
      <svg className="w-3 h-6 mb-1 mr-0 text-gold">
        <svg viewBox="0 0 10 24">
          <path
            d="M7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-2.726 3h1.435c1.248 0 2.257.8 2.291 1.792v1.71c0 .435-.359.828-.889.978l-.273.067-.291 3.95c-.017.286-.308.503-.667.503H4.12c-.36 0-.65-.217-.667-.502l-.29-3.95-.274-.068c-.53-.136-.889-.53-.889-.978v-1.71C2.017 13.8 3.026 13 4.274 13z"
            fill="currentColor"
          ></path>
        </svg>
      </svg>
    );
  }
}

export default Child;
