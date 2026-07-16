"use client";
import { useState } from "react";

const badgeCode = `<a href="https://www.aitoolsprime.com?utm_source=badge&utm_medium=referral&utm_campaign=featured_badge" target="_blank" rel="noopener">
  <img src="https://www.aitoolsprime.com/badges/aitoolsprime-badge.png" alt="Featured on AI Tools Prime" style="border: none; width: 175px; height: 50px;">
</a>`;

export default function BadgeForm() {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(badgeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!show) {
    return (
      <button
        onClick={() => setShow(true)}
        className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-xl font-semibold transition-colors"
      >
        Get Free Badge Listing
      </button>
    );
  }

  const mailtoLink = "mailto:hello@aitoolsprime.com?subject=Free Badge Listing Request&body=Please list my AI tool for free. I have embedded your badge on my website.%0A%0AMy Email: " + email + "%0AMy Tool URL: " + url + "%0AMy Website where badge is embedded: ";

  return (
    <div className="space-y-4">
      <div className="bg-muted rounded-xl p-4">
        <p className="text-sm font-semibold mb-2">Embed This Badge</p>
        <p className="text-xs text-muted-foreground mb-2">Copy and paste the following code into your website HTML:</p>
        <pre className="bg-background rounded p-2 text-xs overflow-x-auto whitespace-pre-wrap break-all border border-border mb-2">{badgeCode}</pre>
        <button
          onClick={handleCopy}
          className="w-full text-xs py-2 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
        >
          {copied ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-sm"
      />
      <input
        type="url"
        placeholder="Your AI Tool URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-sm"
      />
      <a
        href={mailtoLink}
        className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-xl font-semibold transition-colors"
      >
        Submit Free Listing
      </a>
    </div>
  );
}
