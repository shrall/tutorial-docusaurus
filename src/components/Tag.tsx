export default function Tag({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) {
  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: "4px",
        color: "#fff",
        padding: "0.2rem 0.5rem",
        fontWeight: "bold",
        width: "fit-content",
        display: "inline-block",
      }}
    >
      {children}
    </div>
  );
}
