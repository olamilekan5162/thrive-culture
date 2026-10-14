import React from "react";
import { Info } from "lucide-react";

export default function PlaceholderNotice({
  label = "Official Statement Pending",
  message,
}: {
  label?: string;
  message?: string;
}) {
  return (
    <div className="flex items-start gap-2.5 p-3 sm:p-3.5 bg-[#FFF5EC] border border-[#FED7B2] rounded-md text-xs text-stone-800 my-3">
      <Info className="w-4 h-4 text-[#F28524] shrink-0 mt-0.5" />
      <div>
        <span className="font-bold text-stone-900">{label}: </span>
        <span className="text-stone-700">
          {message ||
            "This section contains placeholder content to be confirmed by Thrive Culture."}
        </span>
      </div>
    </div>
  );
}
