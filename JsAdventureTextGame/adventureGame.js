/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/
const readline = require("readline-sync");

let playerName = "";
let inventory = [];

// Create variables for player stats
let health = 100;
let gold = 0;

let WeaponType = Object.freeze({
    1: "Fists",
    2: "Sword",
    3: "Dagger",
    4: "Bow",
    5: "Staff",
});

function weapon(type, id, wName, damage, speed) {
    return {
        type,
        id,
        wName,
        damage,
        speed
    };
}

const weapons = Object.freeze({
    101: weapon(1, 101, "Bare Fists", 1, 5),
    201: weapon(2, 201, "Broken Sword", 6, 7),
    301: weapon(3, 301, "Kitchen Knife", 4, 10),
    401: weapon(4, 401, "Old Bow", 10, 2),
    501: weapon(5, 501, "Random Branch", 2, 8)
});

currentWeapon = weapons[101]; // Set the default weapon to Bare Fists

// create monsters the same way as weapons
function monster(name, health, damage, defense, experience) {
    return {
        name,
        health,
        damage,
        defense,
        experience
    };
}

const monsters = Object.freeze({
    1001: monster("Goblin", 30, 5, 10, 20),
    1002: monster("Orc", 50, 8, 20, 50),
    1003: monster("Dragon", 100, 15, 50, 100)
});


// Display the game title
console.log("Welcome to the Adventure Game");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");
console.log(""); //Skip a line



// Get player name using readline-sync
playerName = readline.question("What is your name, adventurer? ");
console.log("---"); //Skip a line
console.log(`Welcome, ${playerName}! Your adventure begins now.`);
console.log("Current Health: " + health);
console.log("Current Gold: " + gold);
console.log("Current Weapon: " + currentWeapon.wName + " (Damage: " + currentWeapon.damage + ", Speed: " + currentWeapon.speed + ")");

// Healing potion restoration (matches final implementation)
let healingPotionValue = 30;  // How much health is restored
console.log("Healing potion value: " + healingPotionValue);
console.log("A potion will restore 30 health!");