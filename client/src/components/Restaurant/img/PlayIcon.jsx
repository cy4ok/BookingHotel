export const PlayIcon = ({ onClick }) => {
  return (
    <div onClick={onClick} className="btn-arrow w-8 h-8 bg-black opacity-50">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M6.5 5.4v13.2l11-6.6z"></path>
      </svg>
    </div>
  );
};
