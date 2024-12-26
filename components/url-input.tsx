import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { shortenUrl } from "@/actions/shortenUrl";

const UrlInput = () => {
  const [url, setUrl] = React.useState("");
  const [shortenedUrl, setShortenedUrl] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleShorten = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await shortenUrl(url);
      if ('shortUrl' in response) {
        setShortenedUrl(`${window.location.origin}/${response.shortUrl}`);
      } else {
        setError("An error occurred. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <div className="flex items-center justify-center relative max-w-lg border-2 border-foreground mx-auto">
        <Input
          disabled={loading}
          placeholder="Enter a URL"
          className="w-full h-14 rounded-none"
          type="url"
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button
          disabled={loading}
          className="h-14 rounded-none"
          onClick={() => handleShorten()}
        >
          Shorten Url
        </Button>
      </div>
      {shortenedUrl && (
        <div className="mt-4">
          <a
            href={shortenedUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline"
          >
            {shortenedUrl}
          </a>
        </div>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default UrlInput;
