interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "column";
  justify?:
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "start" | "end" | "center" | "stretch" | "baseline";
  gap?: number;
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  maxWidth?: number;
  margin?: number | string;
}

export const Flex = ({
  children,
  className,
  direction = "row",
  justify = "start",
  align = "center",
  gap = 0,
  wrap = "nowrap",
  ...props
}: FlexProps) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        gap: gap,
        flexWrap: wrap,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
