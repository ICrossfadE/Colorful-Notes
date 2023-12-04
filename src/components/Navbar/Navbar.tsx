function Navbar() {
  return (
    <div className="flex flex-col items-center py-2 h-screen w-20 border-r border-gray-200 bg-gray-100">
      <div className="flex flex-col justify-center w-16 h-16 mb-2 text-center text-rose-500 rounded-lg bg-zinc-800">
        <i className="text-4xl ri-dashboard-fill"></i>
      </div>
      <button className="w-16 h-16 rounded-lg bg-gray-200 hover:bg-zinc-800 hover:text-gray-50 transition ease delay-50">
        <i className="text-4xl ri-add-line"></i>
      </button>
    </div>
  );
}

export default Navbar;
