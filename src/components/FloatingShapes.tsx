const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute bottom-40 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-500/25 to-purple-500/25 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
    </div>
  );
};

export default FloatingShapes;
