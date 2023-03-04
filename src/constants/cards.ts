import CardItf from "../interfaces/card";
import { CardColor, CardType } from "../types/card";

const ALL_CARDS: CardItf[] = [
  {
    color: CardColor.BLUE,
    type: CardType.AGENT,
  },
  {
    color: CardColor.RED,
    type: CardType.AGENT,
  },
  {
    color: CardColor.GREY,
    type: CardType.AGORAPHOBE,
  },
  {
    color: CardColor.GREY,
    type: CardType.AHAB,
  },
  {
    color: CardColor.BLUE,
    type: CardType.AMBASSADOR,
  },
  {
    color: CardColor.RED,
    type: CardType.AMBASSADOR,
  },
  {
    color: CardColor.GREY,
    type: CardType.ANARCHIST,
  },
  {
    color: CardColor.BLUE,
    type: CardType.ANGEL,
  },
  {
    color: CardColor.RED,
    type: CardType.ANGEL,
  },
  {
    color: CardColor.BLUE,
    type: CardType.BLIND,
  },
  {
    color: CardColor.RED,
    type: CardType.BLIND,
  },
  {
    color: CardColor.BLUE,
    type: CardType.BASIC,
  },
  {
    color: CardColor.RED,
    type: CardType.BASIC,
  },
  {
    color: CardColor.GREY,
    type: CardType.BOMBBOT,
  },
  {
    color: CardColor.RED,
    type: CardType.BOMBER,
  },
  {
    color: CardColor.BLUE,
    type: CardType.BOUNCER,
  },
  {
    color: CardColor.RED,
    type: CardType.BOUNCER,
  },
  {
    color: CardColor.GREY,
    type: CardType.BUTLER,
  },
  {
    color: CardColor.GREY,
    type: CardType.CLONE,
  },
  {
    color: CardColor.BLUE,
    type: CardType.CLOWN,
  },
  {
    color: CardColor.RED,
    type: CardType.CLOWN,
  },
  {
    color: CardColor.BLUE,
    type: CardType.CONMAN,
  },
  {
    color: CardColor.RED,
    type: CardType.CONMAN,
  },
  {
    color: CardColor.BLUE,
    type: CardType.COYBOY,
  },
  {
    color: CardColor.RED,
    type: CardType.COYBOY,
  },
  {
    color: CardColor.BLUE,
    type: CardType.CRIMINAL,
  },
  {
    color: CardColor.RED,
    type: CardType.CRIMINAL,
  },
  {
    color: CardColor.RED,
    type: CardType.CUPID,
  },
  {
    color: CardColor.BLUE,
    type: CardType.DEALER,
  },
  {
    color: CardColor.RED,
    type: CardType.DEALER,
  },
  {
    color: CardColor.GREY,
    type: CardType.DECOY,
  },
  {
    color: CardColor.BLUE,
    type: CardType.DEMON,
  },
  {
    color: CardColor.RED,
    type: CardType.DEMON,
  },
  {
    color: CardColor.BLUE,
    type: CardType.DOCTOR,
  },
  {
    color: CardColor.RED,
    type: CardType.DRBOOM,
  },
  {
    color: CardColor.OTHER,
    type: CardType.DRUNK,
  },
  {
    color: CardColor.BLUE,
    type: CardType.ENFORCER,
  },
  {
    color: CardColor.RED,
    type: CardType.ENFORCER,
  },
  {
    color: CardColor.RED,
    type: CardType.ENGINEER,
  },
  {
    color: CardColor.BLUE,
    type: CardType.ERIS,
  },
  {
    color: CardColor.GREY,
    type: CardType.GAMBLER,
  },
  {
    color: CardColor.GREY,
    type: CardType.HOTPOTATO,
  },
  {
    color: CardColor.BLUE,
    type: CardType.INVINCIBLE,
  },
  {
    color: CardColor.RED,
    type: CardType.IMMUNOLOGIST,
  },
  {
    color: CardColor.GREY,
    type: CardType.INTERN,
  },
  {
    color: CardColor.GREY,
    type: CardType.JULIET,
  },
  {
    color: CardColor.GREEN,
    type: CardType.LEPRECHAUN,
  },
  {
    color: CardColor.GREY,
    type: CardType.MAID,
  },
  {
    color: CardColor.RED,
    type: CardType.MARTYR,
  },
  {
    color: CardColor.GREY,
    type: CardType.MASTERMIND,
  },
  {
    color: CardColor.BLUE,
    type: CardType.MAYOR,
  },
  {
    color: CardColor.RED,
    type: CardType.MAYOR,
  },
  {
    color: CardColor.BLUE,
    type: CardType.MEDIC,
  },
  {
    color: CardColor.RED,
    type: CardType.MEDIC,
  },
  {
    color: CardColor.GREY,
    type: CardType.M16,
  },
  {
    color: CardColor.BLUE,
    type: CardType.MIME,
  },
  {
    color: CardColor.RED,
    type: CardType.MIME,
  },
  {
    color: CardColor.GREY,
    type: CardType.MINION,
  },
  {
    color: CardColor.GREY,
    type: CardType.MISTRESS,
  },
  {
    color: CardColor.GREY,
    type: CardType.MOBY,
  },
  {
    color: CardColor.BLUE,
    type: CardType.MUMMY,
  },
  {
    color: CardColor.RED,
    type: CardType.MUMMY,
  },
  {
    color: CardColor.BLUE,
    type: CardType.NEGOTIATOR,
  },
  {
    color: CardColor.RED,
    type: CardType.NEGOTIATOR,
  },
  {
    color: CardColor.GREY,
    type: CardType.NUCLEARTYRANT,
  },
  {
    color: CardColor.BLUE,
    type: CardType.NURSE,
  },
  {
    color: CardColor.BLUE,
    type: CardType.PAPARAZZO,
  },
  {
    color: CardColor.RED,
    type: CardType.PAPARAZZO,
  },
  {
    color: CardColor.BLUE,
    type: CardType.PARANOID,
  },
  {
    color: CardColor.RED,
    type: CardType.PARANOID,
  },
  {
    color: CardColor.BLUE,
    type: CardType.PRESIDENT,
  },
  {
    color: CardColor.BLUE,
    type: CardType.PRESIDENTSDAUGHTER,
  },
  {
    color: CardColor.GREY,
    type: CardType.PRIVATEEYE,
  },
  {
    color: CardColor.BLUE,
    type: CardType.PSYCHOLOGIST,
  },
  {
    color: CardColor.RED,
    type: CardType.PSYCHOLOGIST,
  },
  {
    color: CardColor.GREY,
    type: CardType.QUEEN,
  },
  {
    color: CardColor.GREY,
    type: CardType.RIVAL,
  },
  {
    color: CardColor.GREY,
    type: CardType.ROBOT,
  },
  {
    color: CardColor.GREY,
    type: CardType.ROMEO,
  },
  {
    color: CardColor.BLUE,
    type: CardType.SECURITY,
  },
  {
    color: CardColor.RED,
    type: CardType.SECURITY,
  },
  {
    color: CardColor.BLUE,
    type: CardType.SHYGUY,
  },
  {
    color: CardColor.RED,
    type: CardType.SHYGUY,
  },
  {
    color: CardColor.GREY,
    type: CardType.SNIPER,
  },
  {
    color: CardColor.RED,
    type: CardType.REDSPY,
  },
  {
    color: CardColor.BLUE,
    type: CardType.BLUESPY,
  },
  {
    color: CardColor.GREY,
    type: CardType.SURVIVOR,
  },
  {
    color: CardColor.GREY,
    type: CardType.TARGET,
  },
  {
    color: CardColor.BLUE,
    type: CardType.THUG,
  },
  {
    color: CardColor.RED,
    type: CardType.THUG,
  },
  {
    color: CardColor.RED,
    type: CardType.TINKERER,
  },
  {
    color: CardColor.GREY,
    type: CardType.TRAVELER,
  },
  {
    color: CardColor.BLUE,
    type: CardType.TUESDAYKNIGHT,
  },
  {
    color: CardColor.BLUE,
    type: CardType.USURPER,
  },
  {
    color: CardColor.RED,
    type: CardType.USURPER,
  },
  {
    color: CardColor.GREY,
    type: CardType.VICTIM,
  },
  {
    color: CardColor.GREY,
    type: CardType.WIFE,
  },
  {
    color: CardColor.GREEN,
    type: CardType.ZOMBIE,
  },
];

export default ALL_CARDS;
