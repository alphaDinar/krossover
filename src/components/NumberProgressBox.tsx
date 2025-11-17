import {Progress} from "@nextui-org/progress";
import { FC } from "react";

type BoxProps = {
  label: string,
  val: number,
}
const NumberProgressBox: FC<BoxProps> = ({ label, val }) => {
  return (
    <Progress
      size="sm"
      radius="sm"
      classNames={{
        base: "max-w-md",
        track: "drop-shadow-md border border-default",
        indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
        label: "tracking-wider font-medium text-default-600",
        value: "text-foreground/60",
      }}
      label={label}
      value={val}
      showValueLabel={true}
    />
  );
}

export default NumberProgressBox;