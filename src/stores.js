import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id:1,
        rating: 10,
        text: 'testtesttest'
    },
    {
        id:2,
        rating: 9,
        text: 'テストストテスト'
    },
    {
        id:3,
        rating: 8,
        text: 'TESTTESTTEST'
    }
])