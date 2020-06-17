const axios = require("axios");
var fs = require("fs");

const userToken = "eb75380c745260f357c24dbe26e9f7b32c0ac3cb";
function getAllUserActivities(other, pageNumber, callback) {
    let userID = "11540989";
    let perPage = 30;
    axios
        .get(
            "https://www.strava.com/api/v3/athlete/activities?page=" +
                pageNumber +
                "&per_page=" +
                perPage,
            { headers: { Authorization: "Bearer " + userToken } }
        )
        .then((result) => {
            let activities = result.data;
            console.log(pageNumber, activities.length);

            // If amount of results is equal to perPage look for more
            if (activities.length === perPage) {
                getAllUserActivities(
                    activities.concat(other),
                    pageNumber + 1,
                    callback
                );
            } else {
                callback(activities.concat(other));
            }
        })
        .catch((error) => {
            console.log(error);
            console.log(error.response.data.errors);
            callback(other);
        });
}

var allActivities = [];
getAllUserActivities([], 1, (activities) => {
    console.log(activities);
    fs.writeFile("activities.json", JSON.stringify(activities), function (
        err,
        data
    ) {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
});
