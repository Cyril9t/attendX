import { Suspense } from "react";
import ConfirmEmail from "./confirm-email";

export default function Page() {
  return <Suspense fallback={<div>Loading...</div>}>
    <ConfirmEmail />
  </Suspense>
}