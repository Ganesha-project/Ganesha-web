// components/ArticleComponent/StatusFilter.tsx
"use client";

export const StatusFilter = ({ onStatusChange, currentStatus }) => {
  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "draft", label: "Draft" },
    { value: "publish", label: "Published" },
    { value: "archive", label: "Archived" }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {statusOptions.map((status) => (
        <button
          key={status.value}
          onClick={() => onStatusChange(status.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            currentStatus === status.value
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          {status.label}
        </button>
      ))}
    </div>
  );
};