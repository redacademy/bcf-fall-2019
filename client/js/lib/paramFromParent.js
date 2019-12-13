export const getParamFromParent = (navigation, paramName) => {
  const {getParam, dangerouslyGetParent} = navigation;
  let parent = dangerouslyGetParent();
  let val = getParam(paramName);
  while (val === undefined && parent && parent.getParam) {
    val = parent.getParam(paramName);
    parent = parent.dangerouslyGetParent();
  }
  return val;
};
