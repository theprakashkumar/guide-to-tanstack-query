const Button = ({ text, onClick, disabled }) => {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-md mt-4"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
