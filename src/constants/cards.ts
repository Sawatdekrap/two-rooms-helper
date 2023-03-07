import CardItf from "../interfaces/card";
import { CardColor, CardType, CardId } from "../types/card";

const ALL_CARDS: CardItf[] = [
  {
    id: CardId.AGENT_BLUE,
    color: CardColor.BLUE,
    type: CardType.AGENT,
  },
  {
    id: CardId.AGENT_RED,
    color: CardColor.RED,
    type: CardType.AGENT,
  },
  {
    id: CardId.AGORAPHOBE,
    color: CardColor.GREY,
    type: CardType.AGORAPHOBE,
  },
  {
    id: CardId.AHAB,
    color: CardColor.GREY,
    type: CardType.AHAB,
  },
  {
    id: CardId.AMBASSADOR_BLUE,
    color: CardColor.BLUE,
    type: CardType.AMBASSADOR,
  },
  {
    id: CardId.AMBASSADOR_RED,
    color: CardColor.RED,
    type: CardType.AMBASSADOR,
  },
  {
    id: CardId.ANARCHIST,
    color: CardColor.GREY,
    type: CardType.ANARCHIST,
  },
  {
    id: CardId.ANGEL_BLUE,
    color: CardColor.BLUE,
    type: CardType.ANGEL,
  },
  {
    id: CardId.ANGEL_RED,
    color: CardColor.RED,
    type: CardType.ANGEL,
  },
  {
    id: CardId.BLIND_BLUE,
    color: CardColor.BLUE,
    type: CardType.BLIND,
  },
  {
    id: CardId.BLIND_RED,
    color: CardColor.RED,
    type: CardType.BLIND,
  },
  {
    id: CardId.BLUETEAM,
    color: CardColor.BLUE,
    type: CardType.BASIC,
  },
  {
    id: CardId.REDTEAM,
    color: CardColor.RED,
    type: CardType.BASIC,
  },
  {
    id: CardId.BOMBBOT,
    color: CardColor.GREY,
    type: CardType.BOMBBOT,
  },
  {
    id: CardId.BOMBER,
    color: CardColor.RED,
    type: CardType.BOMBER,
    min: 1,
    max: 1,
  },
  {
    id: CardId.BOUNCER_BLUE,
    color: CardColor.BLUE,
    type: CardType.BOUNCER,
  },
  {
    id: CardId.BOUNCER_RED,
    color: CardColor.RED,
    type: CardType.BOUNCER,
  },
  {
    id: CardId.BUTLER,
    color: CardColor.GREY,
    type: CardType.BUTLER,
  },
  {
    id: CardId.CLONE,
    color: CardColor.GREY,
    type: CardType.CLONE,
  },
  {
    id: CardId.CLOWN_BLUE,
    color: CardColor.BLUE,
    type: CardType.CLOWN,
  },
  {
    id: CardId.CLOWN_RED,
    color: CardColor.RED,
    type: CardType.CLOWN,
  },
  {
    id: CardId.CONMAN_BLUE,
    color: CardColor.BLUE,
    type: CardType.CONMAN,
  },
  {
    id: CardId.CONMAN_RED,
    color: CardColor.RED,
    type: CardType.CONMAN,
  },
  {
    id: CardId.COYBOY_BLUE,
    color: CardColor.BLUE,
    type: CardType.COYBOY,
  },
  {
    id: CardId.COYBOY_RED,
    color: CardColor.RED,
    type: CardType.COYBOY,
  },
  {
    id: CardId.CRIMINAL_BLUE,
    color: CardColor.BLUE,
    type: CardType.CRIMINAL,
  },
  {
    id: CardId.CRIMINAL_RED,
    color: CardColor.RED,
    type: CardType.CRIMINAL,
  },
  {
    id: CardId.CUPID,
    color: CardColor.RED,
    type: CardType.CUPID,
  },
  {
    id: CardId.DEALER_BLUE,
    color: CardColor.BLUE,
    type: CardType.DEALER,
  },
  {
    id: CardId.DEALER_RED,
    color: CardColor.RED,
    type: CardType.DEALER,
  },
  {
    id: CardId.DECOY,
    color: CardColor.GREY,
    type: CardType.DECOY,
  },
  {
    id: CardId.DEMON_BLUE,
    color: CardColor.BLUE,
    type: CardType.DEMON,
  },
  {
    id: CardId.DEMON_RED,
    color: CardColor.RED,
    type: CardType.DEMON,
  },
  {
    id: CardId.DOCTOR,
    color: CardColor.BLUE,
    type: CardType.DOCTOR,
  },
  {
    id: CardId.DRBOOM,
    color: CardColor.RED,
    type: CardType.DRBOOM,
  },
  {
    id: CardId.DRUNK,
    color: CardColor.OTHER,
    type: CardType.DRUNK,
  },
  {
    id: CardId.ENFORCER_BLUE,
    color: CardColor.BLUE,
    type: CardType.ENFORCER,
  },
  {
    id: CardId.ENFORCER_RED,
    color: CardColor.RED,
    type: CardType.ENFORCER,
  },
  {
    id: CardId.ENGINEER,
    color: CardColor.RED,
    type: CardType.ENGINEER,
  },
  {
    id: CardId.ERIS,
    color: CardColor.BLUE,
    type: CardType.ERIS,
  },
  {
    id: CardId.GAMBLER,
    color: CardColor.GREY,
    type: CardType.GAMBLER,
  },
  {
    id: CardId.HOTPOTATO,
    color: CardColor.GREY,
    type: CardType.HOTPOTATO,
  },
  {
    id: CardId.INVINCIBLE,
    color: CardColor.BLUE,
    type: CardType.INVINCIBLE,
  },
  {
    id: CardId.IMMUNOLOGIST,
    color: CardColor.RED,
    type: CardType.IMMUNOLOGIST,
  },
  {
    id: CardId.INTERN,
    color: CardColor.GREY,
    type: CardType.INTERN,
  },
  {
    id: CardId.JULIET,
    color: CardColor.GREY,
    type: CardType.JULIET,
  },
  {
    id: CardId.LEPRECHAUN,
    color: CardColor.GREEN,
    type: CardType.LEPRECHAUN,
  },
  {
    id: CardId.MAID,
    color: CardColor.GREY,
    type: CardType.MAID,
  },
  {
    id: CardId.MARTYR,
    color: CardColor.RED,
    type: CardType.MARTYR,
  },
  {
    id: CardId.MASTERMIND,
    color: CardColor.GREY,
    type: CardType.MASTERMIND,
  },
  {
    id: CardId.MAYOR_BLUE,
    color: CardColor.BLUE,
    type: CardType.MAYOR,
  },
  {
    id: CardId.MAYOR_RED,
    color: CardColor.RED,
    type: CardType.MAYOR,
  },
  {
    id: CardId.MEDIC_BLUE,
    color: CardColor.BLUE,
    type: CardType.MEDIC,
  },
  {
    id: CardId.MEDIC_RED,
    color: CardColor.RED,
    type: CardType.MEDIC,
  },
  {
    id: CardId.M16,
    color: CardColor.GREY,
    type: CardType.M16,
  },
  {
    id: CardId.MIME_BLUE,
    color: CardColor.BLUE,
    type: CardType.MIME,
  },
  {
    id: CardId.MIME_RED,
    color: CardColor.RED,
    type: CardType.MIME,
  },
  {
    id: CardId.MINION,
    color: CardColor.GREY,
    type: CardType.MINION,
  },
  {
    id: CardId.MISTRESS,
    color: CardColor.GREY,
    type: CardType.MISTRESS,
  },
  {
    id: CardId.MOBY,
    color: CardColor.GREY,
    type: CardType.MOBY,
  },
  {
    id: CardId.MUMMY_BLUE,
    color: CardColor.BLUE,
    type: CardType.MUMMY,
  },
  {
    id: CardId.MUMMY_RED,
    color: CardColor.RED,
    type: CardType.MUMMY,
  },
  {
    id: CardId.NEGOTIATOR_BLUE,
    color: CardColor.BLUE,
    type: CardType.NEGOTIATOR,
  },
  {
    id: CardId.NEGOTIATOR_RED,
    color: CardColor.RED,
    type: CardType.NEGOTIATOR,
  },
  {
    id: CardId.NUCLEARTYRANT,
    color: CardColor.GREY,
    type: CardType.NUCLEARTYRANT,
  },
  {
    id: CardId.NURSE,
    color: CardColor.BLUE,
    type: CardType.NURSE,
  },
  {
    id: CardId.PAPARAZZO_BLUE,
    color: CardColor.BLUE,
    type: CardType.PAPARAZZO,
  },
  {
    id: CardId.PAPARAZZO_RED,
    color: CardColor.RED,
    type: CardType.PAPARAZZO,
  },
  {
    id: CardId.PARANOID_BLUE,
    color: CardColor.BLUE,
    type: CardType.PARANOID,
  },
  {
    id: CardId.PARANOID_RED,
    color: CardColor.RED,
    type: CardType.PARANOID,
  },
  {
    id: CardId.PRESIDENT,
    color: CardColor.BLUE,
    type: CardType.PRESIDENT,
    min: 1,
    max: 1,
  },
  {
    id: CardId.PRESIDENTSDAUGHTER,
    color: CardColor.BLUE,
    type: CardType.PRESIDENTSDAUGHTER,
  },
  {
    id: CardId.PRIVATEEYE,
    color: CardColor.GREY,
    type: CardType.PRIVATEEYE,
  },
  {
    id: CardId.PSYCHOLOGIST_BLUE,
    color: CardColor.BLUE,
    type: CardType.PSYCHOLOGIST,
  },
  {
    id: CardId.PSYCHOLOGIST_RED,
    color: CardColor.RED,
    type: CardType.PSYCHOLOGIST,
  },
  {
    id: CardId.QUEEN,
    color: CardColor.GREY,
    type: CardType.QUEEN,
  },
  {
    id: CardId.RIVAL,
    color: CardColor.GREY,
    type: CardType.RIVAL,
  },
  {
    id: CardId.ROBOT,
    color: CardColor.GREY,
    type: CardType.ROBOT,
  },
  {
    id: CardId.ROMEO,
    color: CardColor.GREY,
    type: CardType.ROMEO,
  },
  {
    id: CardId.SECURITY_BLUE,
    color: CardColor.BLUE,
    type: CardType.SECURITY,
  },
  {
    id: CardId.SECURITY_RED,
    color: CardColor.RED,
    type: CardType.SECURITY,
  },
  {
    id: CardId.SHYGUY_BLUE,
    color: CardColor.BLUE,
    type: CardType.SHYGUY,
  },
  {
    id: CardId.SHYGUY_RED,
    color: CardColor.RED,
    type: CardType.SHYGUY,
  },
  {
    id: CardId.SNIPER,
    color: CardColor.GREY,
    type: CardType.SNIPER,
  },
  {
    id: CardId.REDSPY,
    color: CardColor.RED,
    type: CardType.REDSPY,
  },
  {
    id: CardId.BLUESPY,
    color: CardColor.BLUE,
    type: CardType.BLUESPY,
  },
  {
    id: CardId.SURVIVOR,
    color: CardColor.GREY,
    type: CardType.SURVIVOR,
  },
  {
    id: CardId.TARGET,
    color: CardColor.GREY,
    type: CardType.TARGET,
  },
  {
    id: CardId.THUG_BLUE,
    color: CardColor.BLUE,
    type: CardType.THUG,
  },
  {
    id: CardId.THUG_RED,
    color: CardColor.RED,
    type: CardType.THUG,
  },
  {
    id: CardId.TINKERER,
    color: CardColor.RED,
    type: CardType.TINKERER,
  },
  {
    id: CardId.TRAVELER,
    color: CardColor.GREY,
    type: CardType.TRAVELER,
  },
  {
    id: CardId.TUESDAYKNIGHT,
    color: CardColor.BLUE,
    type: CardType.TUESDAYKNIGHT,
  },
  {
    id: CardId.USURPER_BLUE,
    color: CardColor.BLUE,
    type: CardType.USURPER,
  },
  {
    id: CardId.USURPER_RED,
    color: CardColor.RED,
    type: CardType.USURPER,
  },
  {
    id: CardId.VICTIM,
    color: CardColor.GREY,
    type: CardType.VICTIM,
  },
  {
    id: CardId.WIFE,
    color: CardColor.GREY,
    type: CardType.WIFE,
  },
  {
    id: CardId.ZOMBIE,
    color: CardColor.GREEN,
    type: CardType.ZOMBIE,
  },
];

export default ALL_CARDS;
