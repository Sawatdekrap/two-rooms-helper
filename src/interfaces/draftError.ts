import DraftCardItf from "../interfaces/draftCard";

export default interface DraftErrorItf {
  description: string;
  isError: (draftCards: DraftCardItf[]) => boolean;
}
