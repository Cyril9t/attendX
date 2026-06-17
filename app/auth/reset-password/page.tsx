import { Suspense } from "react";
import ResetPassword from "./reset-password";

export default function PasswordReset() {
    return (
        < Suspense fallback={<div>Loading....</div>}>
            <ResetPassword />
        </Suspense>
    )
}