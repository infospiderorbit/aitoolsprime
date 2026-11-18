import { Suspense } from "react";
import FullListClient from "./FullListClient";

export const metadata = {
  title: "Full List of AI Tools | AI Tools Prime",
  description: "Browse the complete list of 1,900+ AI tools.",
};

export default function FullListPage() {
  return (
    <Suspense fallback={null}>
      <FullListClient />
    </Suspense>
  );
}
