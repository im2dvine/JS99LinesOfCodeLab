//Create an array called friends. It will hold five of your friends' names.
//For every friend in the friend array, you will want to console.log the descending chorus of the song 100 times.
//The lyric must include your friend's name, and must be grammatically correct when we get down to 1.
/*You will need to use two loops to accomplish this task
One loop is nested inside the other
The outer loop is picking the friend.
For each friend, the inner loop runs for every line of the song.*/


let friends = ["Daze", "Rico", "Kayla", "Javi", "JC"];

// function singingFriends() {
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i] + ":");
    for (let j = 99; j < 100; j--) {
        if (j === 2) {
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out clears it all out, " + (j - 1) + " line of code in the file!");
        } else if (j === 1) {
            console.log(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file!");
            break;
        } else {
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file!");
        }
    }
}
// };

// singingFriends();
