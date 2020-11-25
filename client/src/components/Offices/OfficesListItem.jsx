import React from "react";

function OfficesListItem({ text }) {
  return (
    <ul className="my-6">
      <li className="clients_sections_list relative pl-6 mt-4">
        <span className="text-left text-xl font-normal">{text}</span>
      </li>
    </ul>
  );
}

export default OfficesListItem;
