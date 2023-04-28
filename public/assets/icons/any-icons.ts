import { faIconList } from './fa-icons';
import { miIconList } from './mi-icons';

export const anyIconList = { ...faIconList, ...miIconList };

export type anyIconOptions = keyof typeof anyIconList;
