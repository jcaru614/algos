// You’re throwing a party and getting a bunch of RSVPs from guests.
// People are submitting their names, but sometimes they enter their name multiple times, and the casing might be inconsistent — like someone entering "ALICE", then "alice", then "Alice".
// You need to clean up the guest list.
// Guests may also cancel their reservation and name may also denote that
// I want you to:
// Make sure there’s only one entry per guest, no duplicates (treat names with different casing as the same person)
// Capitalize the name properly — first letter uppercase, rest lowercase
// And return the final list sorted alphabetically

function guestlist(guestlist) {
  // clean up guest list
  // we need to lower case names in case there are caps differences
  // create a map to keep track of all the lowercase names with a total
  // if at any point you find a cancel, set that reservation total to 0
  //   only return those with a count greater than 1
  // return a list with one entry per guest with first letter uppercase alphabetically
  const guestListWithDups = {};
  for (let i = 0; i < guestlist.length; i++) {
    const entry = guestlist[i];
    const guest = entry.name.toLowerCase();
    if (entry.rsvp) {
      guestListWithDups[guest] ? guestListWithDups[guest] + 1 : (guestListWithDups[guest] = 1);
    } else {
      guestListWithDups[guest] = 0;
    }
  }
  let finalGuestList = [];
  console.log(guestListWithDups);

  for (const key in guestListWithDups) {
    let name = key[0].toUpperCase() + key.slice(1).toLowerCase();
    if (guestListWithDups[key] !== 0) {
      finalGuestList.push(name);
    }
  }
  finalGuestList.sort((a, b) => a - b);
  return finalGuestList;
}

console.log(
  guestlist([
    { name: 'Alice', rsvp: true },
    { name: 'bob', rsvp: true },
    { name: 'ALICE', cancel: true },
    { name: 'Charlie', rsvp: true },
    { name: 'dave', cancel: true },
    { name: 'charlie', rsvp: true },
  ])
);
