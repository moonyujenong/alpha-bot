const RetDiv = (props: {
  unit?: "px" | "rem";
  horizontal?: "center" | "left" | "right" | "between" | "evenly";
  vertical?: "top" | "middle" | "bottom";
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  children?: any;
  style?: any;
}) => {
  const vertical =
    props.vertical === "top"
      ? "start"
      : props.vertical === "bottom"
        ? "end"
        : "center";
  const horizontal =
    props.horizontal === "between" || props.horizontal === "evenly"
      ? `space-${props.horizontal}`
      : props.horizontal;
  const unit = props.unit || "px";

  return (
    <div
      style={{
        display: "flex",
        alignItems: vertical,
        justifyContent: horizontal || "normal",
        marginTop: `${props.mt}${unit}`,
        marginBottom: `${props.mb}${unit}`,
        marginLeft: `${props.ml}${unit}`,
        marginRight: `${props.mr}${unit}`,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

export default RetDiv;
