import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="font-bold tracking-tight text-4xl text-gray-900 sm:text-6xl">Your Marketplace for high-quality <span className="text-violet-600">digital assets</span>.</h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to DigitalHippo. Every asset on our platform is verified by our team to ensure the highest quality standards.</p>
      </div>
    </MaxWidthWrapper>
  )
}
