"use client";

import React from "react";
import * as Navigation from "next/navigation";

export default function Page() {
  const searchParam = Navigation.useSearchParams();
  const router = Navigation.useRouter();
  const ref = React.useRef<HTMLInputElement>(null!);

  function updateUrl(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    router.push(`?param=${ref.current?.value}`);
  }

  return (
    <form action="">
      <div>State: {searchParam?.get("param")}</div>
      <input type="text" ref={ref} />
      <button onClick={updateUrl}>Update</button>
    </form>
  );
}
