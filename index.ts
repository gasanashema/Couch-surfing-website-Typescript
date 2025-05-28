// String Types mini-challenge
// Write a function that will display the most recent reviewers name next to the review total,
// making sure to assign a type to the parameter, to prevent unwanted behaviour.

const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

// Solution
function showReviewTotal (value : number, name : string,star: boolean) {
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + " | last review was from " + name + ` ${star?'⭐':''}`;

}

showReviewTotal(reviews.length,reviews[0].name,reviews[0].loyaltyUser)

const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: (string | number)[];
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow', 23]
}



function populateUser(isReturning:boolean, userName : string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.userName)