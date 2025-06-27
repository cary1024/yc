import React from "react";
import StartupForm from "@/components/StartupForm";
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit your Startup Pitch</h1>
      </section>
      <StartupForm />
    </>
  );
};

export default page;
