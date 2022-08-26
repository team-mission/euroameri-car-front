import { atomWithStorage } from 'jotai/utils';

export const adminModeAtom = atomWithStorage<boolean>('adminMode', false);
