import tw from "tailwind-styled-components";

export default {
  Bg: tw.div`
    flex
    overflow-y-auto
    overflow-x-hidden
    fixed
    top-0
    right-0 
    left-0
    z-50
    justify-center
    items-center
    w-full
    md:inset-0
    h-[calc(100%-1rem)]
    max-h-full
  `,
  Container: tw.div`
    relative
    bg-white
    p-8
    w-full
    max-w-md
    max-h-full
    rounded-lg
  `,
};
