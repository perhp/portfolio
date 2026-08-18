"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useId, useState } from "react";
import { site } from "../_data/site";

const SUBJECT = "Project inquiry";
const PROMPTS = ["What are you building?", "Roughly when does it need to exist?", "What does a great result look like?"];

/** A short project brief that opens the visitor's mail app with the text as the message body. */
export function BriefForm({ className = "" }: { className?: string }) {
  const [brief, setBrief] = useState("");
  const id = useId();

  const href = `mailto:${site.email}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(brief.trim())}`;

  return (
    <form
      className={`bg-surface border border-line-strong ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = href;
      }}
    >
      <dl className="px-5 py-3 border-b divide-y divide-line meta border-line sm:px-6">
        <div className="flex gap-4 py-2">
          <dt className="w-16 shrink-0">To</dt>
          <dd className="text-ink">{site.email}</dd>
        </div>
        <div className="flex gap-4 py-2">
          <dt className="w-16 shrink-0">Subject</dt>
          <dd className="text-ink">{SUBJECT}</dd>
        </div>
      </dl>

      <div className="px-5 py-4 sm:px-6">
        <label htmlFor={id} className="sr-only">
          Your project brief
        </label>
        <textarea
          id={id}
          name="brief"
          rows={5}
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          placeholder={PROMPTS.join(" ")}
          className="w-full leading-relaxed bg-transparent resize-none placeholder:text-ink-faint focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-t border-line sm:px-6">
        <p className="meta">Opens in your mail app</p>
        <button type="submit" className="btn btn-primary h-10">
          Send brief <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
