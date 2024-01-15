const WithBordres = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="border-2 border-purple-400 ">
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default WithBordres;
