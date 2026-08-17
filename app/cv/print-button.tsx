"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn btn-primary print:hidden">
      <ArrowDownTrayIcon className="w-4 h-4" /> Save as PDF
    </button>
  );
}
