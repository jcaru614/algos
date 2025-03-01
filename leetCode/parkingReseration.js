// You’re on a HOA of a townhouse community.
// The community has a guest number of guest parking, with each spot able to park either large, medium or small cars.
// The owners on your community have been complaining about certain people hogging the guest parking space and asked you to implement a parking lot reservation system.

// Implement this system.

// Params

// totalSpots = number guest parking
// maxTimeAllowed = Defined time allowed for spot
// listOfRequests
//          personRequested
//          requestDate
//          spotsRequested
//          maxTimeRequested

function parkingReservation(totalSpots, maxTimeAllowed, listOfRequests) {
	const responses = [];

	let spotsLeft = totalSpots;
	for (let i = 0; i < listOfRequests.length; i++) {
		const request = listOfRequests[i];

		if (request.maxTimeRequested > maxTimeAllowed) {
			responses.push({
				personRequested: request.personRequested,
				status: 'Denied',
				reason: 'Exceeds time limit',
			});
		} else if (request.spotsRequested > spotsLeft) {
			responses.push({
				personRequested: request.personRequested,
				status: 'Denied',
				reason: 'No spots available',
			});
		} else {
			responses.push({
				personRequested: request.personRequested,
				status: 'Accepted',
				reason: 'Spots available',
			});
			spotsLeft -= request.spotsRequested;
		}
	}
	return responses;
}

const totalSpots = 5;
const maxTimeAllowed = 3;

const listOfRequests = [
	{
		personRequested: 'John',
		requestDate: '2024-07-22',
		spotsRequested: 2,
		maxTimeRequested: 2,
	},
	{
		personRequested: 'Bob',
		requestDate: '2024-07-22',
		spotsRequested: 4,
		maxTimeRequested: 3,
	},
	{
		personRequested: 'Joe',
		requestDate: '2024-07-22',
		spotsRequested: 1,
		maxTimeRequested: 4,
	},
];

console.log(parkingReservation(totalSpots, maxTimeAllowed, listOfRequests));
