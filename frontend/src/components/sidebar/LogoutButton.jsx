import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto'>
			{!loading ? (
				<BiLogOut className='w-9 h-9 text-blue-700 cursor-pointer' onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
		</div>
	);
};
export default LogoutButton;
