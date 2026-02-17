import { Lock } from "lucide-react";

export default function NDANotice() {
  return (
    <div className="bg-orange/10 border border-orange/20 rounded-xl p-6 mb-12">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center flex-shrink-0">
          <Lock size={18} className="text-orange" />
        </div>
        <div>
          <h3 className="font-serif font-bold text-charcoal dark:text-offwhite mb-1">
            NDA Protected Project
          </h3>
          <p className="text-sm text-charcoal/60 dark:text-offwhite/60 leading-relaxed">
            This project was developed under a Non-Disclosure Agreement.
            Specific details about the client, proprietary features, and
            internal business logic have been generalized to respect
            confidentiality obligations.
          </p>
        </div>
      </div>
    </div>
  );
}
