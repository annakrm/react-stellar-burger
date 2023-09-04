export const closeByEsc = (event: KeyboardEvent, onClose: () => void): void => {
  if (event.key === "Escape") {
    onClose();
  }
};
