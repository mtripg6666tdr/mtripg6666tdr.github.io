import React, { ReactElement, useEffect, useState } from "react";
import { WorksCard } from "./worksCard";

type Props = {}
export function WorksBox(props:Props) {
  const [lastUpdate, setLastUpdate] = useState<string>("取得中...");
  const [works, setWorks] = useState<Work[]>(null);
  const worksCards = [] as ReactElement[];
  const [prefix, setPrefix] = useState<URLPrefix>(null);

  useEffect(() => {
    window.fetch("/assets/works.json")
      .then(res => res.json())
      .then(({lastUpdate, works, urlPrefix}:WorkData) => {
        setLastUpdate(lastUpdate);
        setWorks(works);
        setPrefix(urlPrefix);
      })
  }, [])

  if(works != null && prefix != null){
    works.forEach(work => {
      worksCards.push(
        <WorksCard
          title={work.name}
          url={prefix[work.url.type] + work.url.url}
          imageUrl={prefix[work.image.type] + work.image.url}
          description={work.description}
          tag={work.tags} 
          key={work.name}
        />
      )
    })
  }

  return (
    <div className="works_box">
      <div className="search">
        <span>最終更新: {lastUpdate}</span>
      </div>
      <div className="works_container">
        {worksCards || "取得中..."}
      </div>
    </div>
  );
}

export interface WorkData {
  lastUpdate: string;
  urlPrefix: URLPrefix;
  works: Work[];
}

export interface URLPrefix {
  direct: string;
  github: string;
  ghogp: string;
}

export interface Work {
  name: string;
  url: UrlPointer;
  image: UrlPointer;
  description: string;
  tags: string[];
}

export interface UrlPointer {
  type: keyof URLPrefix;
  url: string;
}
