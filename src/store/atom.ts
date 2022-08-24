import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const storage: any = createJSONStorage(() => sessionStorage);
export const adminModeAtom = atomWithStorage<boolean>(
  'adminMode',
  false,
  storage,
);
