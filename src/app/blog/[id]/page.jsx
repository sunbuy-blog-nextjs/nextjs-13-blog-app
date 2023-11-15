"use client";

import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import journey from "public/journey.jpg";
import useSWR from "swr";

const BlogPost = ({ params }) => {
  const fetcher = async (url) => {
    const res = await fetch(url);
    return await res.json();
  };

  const { data } = useSWR(`blogId`, () =>
    fetcher(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  );

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data?.title}</h1>
        </div>
        <div className={styles.imageContainer}>
          <Image src={journey} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data?.body}</p>
      </div>
    </div>
  );
};

export default BlogPost;
