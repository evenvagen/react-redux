export const increment = () => {
  return {
    type: 'COUNT_INCRESE',
  };
};
 
export const decrement = () => {
  return {
    type: 'COUNT_DECRESE',
  };
};

export const reset = () => {
    return {
        type: 'COUNT_RESET',
    };
}