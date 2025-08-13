import { v4 as uuidv4 } from "uuid";

export const generateId = (): string => {
  const id = uuidv4().slice(0, 8);
  return id;
};
