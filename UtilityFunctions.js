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

// Combines the normalize and linearInterpolation functions
// in order to map a value from one range into another
export function map(value, sourceMin, sourceMax, destMin, destMax){
  let n = norm(value, sourceMin, sourceMax);
  return linearInterpolate(n, destMin, destMax);
}

// Clamp an input value to guarantee it is within a specified range
export function clamp(value, min, max){
  // make sure the value is no less than min
  let value = Math.max(value, min);
  return Math.min(value, max);
}