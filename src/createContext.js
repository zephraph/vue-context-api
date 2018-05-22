import Provider from "./Provider";
import Consumer from "./Consumer";

export const createContext = defaultValue => {
  let context = {};
  return {
    Provider: Provider(context, defaultValue),
    Consumer: Consumer(context)
  };
};
