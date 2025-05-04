/*
LRU Cache

Implement the Least Recently Used (LRU) cache class LRUCache.

The class should support the following operations

LRUCache(int capacity) Initialize the LRU cache of size capacity.
get(int key) Return the value corresponding to the key if the key exists, otherwise return -1.
put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache.
If the introduction of the new pair causes the cache to exceed its capacity, remove the least recently used key.

A key is considered used if a get or a put operation is called on it.

Ensure that get and put each run in O(1) average time complexity.

*/

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map()
    }

    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }

        // Move accessed item to the end (most recently used)
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        }

        this.cache.set(key, value)

        // Evict least recently used if over capacity
        if (this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
}

describe('LRU Cache', () => {
    const cache = new LRUCache(2);

    it('Test', () => {
        cache.put(1, 1);
        cache.put(2, 2);
        expect(cache.get(1)).toBe(1);
        cache.put(3, 3);           // evicts key 2
        expect(cache.get(2)).toBe(-1);
        cache.put(4, 4);           // evicts key 1
        expect(cache.get(1)).toBe(-1);
        expect(cache.get(3)).toBe(3);
        expect(cache.get(4)).toBe(4);
    })
})
