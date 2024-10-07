import React from "react";

interface ArchiveLayoutProps {
  archive: React.ReactNode;
  latest: React.ReactNode;
}

const ArchiveLayoutPage = ({ archive, latest }: ArchiveLayoutProps) => {
  return (
    <div className="max-w-xl mx-auto bg-red-200">
      <div className="bg-blue-200 p-4">{archive}</div>
      <div className="bg-green-200 p-4">{latest}</div>
    </div>
  );
};

export default ArchiveLayoutPage;
