/** 
 * This module contains functions to yassify a string of text with advanced beauty filters (emoji)
 * 
 * @example
 * ```ts
 * import { yassify } from "@younho9/yassify";
 * 
 * yassify("Hello, world!") // "Hello, world! 💅✨👑"
 * ```
 * 
 * @module
 */

/**
 * Yassify a string of text by appending emoji
 *
 * @param str The string of text to yassify.
 * @returns a string of text with emoji appended
 */
export function yassify(str: string): string {
  return `${str} 💅✨👑`;
}
