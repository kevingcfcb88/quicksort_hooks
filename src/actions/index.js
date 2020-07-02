export const currentStep = (a = []) => {
  return { type: 'GET_STEP', payload: a };
};
