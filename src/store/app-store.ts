import { defineStore } from 'pinia';
import { booksData } from '@/constants/booksData.ts';

export const useAppStore = defineStore(
    'app-store',
    () => {
    return { booksData };
});
