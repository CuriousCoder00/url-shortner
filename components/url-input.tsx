import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const UrlInput = () => {
  return (
    <div className="flex items-center justify-center relative max-w-lg border-2 border-foreground mx-auto">
      <Input
        placeholder="Enter a URL"
        className="w-full h-14 rounded-none"
        type="url"
      />
      <Button className="h-14 rounded-none">Shorten Url</Button>
    </div>
  );
};

export default UrlInput;
