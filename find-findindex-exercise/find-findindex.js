function findUserByUsername(usersArray, username) {
	return usersArray.find(function(value) {
		return value['username'] === username;
	});
}

function removeUser(usersArray, username) {
	let indexToRemove = usersArray.findIndex(function(value) {
		return value.username === username;
	});
	if (indexToRemove === -1) return undefined;
	const removedUser = usersArray[indexToRemove];
	usersArray.splice(indexToRemove, 1);
	return removedUser;
}
