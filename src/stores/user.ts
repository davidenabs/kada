import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface UserState {
  user: any;
  token: string | null;
  role: string | null;
  authenticated: boolean;
  language: string | null;
}

export const defaultUser: UserState = {
  user: null,
  token: null,
  role: null,
  authenticated: false,
  language: null,
};

export const userAtom = atomWithStorage("gsp-user", defaultUser, undefined, {
  getOnInit: true,
});

export const clearUserAtom = atom(null, (_get, set, _data) => {
  return set(userAtom, defaultUser);
});
