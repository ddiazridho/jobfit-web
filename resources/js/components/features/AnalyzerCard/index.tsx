import SubmitForm from "./SubmitForm";
import { useState } from "react";
import { RoleAnalysisRaw, AnalyzerErrorResponse } from "./types";
import Results from "./Results";
import ErrorState from "./Error";

// NOTE - Untuk 4 state
type AnalyzerViewState = 
| {status : 'form'}
| {status : 'loading'}
| {status : 'results', results: RoleAnalysisRaw[]}
| {status : 'error', error : AnalyzerErrorResponse}

export default function AnalyzerCard() {
    // NOTE - state interface AnalyzerViewState 4 state
    const [view, setView] = useState< AnalyzerViewState > ({status : 'form'});

    return (
        <div className="analyzer-card">
            {/* NOTE - STATE FORM*/}
            {view.status == 'form' && (
                <SubmitForm
                onSubmitSuccess={(results)=>setView({ status: 'results', results, })}
                onSubmitError={(error)=>setView({ status : 'error', error})}
                onSubmitStart={()=>setView({status : 'loading'})} 
                />
            )}

            {/* NOTE - STATE LOADING */}
            {view.status === 'loading' && <div>Loading state — belum dibuat</div>}

            {/* NOTE - STATE RESULT */}
            {view.status === 'results' && (
                    <Results
                    // Data results
                    roles={view.results}
                    onAnalyzeAnother={() => setView({ status: 'form' })}
                    />
                )}
            
            {/* NOTE - STATE ERROR */}
            {view.status === 'error' && (
                <ErrorState
                    // Data error
                error={view.error}
                onRetry={() => setView({ status: 'form' })}
                />
            )}
        </div>
    );
}
