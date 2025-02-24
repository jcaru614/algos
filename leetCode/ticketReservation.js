// You're managing ticket reservations for a concert that has a limited number of VIP and General Admission (GA) seats. People can request tickets, but there are specific rules:

// Rules:
// There are two ticket categories: VIP and General Admission (GA).
// Each request includes how many VIP and GA tickets the person wants.
// If a person requests more tickets than available in either category, their request is denied for that category but may still be approved for the other.
// VIP requests take priority over GA requests (VIP spots are processed first).
// If a request is approved, reduce the number of available tickets accordingly.

// Input Parameters:
// vipSeatsAvailable: Number of available VIP seats.
// gaSeatsAvailable: Number of available General Admission seats.
// listOfRequests: Array of requests containing:
//      personRequested (string)
//      requestDate (string)
//      vipTicketsRequested (integer)
//      gaTicketsRequested (integer)

// Output:
// Return an array of responses indicating whether each request was "Accepted" or "Denied" for both VIP and GA, along with the reason.

function ticketReservation(vipSeatsAvailable, gaSeatsAvailable, listOfRequests) {
	let vipSeats = vipSeatsAvailable;
	let gaSeats = gaSeatsAvailable;
	let reservations = [];

	const createResponse = (name, status, reason, vipApproved = 0, gaApproved = 0) => ({
		name,
		status,
		reason,
		vipApproved,
		gaApproved,
	});

	for (let request of listOfRequests) {
		const { personRequested, vipTicketsRequested, gaTicketsRequested } = request;

		if (vipTicketsRequested > vipSeats && gaTicketsRequested > gaSeats) {
			reservations.push(createResponse(personRequested, false, 'No Seats Available'));
		} else if (vipTicketsRequested > vipSeats) {
			reservations.push(createResponse(personRequested, false, 'No VIP Seats', 0, gaTicketsRequested));
			gaSeats -= gaTicketsRequested;
		} else if (gaTicketsRequested > gaSeats) {
			reservations.push(createResponse(personRequested, false, 'No GA Seats', vipTicketsRequested, 0));
			vipSeats -= vipTicketsRequested;
		} else {
			reservations.push(
				createResponse(
					personRequested,
					true,
					'All Seats Available',
					vipTicketsRequested,
					gaTicketsRequested
				)
			);
			vipSeats -= vipTicketsRequested;
			gaSeats -= gaTicketsRequested;
		}
	}

	return reservations;
}

const vipSeatsAvailable = 5;
const gaSeatsAvailable = 10;

const listOfRequests = [
	{
		personRequested: 'Alice',
		requestDate: '2024-07-22',
		vipTicketsRequested: 2,
		gaTicketsRequested: 3,
	},
	{
		personRequested: 'Bob',
		requestDate: '2024-07-22',
		vipTicketsRequested: 4,
		gaTicketsRequested: 2,
	},
	{
		personRequested: 'Charlie',
		requestDate: '2024-07-22',
		vipTicketsRequested: 1,
		gaTicketsRequested: 5,
	},
	{
		personRequested: 'Dave',
		requestDate: '2024-07-22',
		vipTicketsRequested: 3,
		gaTicketsRequested: 4,
	},
];
console.log(ticketReservation(vipSeatsAvailable, gaSeatsAvailable, listOfRequests));
