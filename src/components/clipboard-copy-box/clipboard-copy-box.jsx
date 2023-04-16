import React, { useState } from "react";

import * as styles from "./clipboard-copy-box.module.css";

/** @typedef {{ state: "initial" }| { state: "success" } | { state: "error", error: unknown }} CopyState */

/** @type {React.FC<{ text: string  }>} */
export const ClipboardCopyBox = ({ text }) => {
  const [copyState, setCopyState] = useState(
    /** @type {CopyState} */ ({ state: "initial" })
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={text}
        readOnly
        onFocus={(event) => {
          event.target.select();
        }}
        className={styles.text}
      />

      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(text);
            setCopyState({ state: "success" });
          } catch (error) {
            setCopyState({ state: "error", error });
          } finally {
            setTimeout(() => {
              setCopyState({ state: "initial" });
            }, 5000);
          }
        }}
        className={styles.copyButton}
      >
        Kalender-URL kopieren
      </button>

      <div role="alert" className={styles.resultMessage}>
        {copyState.state === "success" ? (
          <>Kopiert!</>
        ) : (
          copyState.state === "error" && (
            <>
              Konnte nicht kopiert werden.{" "}
              <span lang="en">{String(copyState.error)}</span>
            </>
          )
        )}
      </div>
    </div>
  );
};
