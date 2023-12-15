import ButtonList from "../ButtonList/ButtonList";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-y-5 py-2 h-screen w-20 border-r bg-zinc-900">
      <div className="flex flex-col justify-center w-12 h-12 text-center text-rose-500 rounded-xl bg-zinc-100">
        <i className="text-2xl ri-dashboard-fill"></i>
      </div>
      <button className="flex flex-col items-center justify-center w-10 h-10 rounded-xl bg-zinc-100 hover:bg-zinc-50 hover:text-green-400 transition ease delay-50 ">
        <i className="text-2xl ri-add-line"></i>
      </button>
      <ButtonList />
    </div>
  );
};

export default Navbar;
