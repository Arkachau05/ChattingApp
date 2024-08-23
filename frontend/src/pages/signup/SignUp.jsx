import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
        <div>
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
      <div className="h-full w-full bg-yellow-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100 p-10">
         <h1 className='font-extrabold text-center text-4xl text-grey drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
          <span className='text-blue-500 italic'>WhisperNest🪺</span>
          <br/><br/>
          SignUp<br/>
         </h1>
          <form onSubmit={handleSubmit}>
          <div className='text-center'>
                  <label className='label p-2'>
                      <span className='text-base text-2xl label-text text-blue-700 font-semibold'>Full Name</span>
                  </label>
                  <input type="text" placeholder='Enter Your Full Name' className='input input-bordered input-secondary w-full max-w-xsinput input-bordered input-info w-full max-w-xs'
                  value={inputs.fullName}
                  onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}/>
              </div>
              <div className='text-center'>
                  <label className='label p-2'>
                      <span className='text-base text-2xl label-text text-blue-700 font-semibold'>Username</span>
                  </label>
                  <input type="text" placeholder='Enter Your Username' className='input input-bordered input-secondary w-full max-w-xsinput input-bordered input-info w-full max-w-xs'
                  value={inputs.username}
                  onChange={(e)=>setInputs({...inputs,username:e.target.value})}/>
              </div>
              <div className='text-center'>
                  <label className='label p-2'>
                      <span className='text-base text-2xl label-text text-blue-700 font-semibold'>Password</span>
                  </label>
                  <input type="password" placeholder='Enter Your Password' className='input input-bordered input-secondary w-full max-w-xsinput input-bordered input-info w-full max-w-xs'
                  value={inputs.password}
                  onChange={(e)=>setInputs({...inputs,password:e.target.value})}/>
              </div>
              <div className='text-center'>
                  <label className='label p-2'>
                      <span className='text-base text-2xl label-text text-blue-700 font-semibold'>Confirm Password</span>
                  </label>
                  <input type="password" placeholder='Confirm Password' className='input input-bordered input-secondary w-full max-w-xsinput input-bordered input-info w-full max-w-xs'
                  value={inputs.confirmPassword}
                  onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}/>
              </div>
              <Link to={"/login"} className=' text-sm text-black hover:underline hover:text-blue-600 mt-2 inline-block'>{"Already"} have an account?
              </Link>
              <div className='text-center'>
              <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
              <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 mt-2' disabled={loading}>
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        
                            {loading ? <span className='loading loading-spinner '></span> : "SignUP"}
                            </span>
						</button>
              </div>
          </form>
      </div>
      </div>
      </div>
  

	);
};
export default SignUp;