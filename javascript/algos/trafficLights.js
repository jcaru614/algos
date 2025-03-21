// A city has installed a smart traffic light system to optimize traffic flow at a busy intersection.
// The system collects real-time data on how many vehicles are waiting at each lane and determines which
// lane gets the green light first based on traffic volume and priority rules.

// Rules:
// The intersection has four lanes: north, south, east, and west.
// Each lane has a number of waiting vehicles at any given time.
// The lane with the most vehicles waiting gets the green light first.
// If multiple lanes have the same highest number of vehicles, they are prioritized in this order:
// North > South > East > West
// The green light duration is calculated as 5 seconds per vehicle in the chosen lane.
// The function should return which lane gets the green light first and for how long.
// expected output { lane: "south", duration: 50 }

function smartTrafficLight(trafficData) {
	// most vehicles go first,
	// if same number in 2 then go ahead with first in order from north to west
	// each car gets 5 seconds to pass the light so the light turns green for as many cars are there
	// go through the object and compare each to the next to get the light with the most cars
	// then calculate the duration of that and return
	// if you get the two greatest and are equal then default to priority
	let greatestCarLength = undefined;
	let traficPriority = {
		north: 1,
		south: 2,
		east: 3,
		west: 4,
	};
	const directions = Object.entries(trafficData);
	for (let i = 1; i < directions.length; i++) {
		if (directions[i][1] > directions[i - 1][1]) {
			greatestCarLength = directions[i];
		} else if (directions[i][1] === directions[i - 1][1]) {
			if (traficPriority[directions[i][0]] < traficPriority[directions[i - 1][0]]) {
				greatestCarLength = directions[i];
			} else {
				greatestCarLength = directions[i - 1];
			}
		}
	}
	const carCount = greatestCarLength[1];
	const duration = carCount * 5;
	return { direction: greatestCarLength[0], duration };
}

const trafficData = {
	north: 8,
	south: 10,
	east: 10,
	west: 5,
};
const trafficData2 = {
    north: 5,
    south: 3,
    east: 7,
    west: 4
};

console.log(smartTrafficLight(trafficData));
console.log(smartTrafficLight(trafficData2));
