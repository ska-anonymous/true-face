// src/store/utils/applyReducerMap.js

/**
 * Tiny helper to keep case reducers in separate files and merge them
 * into createSlice({ reducers: ... }).
 *
 * Accepts a single map or an array of maps and returns a flat object
 * with only function values (skips undefined/mistakes).
 *
 * Usage:
 *   reducers: applyReducerMap(uiReducerMap)
 *   reducers: applyReducerMap([uiReducerMap, modalReducerMap])
 */
export function applyReducerMap(maps) {
  const result = {};

  const addMap = (m) => {
    if (!m) return;
    Object.keys(m).forEach((key) => {
      const fn = m[key];
      if (typeof fn === 'function') {
        result[key] = fn;
      }
    });
  };

  if (Array.isArray(maps)) {
    maps.forEach(addMap);
  } else {
    addMap(maps);
  }

  return result;
}
