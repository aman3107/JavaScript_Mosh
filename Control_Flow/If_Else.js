let hour = 20;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon!");
} else {
  console.log("Good Evening!");
}

// Swicth

let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest here");
    break;

  case "moderator":
    console.log("Moderator here");
    break;

  default:
    console.log("Unknown here");
}
