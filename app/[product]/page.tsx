"use client";

const page: React.FC<{ params: any }> = ({ params }) => {
  return <>Hello from {params.product}</>;
};

export default page;
