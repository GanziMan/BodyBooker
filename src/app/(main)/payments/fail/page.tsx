"use client";

import { useSearchParams } from "next/navigation";
import { FailForm } from "./FailForm";
import { Suspense } from "react";
import PageContainer from "@/components/PageContainer";

export default function FailPage() {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <PageContainer>
        <FailContent></FailContent>
      </PageContainer>
    </Suspense>
  );
}

function FailContent() {
  const searchParams = useSearchParams();
  const errorCode = searchParams.get("code");
  const errorMessage = searchParams.get("message");
  return <FailForm errorCode={errorCode!} errorMessage={errorMessage!} />;
}
