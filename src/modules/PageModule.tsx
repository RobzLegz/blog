import { NextPage } from "next";
import Head from "next/head";
import React from "react";

interface PageModuleProps {
  title?: string;
  description: string;
}

const PageModule: NextPage<PageModuleProps> = ({ title, description }) => {
  return (
    <Head>
      <title>Roberts Legzdins{title && ` ${title}`}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageModule;
