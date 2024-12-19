"use strict";

export function setupIOHandlers(onMouseClick, onKeydown, onKeyup) {
  document.addEventListener("click", onMouseClick, false);
  document.addEventListener("keydown", onKeydown, false);
  document.addEventListener("keyup", onKeyup, false);
}
