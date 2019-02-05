/**
 * The method call returns a pseudorandom, uniformly distributed int value between 0 (inclusive) and n (exclusive).
 *
 * @param bound This is the bound on the random number to be returned. Must be positive.
 * @returns {number} generated value.
 */
const nextInt = bound => Math.floor(Math.random() * bound);

/**
 * The method call returns the next pseudorandom, uniformly distributed boolean value.
 *
 * @returns {boolean} generated value.
 */
const nextBoolean = () => Math.random() > 0.5;


export default {nextInt, nextBoolean};