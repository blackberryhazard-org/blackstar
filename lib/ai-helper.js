export function escapeHtml(text = "") {
  const s = text == null ? "" : String(text);
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function looksLikeCode(text = "") {
  const codePatterns = [
    /```/,
    /\bfunction\b/,
    /\bconst\b/,
    /\blet\b/,
    /\bvar\b/,
    /\bclass\b/,
    /=>/,
    /console\.log/,
    /<\/?[a-z][\s\S]*>/i,
  ];

  return codePatterns.some((r) => r.test(text));
}
