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
        if (res.longUrl.startsWith("http") || res.longUrl.startsWith("https")) {
          window.location.replace(res.longUrl);
          return;
        }
        window.location.replace("https://" + res.longUrl);
        return;
      }
    };
    fetchUrl();
  }, [shortenedUrl]);
  return <div>Redirecting...</div>;
};

export default RedirectUrl;
