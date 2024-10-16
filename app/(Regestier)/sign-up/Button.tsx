"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const CreateUserBtn = () => {
  const status = useFormStatus();
  return (
    <Button
      type="submit"
      className={`w-full  text-white text-md font-bold my-8 h-12 ${
        status.pending ? "bg-[#201f24]/70" : "bg-[#201f24]"
      }`}
      disabled={status.pending}
    >
      {status.pending ? "Creating User" : "Create User"}
    </Button>
  );
};

export default CreateUserBtn;
