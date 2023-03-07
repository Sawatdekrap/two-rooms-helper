import React from "react";
import { CardId, CardType } from "../types/card";

export interface CardInfoItf {
  name: string;
  description: string;
  explaination?: React.ReactNode;
  pro?: React.ReactNode;
  con?: React.ReactNode;
  related?: CardId[];
}

const CARD_INFO: { [key in CardType]: CardInfoItf } = {
  [CardType.BASIC]: {
    name: "Regular Player",
    description: "Test description",
  },
  [CardType.AGENT]: {
    name: "Agent",
    description: "Force a card share once per round",
    explaination: (
      <>
        <p>
          You have the <strong>AGENT</strong> power: once per round, you may
          privately reveal your card to a player and force that player to card
          share with you. You must verbally say to the target player, “I’m using
          my AGENT power. You <strong>must</strong> card share with me.”
        </p>
        <p>
          <i>
            Note: The AGENT power works even on characters that normally can’t
            card share (e.g. Shy Guy and Coy Boy).
          </i>
        </p>
      </>
    ),
    pro: (
      <span>
        Characters that have card share power or restrictions recommended.
      </span>
    ),
    con: (
      <span>
        10 players or fewer not recommended. Contains character exceptions.
      </span>
    ),
    related: [CardId.AGENT_BLUE, CardId.AGENT_RED],
  },
  [CardType.AGORAPHOBE]: {
    name: "Agoraphobe",
    description: "Never leave your room",
  },
  [CardType.AHAB]: {
    name: "Ahab",
    description: "Stay away from Moby and the Bomber",
    related: [CardId.AHAB, CardId.MOBY],
  },
  [CardType.AMBASSADOR]: {
    name: "Ambassador",
    description: "Walk freely beyween the rooms",
    related: [CardId.AMBASSADOR_BLUE, CardId.AMBASSADOR_RED],
  },
  [CardType.ANARCHIST]: {
    name: "Anarchist",
    description: "Usurp room leader a majority of rounds",
  },
  [CardType.ANGEL]: {
    name: "Angel",
    description: "Tell the truth",
    related: [CardId.ANGEL_BLUE, CardId.ANGEL_RED],
  },
  [CardType.BLIND]: {
    name: "Blind",
    description: "Keep your eyes closed",
    related: [CardId.BLIND_BLUE, CardId.BLIND_RED],
  },
  [CardType.BLUESPY]: {
    name: "Blue Spy",
    description: "You look like you are red",
    related: [CardId.BLUESPY, CardId.REDSPY],
  },
  [CardType.BOMBBOT]: {
    name: "Bomb-bot",
    description: "Be with the bomber, avoid the president",
    related: [CardId.BOMBBOT, CardId.QUEEN],
  },
  [CardType.BOMBER]: {
    name: "Bomber",
    description: "Be with the President",
    related: [CardId.BOMBER, CardId.PRESIDENT],
  },
  [CardType.BOUNCER]: {
    name: "Bouncer",
    description: "Kick an extra player out",
    related: [CardId.BOUNCER_BLUE, CardId.BOUNCER_RED],
  },
  [CardType.BUTLER]: {
    name: "Butler",
    description: "Be with the Maid and the President",
    related: [CardId.BUTLER, CardId.MAID],
  },
  [CardType.CLONE]: {
    name: "Clone",
    description: "The player that first shares with you must win",
  },
  [CardType.CLOWN]: {
    name: "Clown",
    description: "Smile... always",
    related: [CardId.CLOWN_BLUE, CardId.CLOWN_RED],
  },
  [CardType.CONMAN]: {
    name: "Conman",
    description: "Color share >> private reveal",
    related: [CardId.CONMAN_BLUE, CardId.CONMAN_RED],
  },
  [CardType.COYBOY]: {
    name: "Coyboy",
    description: 'You can only color share because you\'re "Coy"',
    related: [CardId.COYBOY_BLUE, CardId.COYBOY_RED],
  },
  [CardType.CRIMINAL]: {
    name: "Crinimal",
    description: 'Card share >> "Shy"',
    related: [CardId.CRIMINAL_BLUE, CardId.CRIMINAL_RED],
  },
  [CardType.CUPID]: {
    name: "Cupid",
    description: 'Make 2 players "In love" once per game',
    related: [CardId.CUPID, CardId.ERIS],
  },
  [CardType.DEALER]: {
    name: "Dealer",
    description: 'Card share >> "Foolish"',
    related: [CardId.DEALER_BLUE, CardId.DEALER_RED],
  },
  [CardType.DECOY]: {
    name: "Decoy",
    description: "Get shot by the sniper",
    related: [CardId.DECOY, CardId.TARGET, CardId.SNIPER],
  },
  [CardType.DEMON]: {
    name: "Demon",
    description: "Lie",
    related: [CardId.DEMON_BLUE, CardId.DEMON_RED],
  },
  [CardType.DOCTOR]: {
    name: "Doctor",
    description: "Card share with the president",
    related: [CardId.DOCTOR, CardId.ENGINEER],
  },
  [CardType.DRBOOM]: {
    name: "Dr. Boom",
    description: "Card share with the president and instantly win",
    related: [CardId.DRBOOM, CardId.TUESDAYKNIGHT],
  },
  [CardType.DRUNK]: {
    name: "Drunk",
    description: "Sober up on the last round",
  },
  [CardType.ENFORCER]: {
    name: "Enforcer",
    description: "Force players to card share once per round",
    related: [CardId.ENFORCER_BLUE, CardId.ENFORCER_RED],
  },
  [CardType.ENGINEER]: {
    name: "Engineer",
    description: "Card share with the Bomber",
    related: [CardId.ENGINEER, CardId.DOCTOR],
  },
  [CardType.ERIS]: {
    name: "Eris",
    description: 'Make 2 players "In hate" once per game',
    related: [CardId.ERIS, CardId.CUPID],
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
    related: [CardId.INTERN, CardId.VICTIM],
  },
  [CardType.INVINCIBLE]: {
    name: "Invincible",
    description: 'Immune to all abilities and "Conditions"',
    related: [CardId.INVINCIBLE, CardId.INVINCIBLE],
  },
  [CardType.JULIET]: {
    name: "Juliet",
    description: "Be with Romeo and the Bomber",
    related: [CardId.JULIET, CardId.ROMEO],
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
    related: [CardId.MAID, CardId.BUTLER],
  },
  [CardType.MARTYR]: {
    name: "Martyr",
    description: "If there is no Bomber, be the bomber",
    related: [CardId.MARTYR, CardId.PRESIDENTSDAUGHTER],
  },
  [CardType.MASTERMIND]: {
    name: "Mastermind",
    description: "Be the leader of both rooms and at the end",
  },
  [CardType.MAYOR]: {
    name: "Mayor",
    description: "Public reveal >> 2 votes to usurp in an even room",
    related: [CardId.MAYOR_BLUE, CardId.MAYOR_RED],
  },
  [CardType.MEDIC]: {
    name: "Medic",
    description: 'Card share >> Remove all "Conditions"',
    related: [CardId.MEDIC_BLUE, CardId.MEDIC_RED],
  },
  [CardType.MIME]: {
    name: "Mime",
    description: "Never speak",
    related: [CardId.MIME_BLUE, CardId.MIME_RED],
  },
  [CardType.MINION]: {
    name: "Minion",
    description: "You lose if your leader is usurped",
  },
  [CardType.MISTRESS]: {
    name: "Mistress",
    description: "Be with the President, avoid the Wife",
    related: [CardId.MISTRESS, CardId.WIFE],
  },
  [CardType.MOBY]: {
    name: "Moby",
    description: "Avoid the Bomber and Ahab",
    related: [CardId.MOBY, CardId.AHAB],
  },
  [CardType.MUMMY]: {
    name: "Mummy",
    description: 'Card share >> "Cursed"',
    related: [CardId.MUMMY_BLUE, CardId.MUMMY_RED],
  },
  [CardType.NEGOTIATOR]: {
    name: "Negotiator",
    description: 'Youcan only card share because you\'re "Savy"',
    related: [CardId.NEGOTIATOR_BLUE, CardId.NEGOTIATOR_RED],
  },
  [CardType.NUCLEARTYRANT]: {
    name: "Nuclear Tyrant",
    description: "You're \"Foolish\". Don't card share with the primaries",
  },
  [CardType.NURSE]: {
    name: "Nurse",
    description: "If there is no Doctor, be the Doctor",
    related: [CardId.NURSE, CardId.TINKERER],
  },
  [CardType.PAPARAZZO]: {
    name: "Paparazzo",
    description: "Ignore privacy",
    related: [CardId.PAPARAZZO_BLUE, CardId.PAPARAZZO_RED],
  },
  [CardType.PARANOID]: {
    name: "Paranoice",
    description: "You can only card share once",
    related: [CardId.PARANOID_BLUE, CardId.PARANOID_RED],
  },
  [CardType.PRESIDENT]: {
    name: "President",
    description: "Avoid the Bomber",
    related: [CardId.PRESIDENT, CardId.BOMBER],
  },
  [CardType.PRESIDENTSDAUGHTER]: {
    name: "President's Daughter",
    description: "If there is no president, be the president",
    related: [CardId.PRESIDENTSDAUGHTER, CardId.BOMBER],
  },
  [CardType.PRIVATEEYE]: {
    name: "Private Eye",
    description: "Guess the buried card",
  },
  [CardType.PSYCHOLOGIST]: {
    name: "Psychologist",
    description: 'Remove PSI "Conditions"',
    related: [CardId.PSYCHOLOGIST_BLUE, CardId.PSYCHOLOGIST_RED],
  },
  [CardType.QUEEN]: {
    name: "Queen",
    description: "Avoid the President and the Bomber",
    related: [CardId.QUEEN, CardId.BOMBBOT],
  },
  [CardType.REDSPY]: {
    name: "Red Spy",
    description: "You look like you are blue",
    related: [CardId.REDSPY, CardId.BLUESPY],
  },
  [CardType.RIVAL]: {
    name: "Rival",
    description: "Avoid the President",
    related: [CardId.RIVAL, CardId.SURVIVOR],
  },
  [CardType.ROBOT]: {
    name: "Robot",
    description: "The player that first shares with you must lose",
  },
  [CardType.ROMEO]: {
    name: "Romeo",
    description: "Be with Juliet and the Bomber",
    related: [CardId.ROMEO, CardId.JULIET],
  },
  [CardType.SECURITY]: {
    name: "Security",
    description: "Permanent public reveal >> Tackle a player",
    related: [CardId.SECURITY_BLUE, CardId.SECURITY_RED],
  },
  [CardType.SHYGUY]: {
    name: "Shy Guy",
    description: 'No sharing or reveals because you\'re "Shy"',
    related: [CardId.SHYGUY_BLUE, CardId.SHYGUY_RED],
  },
  [CardType.SNIPER]: {
    name: "Sniper",
    description: "Shoot the Target",
    related: [CardId.SNIPER, CardId.TARGET, CardId.DECOY],
  },
  [CardType.SURVIVOR]: {
    name: "Survivor",
    description: "Avoid the Bomber",
    related: [CardId.SURVIVOR, CardId.RIVAL],
  },
  [CardType.TARGET]: {
    name: "Target",
    description: "Don't get shot by the Sniper",
    related: [CardId.TARGET, CardId.SNIPER, CardId.DECOY],
  },
  [CardType.THUG]: {
    name: "Thug",
    description: 'Card share >> "Coy"',
    related: [CardId.THUG_BLUE, CardId.THUG_RED],
  },
  [CardType.TINKERER]: {
    name: "Tinkerer",
    description: "If there is no Engineer, be the Engineer",
    related: [CardId.TINKERER, CardId.NURSE],
  },
  [CardType.TRAVELER]: {
    name: "Traveler",
    description: "Be sent as a hostage a majority of rounds",
  },
  [CardType.TUESDAYKNIGHT]: {
    name: "Tuesday Knight",
    description: "Card share with the Bomber and instantly win",
    related: [CardId.TUESDAYKNIGHT, CardId.DRBOOM],
  },
  [CardType.USURPER]: {
    name: "Usurper",
    description: "Permanent public reveal >> Become room leader",
    related: [CardId.USURPER_BLUE, CardId.USURPER_RED],
  },
  [CardType.VICTIM]: {
    name: "Victim",
    description: "Be with the Bomber",
    related: [CardId.VICTIM, CardId.INTERN],
  },
  [CardType.WIFE]: {
    name: "Wife",
    description: "Be with the President, avoid the Mistress",
    related: [CardId.WIFE, CardId.MISTRESS],
  },
  [CardType.ZOMBIE]: {
    name: "Zombie",
    description: "Make all survivors zombies",
  },
};

export default CARD_INFO;
