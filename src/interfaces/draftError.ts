import DraftCardItf from "../interfaces/draftCard";

export interface DraftErrorResolutionItf {
  description: string;
  apply: (draftCards: DraftCardItf[]) => DraftCardItf[];
}

export default interface DraftErrorItf {
  description: string;
  isError: (draftCards: DraftCardItf[]) => boolean;
  resolutions?: DraftErrorResolutionItf[];
}
