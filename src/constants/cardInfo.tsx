import React from "react";
import { CardType } from "../types/card";

interface CardInfo {
  name: string;
  description: string;
  explaination?: React.ReactNode;
  pro?: React.ReactNode;
  con?: React.ReactNode;
}

const CARD_INFO: { [key in CardType]: CardInfo } = {
  [CardType.BASIC]: {
    name: "Regular Player",
    description: "Test description",
  },
  [CardType.AGENT]: {
    name: "Agent",
    description: "Force a card share once per round",
  },
  [CardType.AGORAPHOBE]: {
    name: "Agoraphobe",
    description: "Never leave your room",
  },
  [CardType.AHAB]: {
    name: "Ahab",
    description: "Stay away from Moby and the Bomber",
  },
  [CardType.AMBASSADOR]: {
    name: "Ambassador",
    description: "Walk freely beyween the rooms",
  },
  [CardType.ANARCHIST]: {
    name: "Anarchist",
    description: "Usurp room leader a majority of rounds",
  },
  [CardType.ANGEL]: {
    name: "Angel",
    description: "Tell the truth",
  },
  [CardType.BLIND]: {
    name: "Blind",
    description: "Keep your eyes closed",
  },
  [CardType.BLUESPY]: {
    name: "Blue Spy",
    description: "You look like you are red",
  },
  [CardType.BOMBBOT]: {
    name: "Bomb-bot",
    description: "Be with the bomber, avoid the president",
  },
  [CardType.BOMBER]: {
    name: "Bomber",
    description: "Be with the President",
  },
  [CardType.BOUNCER]: {
    name: "Bouncer",
    description: "Kick an extra player out",
  },
  [CardType.BUTLER]: {
    name: "Butler",
    description: "Be with the Maid and the President",
  },
  [CardType.CLONE]: {
    name: "Clone",
    description: "The player that first shares with you must win",
  },
  [CardType.CLOWN]: {
    name: "Clown",
    description: "Smile... always",
  },
  [CardType.CONMAN]: {
    name: "Conman",
    description: "Color share >> private reveal",
  },
  [CardType.COYBOY]: {
    name: "Coyboy",
    description: 'You can only color share because you\'re "Coy"',
  },
  [CardType.CONMAN]: {
    name: "Conman",
    description: "Color share >> private reveal",
  },
  [CardType.CRIMINAL]: {
    name: "Crinimal",
    description: 'Card share >> "Shy"',
  },
  [CardType.CUPID]: {
    name: "Cupid",
    description: 'Make 2 players "In love" once per game',
  },
  [CardType.DEALER]: {
    name: "Dealer",
    description: 'Card share >> "Foolish"',
  },
  [CardType.DECOY]: {
    name: "Decoy",
    description: "Get shot by the sniper",
  },
  [CardType.DEMON]: {
    name: "Demon",
    description: "Lie",
  },
  [CardType.DRBOOM]: {
    name: "Dr. Boom",
    description: "Card share with the president and instantly win",
  },
  [CardType.DRUNK]: {
    name: "Drunk",
    description: "Sober up on the last round",
  },
  [CardType.DOCTOR]: {
    name: "Doctor",
    description: "Card share with the president",
  },
  [CardType.ENFORCER]: {
    name: "Enforcer",
    description: "Force players to card share once per round",
  },
  [CardType.ENGINEER]: {
    name: "Engineer",
    description: "Card share with the Bomber",
  },
  [CardType.ERIS]: {
    name: "Eris",
    description: 'Make 2 players "In hate" once per game',
  },
  [CardType.GAMBLER]: {
    name: "Gambler",
    description: "Guess if red, blue, or neither team won",
  },
  [CardType.HOTPOTATO]: {
    name: "Hot Potato",
    description: "You lose, but sharing >> Swapping",
  },
  [CardType.IMMUNOLOGIST]: {
    name: "Immunologist",
    description: 'Immune to all abilities and "Conditions"',
  },
  [CardType.INTERN]: {
    name: "Intern",
    description: "Be with the President",
  },
  [CardType.INVINCIBLE]: {
    name: "Invincible",
    description: 'Immune to all abilities and "Conditions"',
  },
  [CardType.JULIET]: {
    name: "Juliet",
    description: "Be with Romeo and the Bomber",
  },
  [CardType.LEPRECHAUN]: {
    name: "Leprechaun",
    description: 'You win, you\'re "Foolish" and sharing >> Swapping',
  },
  [CardType.M16]: {
    name: "M16",
    description: "Card share with the President and the Bomber",
  },
  [CardType.MAID]: {
    name: "Maid",
    description: "Be with the Butler and the President",
  },
  [CardType.MARTYR]: {
    name: "Martyr",
    description: "If there is no Bomber, be the bomber",
  },
  [CardType.MASTERMIND]: {
    name: "Mastermind",
    description: "Be the leader of both rooms and at the end",
  },
  [CardType.MAYOR]: {
    name: "Mayor",
    description: "Public reveal >> 2 votes to usurp in an even room",
  },
  [CardType.MEDIC]: {
    name: "Medic",
    description: 'Card share >> Remove all "Conditions"',
  },
  [CardType.MIME]: {
    name: "Mime",
    description: "Never speak",
  },
  [CardType.MINION]: {
    name: "Minion",
    description: "You lose if your leader is usurped",
  },
  [CardType.MISTRESS]: {
    name: "Mistress",
    description: "Be with the President, avoid the Wife",
  },
  [CardType.MOBY]: {
    name: "Moby",
    description: "Avoid the Bomber and Ahab",
  },
  [CardType.MUMMY]: {
    name: "Mummy",
    description: 'Card share >> "Cursed"',
  },
  [CardType.NEGOTIATOR]: {
    name: "Negotiator",
    description: 'Youcan only card share because you\'re "Savy"',
  },
  [CardType.NUCLEARTYRANT]: {
    name: "Nuclear Tyrant",
    description: "You're \"Foolish\". Don't card share with the primaries",
  },
  [CardType.NURSE]: {
    name: "Nurse",
    description: "If there is no Doctor, be the Doctor",
  },
  [CardType.PAPARAZZO]: {
    name: "Paparazzo",
    description: "Ignore privacy",
  },
  [CardType.PARANOID]: {
    name: "Paranoice",
    description: "You can only card share once",
  },
  [CardType.PRESIDENT]: {
    name: "President",
    description: "Avoid the Bomber",
  },
  [CardType.PRESIDENTSDAUGHTER]: {
    name: "President's Daughter",
    description: "If there is no president, be the president",
  },
  [CardType.PRIVATEEYE]: {
    name: "Private Eye",
    description: "Guess the buried card",
  },
  [CardType.PSYCHOLOGIST]: {
    name: "Psychologist",
    description: 'Remove PSI "Conditions"',
  },
  [CardType.QUEEN]: {
    name: "Queen",
    description: "Avoid the President and the Bomber",
  },
  [CardType.REDSPY]: {
    name: "Red Spy",
    description: "You look like you are blue",
  },
  [CardType.RIVAL]: {
    name: "Rival",
    description: "Avoid the President",
  },
  [CardType.ROBOT]: {
    name: "Robot",
    description: "The player that first shares with you must lose",
  },
  [CardType.ROMEO]: {
    name: "Romeo",
    description: "Be with Juliet and the Bomber",
  },
  [CardType.SECURITY]: {
    name: "Security",
    description: "Permanent public reveal >> Tackle a player",
  },
  [CardType.SHYGUY]: {
    name: "Shy Guy",
    description: 'No sharing or reveals because you\'re "Shy"',
  },
  [CardType.SNIPER]: {
    name: "Sniper",
    description: "Shoot the Target",
  },
  [CardType.SURVIVOR]: {
    name: "Survivor",
    description: "Avoid the Bomber",
  },
  [CardType.TARGET]: {
    name: "Target",
    description: "Don't get shot by the Sniper",
  },
  [CardType.THUG]: {
    name: "Thug",
    description: 'Card share >> "Coy"',
  },
  [CardType.TINKERER]: {
    name: "Tinkerer",
    description: "If there is no Engineer, be the Engineer",
  },
  [CardType.TRAVELER]: {
    name: "Traveler",
    description: "Be sent as a hostage a majority of rounds",
  },
  [CardType.TUESDAYKNIGHT]: {
    name: "Tuesday Knight",
    description: "Card share with the Bomber and instantly win",
  },
  [CardType.USURPER]: {
    name: "Usurper",
    description: "Permanent public reveal >> Become room leader",
  },
  [CardType.VICTIM]: {
    name: "Victim",
    description: "Be with the Bomber",
  },
  [CardType.WIFE]: {
    name: "Wife",
    description: "Be with the President, avoid the Mistress",
  },
  [CardType.ZOMBIE]: {
    name: "Zombie",
    description: "Make all survivors zombies",
  },
};

export default CARD_INFO;
