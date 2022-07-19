// Coding Math utility functions

// Given a value, normalize it with respect to a minimum and maximum value of the range
// This still works if value > max or value < min
export function normalize(value, min, max) {
  return (value - min) / (max - min);
}

// Linear interpolation of values in a range regardless of whether the min value of the range is 0 or not.
// Is also called lerp
export function linearInterpolate(norm, min, max) {
  return (max - min) * norm + min;
}
