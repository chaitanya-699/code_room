import {
  dummySubmissionResponseAccepted,
  dummySubmissionResponseError,
  dummySubmissionResponseWrongAnswer,
  dummySubmissions,
} from "@/lib/api";
import { Problem } from "@/lib/types";
import ReactMarkdown from "react-markdown";

function ProblemDescription({
  leftWidth,
  isSubmitted,
  showDescription,
  setShowDescription,
  problemData,
  isSubmitting,
}: {
  leftWidth: number;
  isSubmitted: boolean;
  showDescription: string;
  setShowDescription: (tab: string) => void;
  problemData: Problem | null;
  isSubmitting: boolean;
}) {
  const content = problemData?.content || null;

  return (
    <div className="left" style={{ width: `${leftWidth}%` }}>
      <div className="left-body-header">
        <button
          className={`${showDescription === "description" ? "activeDescriptionTab" : ""}`}
          onClick={() => setShowDescription("description")}
        >
          Description
        </button>
        {isSubmitted && (
          <button
            className={`${showDescription === "submission-state" || isSubmitting ? "activeDescriptionTab" : ""}`}
            onClick={() => setShowDescription("submission-state")}
          >
            {isSubmitting
              ? "Submitting..."
              : dummySubmissionResponseAccepted.status}
          </button>
        )}
        <button
          className={`${showDescription === "submissions" ? "activeDescriptionTab" : ""}`}
          onClick={() => setShowDescription("submissions")}
        >
          Submissions
        </button>
      </div>
      {showDescription === "description" && (
        <div className="question-main-body">
          <h1>Two Sum</h1>
          <div className="problem-markdown">
            <ReactMarkdown>
              {content !== null ? content : "No content available."}
            </ReactMarkdown>
          </div>
        </div>
      )}

      {showDescription === "submissions" && (
        <div className="submissions-container">
          <div className="submission-table">
            <div className="submission-header">
              <p>s.no</p>
              <p>status</p>
              <p>language</p>
              <p>runtime</p>
              <p>memory</p>
            </div>
            {isSubmitted &&
              dummySubmissions.map((submission, index) => (
                <div key={submission.id} className="submission-row">
                  <p>{index + 1}</p>
                  <p>{submission.status}</p>
                  <p>{submission.language}</p>
                  <p>{submission.runtime}</p>
                  <p>{submission.memory}</p>
                </div>
              ))}
            {!isSubmitted && (
              <p
                style={{
                  textAlign: "center",
                  padding: "5px",
                  fontSize: "17px",
                }}
                className="no-submissions"
              >
                No submissions yet.
              </p>
            )}
          </div>
        </div>
      )}

      {showDescription === "submission-state" && (
        <div className="submission-state">
          {dummySubmissionResponseAccepted.status === "Accepted" && (
            <div className="submission-state-accepted">
              <h1>{dummySubmissionResponseAccepted.status}</h1>
              <p>Runtime: {dummySubmissionResponseAccepted.runtime}</p>
              <p>Memory: {dummySubmissionResponseAccepted.memory}</p>
              <p>
                <span>
                  {dummySubmissionResponseAccepted.passedTestCases} /{" "}
                  {dummySubmissionResponseAccepted.totalTestCases} test cases
                  passed
                </span>
              </p>
              <p>
                Date and Time: {dummySubmissionResponseAccepted.dateAndTime}
              </p>
            </div>
          )}
          {dummySubmissionResponseWrongAnswer.status === "Wrong Answer" && (
            <div className="submission-state-wrong-answer">
              <h1>{dummySubmissionResponseWrongAnswer.status}</h1>
              <p>Runtime: {dummySubmissionResponseWrongAnswer.runtime}</p>
              <p>Memory: {dummySubmissionResponseWrongAnswer.memory}</p>
              <p>
                <span>
                  {dummySubmissionResponseWrongAnswer.passedTestCases} /{" "}
                  {dummySubmissionResponseWrongAnswer.totalTestCases} test cases
                  passed
                </span>
              </p>
              <p>
                Date and Time: {dummySubmissionResponseWrongAnswer.dateAndTime}
              </p>
            </div>
          )}
          {dummySubmissionResponseError.status === "Error" && (
            <div className="submission-state-error">
              <h1
                style={{
                  color: "#ef4444",
                  fontSize: "28px",
                  fontWeight: 600,
                  margin: 0,
                  letterSpacing: "0.5px",
                }}
              >
                {dummySubmissionResponseError.typeOffError}
              </h1>
              <div
                style={{
                  width: "auto",
                  margin: "10px",
                  marginTop: "0px",
                  borderRadius: "8px",
                  padding: "10px",
                  backgroundColor: "rgba(239, 68, 68, 0.15)",
                  color: "#ef4444",
                }}
              >
                {dummySubmissionResponseError.errorMessage?.map(
                  (message, index) => (
                    <p key={index}>{message}</p>
                  ),
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {showDescription === "isSubmitting" && (
        <div className="testresult-body-loading">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="skeleton-row" />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProblemDescription;
