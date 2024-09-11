const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-lg text-white font-bold transition-transform transform hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
