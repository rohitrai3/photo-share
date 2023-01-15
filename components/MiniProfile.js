function MiniProfile() {
  return (
    <div>
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src="https://raw.githubusercontent.com/rohitrai3/resources/main/images/logo.png"
        alt="User Profile"
      />

      <div>
        <h3>username</h3>
        <h3>Welcome to PhotoShare</h3>
      </div>

      <button>Sign Out</button>
    </div>
  );
};

export default MiniProfile;
