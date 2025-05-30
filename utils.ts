
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews");
export function showReviewTotal(value: number, name: string, star: boolean) {
    reviewTotalDisplay.innerHTML =
      "review total " +
      value.toString() +
      " | last review was from " +
      name +
      ` ${star ? "⭐" : ""}`;
  }

 export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
      returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
  }
  