import { Button as ShadButton } from "@/components/ui/button";

export function Button({ children, ...props }: any) {
  return (
    <ShadButton {...props}>
      {children}
    </ShadButton>
  );
}
