import { memo } from "react";

const RenderIcon = memo(({ icon }: { icon: JSX.Element }) => {
  return <div className="flex items-center justify-center h-full">{icon}</div>;
});

export default RenderIcon;
