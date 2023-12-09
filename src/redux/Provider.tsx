"use client";

import store from "@/redux/store";
import { Provider } from "react-redux";
import { withChildren } from "@/utils";

export default function Providers({ children }: withChildren) {
  return <Provider store={store}>{children}</Provider>;
}
