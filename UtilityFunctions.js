// Coding Math utility functions

// Given a value, normalize it with respect to a minimum and maximum value of the range
// This still works if value > max or value < min
export function normalize(value, min, max) {
  return (value - min) / (max - min);
}
