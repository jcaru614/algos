// You’re on a HOA of a townhouse community.
// The community has a guest number of guest parking, with each spot able to park either large, medium or small cars.
// The owners on your community have been complaining about certain people hogging the guest parking space and asked you to implement a parking lot reservation system.

// Implement this system.

const getSpotRequirement = (carSize) => {
	switch (carSize) {
		case 'large':
			return 2;
		case 'medium':
			return 1;
		case 'small':
			return 1;
		default:
			return 0;
	}
};

function parkingReservation(totalSpots, maxTimeAllowed, listOfRequests, callback) {
	let spotsLeft = totalSpots;

	listOfRequests.forEach((request, index) => {
		setTimeout(() => {
			let response = { personRequested: request.personRequested };

			if (request.maxTimeRequested > maxTimeAllowed) {
				response.status = 'Denied';
				response.reason = 'Exceeds time limit';
			} else if (request.spotsRequested > spotsLeft) {
				response.status = 'Denied';
				response.reason = 'No spots available';
			} else {
				response.status = 'Accepted';
				response.reason = 'Spots available';
				spotsLeft -= request.spotsRequested;
			}

			callback(response);
		}, index * 2000);
	});
}

function handleResponse(response) {
	console.log(response);
}

const totalSpots = 5;
const maxTimeAllowed = 3;
const listOfRequests = [
	{
		personRequested: 'John',
		spotsRequested: 2,
		maxTimeRequested: 2,
		carSize: 'medium',
	},
	{
		personRequested: 'Bob',
		spotsRequested: 4,
		maxTimeRequested: 3,
		carSize: 'small',
	},
	{
		personRequested: 'Joe',
		spotsRequested: 1,
		maxTimeRequested: 4,
		carSize: 'large',
	},
];

// Call parkingReservation with the callback function
parkingReservation(totalSpots, maxTimeAllowed, listOfRequests, handleResponse);
