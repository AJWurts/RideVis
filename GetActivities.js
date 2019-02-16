const axios = require('axios');
var fs = require('fs');



const userToken = '8af735ac30e1ef4e56af8769053aaf946b2f5094';
function getAllUserActivities(other, pageNumber, callback) {
    let userID = '11540989';
    let perPage = 30
    axios.get('https://strava.com/api/v3/athlete/activities?page=' + pageNumber + '&per_page=' + perPage, { headers: { Authorization: "Bearer " + userToken } })
        .then(result => {
            let activities = result.data;
            console.log(pageNumber, activities.length)

            // If amount of results is equal to perPage look for more
            if (activities.length === perPage) {
                getAllUserActivities(activities.concat(other), pageNumber + 1, callback);
            } else {
                callback(activities.concat(other))
            }
        })
        .catch(error => {
            console.log(error)
            callback(other);
        })
}


var allActivities = []
getAllUserActivities([], 1, (activities) => {
    console.log(activities);
    fs.writeFile('activities.json', JSON.stringify(activities), function (err, data) {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
})

