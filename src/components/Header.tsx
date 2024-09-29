const Header = () => (
  <div className="flex justify-between items-center mb-6">
    <div>
      <h1 className="text-2xl font-bold">Welcome back!</h1>
      <p className="text-gray-600">
        Here's a list of your tasks for this month!
      </p>
    </div>
    <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
      View
    </button>
  </div>
);

export default Header;
