"use client";
import { redirectUrl } from "@/actions/shortenUrl";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const RedirectUrl = () => {
  const { shortenedUrl } = useParams();
  useEffect(() => {
    const fetchUrl = async () => {
      const res = await redirectUrl({ shortenedUrl: shortenedUrl as string });
      if ("longUrl" in res) {
        window.location.replace("https://" + res.longUrl);
        return;
      }
    };
    fetchUrl();
  }, []);
  return <div>Redirecting...</div>;
};

export default RedirectUrl;
