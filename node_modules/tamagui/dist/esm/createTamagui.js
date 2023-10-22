import { createTamagui as createTamaguiCore } from "@tamagui/core";
const createTamagui = process.env.NODE_ENV !== "development" ? createTamaguiCore : (conf) => {
  const sizeTokenKeys = ["$true"], hasKeys = (expectedKeys, obj) => expectedKeys.every((k) => typeof obj[k] < "u"), tamaguiConfig = createTamaguiCore(conf);
  for (const name of ["size", "space"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name];
    if (!tokenSet)
      throw new Error(
        `Expected tokens for "${name}" in ${Object.keys(
          tamaguiConfig.tokensParsed
        ).join(", ")}`
      );
    if (!hasKeys(sizeTokenKeys, tokenSet))
      throw new Error(`
createTamagui() missing expected tokens.${name}:

Received: ${Object.keys(tokenSet).join(", ")}

Expected: ${sizeTokenKeys.join(", ")}

Tamagui expects a "true" key that is the same value as your default size. This is so 
it can size things up or down from the defaults without assuming which keys you use.

Please define a "true" or "$true" key on your size and space tokens like so (example):

size: {
  sm: 2,
  md: 10,
  true: 10, // this means "md" is your default size
  lg: 20,
}

`);
  }
  const expected = Object.keys(tamaguiConfig.tokensParsed.size);
  for (const name of ["radius", "zIndex"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name], received = Object.keys(tokenSet);
    if (!received.some((rk) => expected.includes(rk)))
      throw new Error(`
createTamagui() invalid tokens.${name}:

Received: ${received.join(", ")}

Expected a subset of: ${expected.join(", ")}

`);
  }
  return tamaguiConfig;
};
export {
  createTamagui
};
//# sourceMappingURL=createTamagui.js.map
