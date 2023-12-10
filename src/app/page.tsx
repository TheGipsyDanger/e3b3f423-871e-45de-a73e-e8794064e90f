"use client";
import { GlobalWrapper } from "@/components/GlobalWrapper";
import { Align } from "@/components/Align";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <GlobalWrapper.Container>
        <GlobalWrapper.Content>
          <Align.Column></Align.Column>
          <Align.Row></Align.Row>
        </GlobalWrapper.Content>
      </GlobalWrapper.Container>
    </>
  );
}
