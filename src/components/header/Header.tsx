function Header() {
  return (
    <div className="header py-[20px]">
      <div className="_container">
        <div className="flex justify-between items-center">
          <div className="text-cambridgeBlue font-black italic text-[18px] cursor-pointer">
            FlavorFinder
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="placeholder:uppercase placeholder:text-gray text-[14px] w-[100%] max-w-[100px] h-[23px] focus:max-w-[200px] transition-all appearance-none border-none outline-none mr-[5px]"
            />

            <div className="w-[16px] h-[16px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="inherit"
                className="fill-gray"
              >
                <path
                  d="m12.02 11.078 2.856 2.855-.943.943-2.855-2.855a6.002 6.002 0 0 1-9.745-4.687c0-3.313 2.688-6 6-6s6 2.687 6 6a5.974 5.974 0 0 1-1.312 3.744Zm-1.337-.495a4.665 4.665 0 0 0-3.35-7.917 4.665 4.665 0 0 0-4.666 4.667 4.665 4.665 0 0 0 7.916 3.35l.1-.1Z"
                  fill="inherit"
                />
              </svg>
            </div>
          </div>
          <div className="flex item-center">
            <div className="flex items-center cursor-pointer">
              <span className="text-[14px] text-gray italic font-medium uppercase mr-[5px]">
                Sign in
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="inherit"
                className="fill-gray w-[16px] h-[16px]"
              >
                <path
                  d="M8.78 8 5.482 4.7l.943-.942L10.666 8l-4.242 4.243-.943-.943 3.3-3.3Z"
                  fill="inherit"
                />
              </svg>
            </div>

            <div className="flex items-center cursor-pointer ml-[10px]">
              <span className="text-[14px] text-gray italic font-medium uppercase mr-[5px]">
                Profile
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="inherit"
                className="fill-gray w-[16px] h-[16px]"
              >
                <path
                  d="M8 11.333c2.442 0 4.577 1.05 5.739 2.617l-1.228.58c-.945-1.12-2.612-1.863-4.51-1.863-1.899 0-3.565.743-4.51 1.864l-1.228-.582c1.162-1.566 3.296-2.616 5.738-2.616Zm0-10a3.333 3.333 0 0 1 3.334 3.334v2a3.333 3.333 0 0 1-3.189 3.33L8.001 10a3.333 3.333 0 0 1-3.334-3.333v-2a3.333 3.333 0 0 1 3.19-3.33L8 1.332Zm0 1.334a2 2 0 0 0-1.996 1.882l-.003.118v2a2 2 0 0 0 3.996.117l.004-.117v-2a2 2 0 0 0-2-2Z"
                  fill="inherit"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
