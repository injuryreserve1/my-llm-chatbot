import { apiClient } from "@/shared/api/base";
import { type TMessage } from "./../model/MessageType";

export const postMessage = async (msg: TMessage) => {
  const res = await apiClient.post(msg);
  return res;
};
