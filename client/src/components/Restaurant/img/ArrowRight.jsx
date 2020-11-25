export const ArrowRight = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="btn-arrow w-8 h-8 bg-black opacity-50 my-auto ml-8 "
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"></path>
      </svg>
    </div>
  );
};
