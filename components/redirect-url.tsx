"use client";
import { useEffect } from "react";

export default function RedirectUrl() {
  const url = window.location.pathname;
  const fetchUrl = async () => {
    const response = await fetch("/api/shorten", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shortUrl: url }),
    });
    const data = await response.json();
    if (response.ok) {
      window.location.href = data.longUrl;
    }
  };
  useEffect(() => {
    fetchUrl();
  });
  return <div>RedirectUrl</div>;
}
