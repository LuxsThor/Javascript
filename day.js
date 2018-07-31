function dayName(date) {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                           "Thursday", "Friday", "Saturday"];
    return daysOfTheWeek[date.getDay()];}

let today = new Date;


function greeting(date) {
  return `Hi there have a good ${dayName(date)}`
}
