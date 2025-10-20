import { defineStore } from 'pinia'

export const useBasicDataStore = defineStore('basicdata', {
    state: () => ({
        user: {},
    }),
    actions: {
        setUser(value) {
            this.user = value;
        },
    }
});
