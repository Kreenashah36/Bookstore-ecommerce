import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="bg-slate-200 flex items-center justify-center text-4xl text-black h-[30rem]">
      Nice!
      <span>
        <Link href={"/"}> &nbsp; Back home</Link>
      </span>
    </div>
  );
}
