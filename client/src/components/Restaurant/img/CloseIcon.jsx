export const CloseIcon = ({ onClick }) => {
  return (
    <div onClick={onClick} className="btn-arrow w-8 h-8 bg-black opacity-50">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"></path>
      </svg>
    </div>
  );
};
