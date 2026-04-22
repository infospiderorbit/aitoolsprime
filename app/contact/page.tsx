"use client";
import { useState } from "react";
import { Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in <span className="text-primary">Touch</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about AI tools or need help finding the right solution? We're here to help you navigate the world of artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
              <h2 className="text-xl font-bold mb-1">Send us a Message</h2>
              <p className="text-muted-foreground mb-6 text-sm">Fill out the form below and we'll get back to you as soon as possible.</p>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Full Name</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-2 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Email Address</label>
                      <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-2 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Subject</label>
                    <input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="What's this about?"
                      className="w-full px-4 py-2 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Message</label>
                    <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="w-full px-4 py-2 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                  </div>
                  <button type="submit" disabled={submitting}
                    className="w-full gradient-primary text-white py-2.5 rounded-xl font-semibold disabled:opacity-50">
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
              <div className="flex items-center gap-2 font-bold mb-3"><Mail className="h-5 w-5" /> Email Support</div>
              <p className="text-muted-foreground text-sm mb-2">For general inquiries and support</p>
              <a href="mailto:hello@aitoolsprime.com" className="text-primary hover:underline font-medium text-sm">hello@aitoolsprime.com</a>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
              <div className="flex items-center gap-2 font-bold mb-3"><Clock className="h-5 w-5" /> Response Time</div>
              <p className="text-muted-foreground text-sm">We typically respond within 24 hours during business days.</p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
              <h3 className="font-bold mb-3">Common Topics</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• AI tool recommendations</li>
                <li>• Partnership inquiries</li>
                <li>• Technical support</li>
                <li>• Content suggestions</li>
                <li>• Business opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}