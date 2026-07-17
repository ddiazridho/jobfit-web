import SubmitForm from "./SubmitForm";
import { useState } from "react";
import { AnalyzerResultData, RoleAnalysisRaw } from "./types";
import Results from "./Results";

export default function AnalyzerCard() {
    // NOTE - state interface AnalyzerResultData atau null untuk SubmitForm
    const [result, setResult] = useState< RoleAnalysisRaw[] | null > (null);

    return (
        <div className="analyzer-card">
            {/* NOTE - Pengkondisian state */}
            {result === null ? (
                <SubmitForm onSubmitSuccess={setResult} />
            ) : (
                <Results 
                    roles={result} 
                    onAnalyzeAnother={() => setResult(null)} />
            )}
        </div>
    );
}
