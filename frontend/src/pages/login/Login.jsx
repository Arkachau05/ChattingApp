import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
        <div className="h-full w-full bg-yellow-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100 p-10">
           <h1 className='font-extrabold text-center text-4xl text-grey drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
            <span className='text-blue-500 italic'>WhisperNest🪺</span>
            <br/><br/>
            LOGIN<br/>
           </h1>

				<form onSubmit={handleSubmit}>
					<div className='text-center'>
						<label className='label p-2'>
							<span className='text-base text-2xl label-text text-blue-700 font-semibold'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='input input-bordered input-secondary w-full max-w-xsinput input-bordered input-info w-full max-w-xs'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base text-2xl label-text text-blue-700 font-semibold'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='input input-bordered input-secondary w-full max-w-xsinput input-bordered input-info w-full max-w-xs'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link to='/signup' className='text-sm text-black hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div className='text-center'>
						<button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 mt-2' disabled={loading}>
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        
                            {loading ? <span className='loading loading-spinner '></span> : "Login"}
                            </span>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
