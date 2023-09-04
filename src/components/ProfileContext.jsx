import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

const ProfileContextProvider = ({ children }) => {
	const [showProfile, setShowProfile] = useState(false);

	return (
		<ProfileContext.Provider value={{ showProfile, setShowProfile }}>
			{children}
		</ProfileContext.Provider>
	);
};

export default ProfileContextProvider;

export const useProfileContext = () => {
	return useContext(ProfileContext);
};
