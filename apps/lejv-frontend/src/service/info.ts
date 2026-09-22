import { CustomRequestOptions_ } from "@/http/types";
/* eslint-disable */
// @ts-ignore
import request from "@/http/vue-query";

import * as API from "./types";

/** 用户信息 GET /user/info */
export function infoUsingGet({ options }: { options?: CustomRequestOptions_ }) {
  return request<API.InfoUsingGetResponse>("/user/info", {
    method: "GET",
    ...(options || {}),
  });
}
