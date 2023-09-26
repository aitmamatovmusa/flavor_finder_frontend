import { MouseEvent, ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { httpClient } from '../api/client';
import { paths } from '../router';

interface UserForm {
  username: string;
  password: string;
  email: string;
}

function SignUp() {
  const navigate = useNavigate();
  const [signUpForm, setSignUpForm] = useState({
    username: '',
    password: '',
    repeatPassword: '',
    email: '',
  });

  async function registerUser(userForm: UserForm) {
    try {
      await httpClient.post('/register/', userForm);
      navigate(paths.signIn);
    } catch {
      throw new Error('Registration error');
    }
  }

  function checkUserForm(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const { username, password, repeatPassword, email } = signUpForm;
    if (
      username.trim() &&
      password.trim() &&
      repeatPassword.trim() &&
      email.trim()
    ) {
      if (password === repeatPassword) {
        const userForm = { username, password, email };
        registerUser(userForm);
      }
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setSignUpForm({ ...signUpForm, [name]: value });
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
        <h1 className="text-2xl mb-4 text-center">Create an Account</h1>
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
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
            <input
              onChange={handleInputChange}
              type="email"
              name="email"
              id="email"
              className="font-normal border rounded py-2 px-3 w-full focus:outline-none focus:shadow-outline mt-1"
              placeholder="Enter your email"
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

          <label
            htmlFor="repeatPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Repeat Password
            <input
              onChange={handleInputChange}
              type="password"
              name="repeatPassword"
              id="repeatPassword"
              className="font-normal border rounded py-2 px-3 w-full focus:outline-none focus:shadow-outline mt-1"
              placeholder="Repeat your password"
            />
          </label>

          <button
            onClick={(e) => checkUserForm(e)}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>Already have an account?</p>
          <Link to={paths.signIn} className="text-blue-500">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
