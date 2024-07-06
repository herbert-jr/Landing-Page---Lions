export const OpenMenuvariants = {
  animate: {
    height: 'auto',
    width: '380px',
    borderRadius: '25px',
    right: '0',
    top: '54px',
    transition: {
      duration: 0.75,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
  initial: {
    height: '100%',
    width: '100%',
    top: '0',
    right: '0',
    borderRadius: '25px',
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    height: '100%',
    width: '100%',
    top: '0',
    right: '0',
    borderRadius: '25px',
    transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },
};
