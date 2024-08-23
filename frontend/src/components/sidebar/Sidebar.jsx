import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-blue-700 p-3 flex flex-col'>
			<SearchInput />
			<div className='divider divider-primary'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;
