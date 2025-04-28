"use client";
// NOTE: 最終更新5年前だからか、上手く動かない
// https://github.com/streamich/react-use/blob/HEAD/docs/useHash.md
import { useEffect, useMemo } from "react";
import { useHash } from "react-use";

export const UseHashTest = () => {
  const [hash, setHash] = useHash();

  const hashValue = useMemo(() => hash, [hash]);

  useEffect(() => {
    setHash("#/path/to/page?userId=123");
  }, [setHash]);

  return (
    <div>
      <div>window.location.href</div>
      <div>
        <pre>{window.location.href}</pre>
      </div>
      <div>Edit hash:</div>
      <div>
        <input
          type="text"
          style={{ width: "100%" }}
          value={hashValue}
          onChange={(e) => setHash(e.target.value)}
        />
      </div>
    </div>
  );
};
