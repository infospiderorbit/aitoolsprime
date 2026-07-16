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
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(badgeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "a1c7adf0-b2f3-42fc-9047-1d14b658c160",
        subject: "Free Badge Listing Request - AI Tools Prime",
        from_name: "AI Tools Prime",
        email: email,
        message: "Tool URL: " + url + "\n\nThis user has embedded the badge on their website and is requesting a free listing.",
      }),
    });
    const data = await res.json();
    setLoading(false);
    if (data.success) setSubmitted(true);
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

  if (submitted) {
    return (
      <div className="text-center py-6 bg-green-50 rounded-xl border border-green-200">
        <div className="text-3xl mb-2">🎉</div>
        <p className="font-semibold text-green-700">Submitted Successfully!</p>
        <p className="text-sm text-green-600 mt-1">We will review and list your tool within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-muted rounded-xl p-4">
        <p className="text-sm font-semibold mb-2">Embed This Badge</p>
        <p className="text-xs text-muted-foreground mb-2">Copy and paste the following code into your website HTML:</p>
        <pre className="bg-background rounded p-2 text-xs overflow-x-auto whitespace-pre-wrap break-all border border-border mb-2">{badgeCode}</pre>
        <button
          type="button"
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
        required
        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-sm"
      />
      <input
        type="url"
        placeholder="Your AI Tool URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-sm"
      />
      <button
        type="submit"
        disabled={loading}
        className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded-xl font-semibold transition-colors disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Submit Free Listing"}
      </button>
    </form>
  );
}
