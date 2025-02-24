// You’re on a HOA of a townhouse community.
// The community has a guest number of guest parking, with each spot able to park either large, medium or small cars.
// The owners on your community have been complaining about certain people hogging the guest parking space and asked you to implement a parking lot reservation system.

// Implement this system.

// Params

// spotsAvailable = number guest parking
// maxTimeAllowed = Defined time allowed for spot
// listOfRequests
//          personRequested
//          requestDate
//          numberSpotsRequested
//          maxTimeRequested

function parkingReservation(spotsAvailable, maxTimeAllowed, listOfRequests) {
	const requestResponse = [];
	let spotsLeft = spotsAvailable;
	for (let i = 0; i < listOfRequests.length; i++) {
		const request = listOfRequests[i];

		if (request.maxTimeRequested > maxTimeAllowed) {
			requestResponse.push({
				personRequested: request.personRequested,
				status: 'Denied',
				reason: 'Exceeds time limit',
			});
		} else if (request.numberSpotsRequested > spotsLeft) {
			requestResponse.push({
				personRequested: request.personRequested,
				status: 'Denied',
				reason: 'No spots available',
			});
		} else {
			requestResponse.push({
				personRequested: request.personRequested,
				status: 'Accepted',
				reason: 'Spots available',
			});
			spotsLeft -= request.numberSpotsRequested;
		}
	}
	return requestResponse;
}

const spotsAvailable = 5;
const maxTimeAllowed = 3;

const listOfRequests = [
	{
		personRequested: 'Alice',
		requestDate: '2024-07-22',
		numberSpotsRequested: 2,
		maxTimeRequested: 2,
	},
	{ personRequested: 'Bob', requestDate: '2024-07-22', numberSpotsRequested: 4, maxTimeRequested: 3 },
	{
		personRequested: 'Charlie',
		requestDate: '2024-07-22',
		numberSpotsRequested: 1,
		maxTimeRequested: 4,
	},
];

console.log(parkingReservation(spotsAvailable, maxTimeAllowed, listOfRequests));
