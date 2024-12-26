"use client";
import { redirectUrl } from "@/actions/shortenUrl";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function RedirectUrl() {
  const url = usePathname();
  const fetchUrl = async () => {
    const response = await redirectUrl(url);
    console.log(response);
    if (typeof response === "string") {
      window.location.replace("/" + response);
    } else if (response.error) {
      console.error(response.error);
    }
  };
  useEffect(() => {
    fetchUrl();
  });
  return <div>RedirectUrl</div>;
}
