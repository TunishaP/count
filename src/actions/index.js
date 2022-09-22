import Counter from '../component/counter';

export function increment() {
    return {
       type: 'INCREMENT'
    }
 }
 export function decrement() {
    return {
       type: 'DECREMENT'
    }
 }
 export function reset() {
    return { type: 'RESET' }
 }

export function handleChange() {
    return {type: 'SET'}
 }