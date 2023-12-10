"use client";
import { GlobalWrapper } from "@/components/GlobalWrapper";
import { Align } from "@/components/Align";

export default function Home() {
  return (
    <GlobalWrapper.Container>
      <GlobalWrapper.Content>
        <Align.Column></Align.Column>
        <Align.Row></Align.Row>
      </GlobalWrapper.Content>
    </GlobalWrapper.Container>
  );
}
