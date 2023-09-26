import { MouseEvent, ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { httpClient } from '../api/client';
import { paths } from '../router';

interface UserForm {
  username: string;
  password: string;
}

function SignIn() {
  const navigate = useNavigate();
  const [signInForm, setSignInForm] = useState({
    username: '',
    password: '',
  });

  async function loginUser(userForm: UserForm) {
    try {
      await httpClient.post('/login/', userForm);
      navigate(paths.home);
    } catch {
      throw new Error('Login error');
    }
  }

  function checkUserForm(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const { password, username } = signInForm;
    if (password.trim() && username.trim()) {
      const userForm = { password, username };
      loginUser(userForm);
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setSignInForm({ ...signInForm, [name]: value });
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
        <h1 className="text-2xl mb-4 text-center">Login</h1>
        <form className="space-y-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
            <input
              onChange={handleInputChange}
              type="text"
              id="username"
              name="username"
              className="font-normal border rounded py-2 px-3 w-full focus:outline-none focus:shadow-outline mt-1"
              placeholder="Enter your username"
            />
          </label>

          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
            <input
              onChange={handleInputChange}
              type="password"
              id="password"
              name="password"
              className="font-normal border rounded py-2 px-3 w-full focus:outline-none focus:shadow-outline mt-1"
              placeholder="Enter your password"
            />
          </label>

          <button
            onClick={(e) => checkUserForm(e)}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>Create an account</p>
          <Link to={paths.signUp} className="text-blue-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
