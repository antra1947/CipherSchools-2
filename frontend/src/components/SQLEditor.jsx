import Editor from "@monaco-editor/react";

export default function SQLEditor({ query, setQuery }) {
  return (
    <Editor
      height="200px"
      language="sql"
      value={query}
      onChange={(value) => setQuery(value)}
    />
  );
}
