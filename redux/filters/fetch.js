import bent from "bent";
import {option} from "../../option";

export const fetchFilter = async (ctgrId) => {
  let result = {}
  const res = await bent(
    option.api,
    "string",
    "POST",
    "json",
    200
  )("/filter/read/" + ctgrId);

  try {
    result = res.result
  } catch (e) {
    result = {}
  }
  return result;
}