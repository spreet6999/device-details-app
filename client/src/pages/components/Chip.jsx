import React from "react";

function Chip({ variant = "success", label = "Online" }) {
  switch (variant) {
    case "success":
      return (
        <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-700 rounded-md select-none whitespace-nowrap">
          <div class="absolute w-4 h-4 top-2/3 left-1 -translate-y-2/3">
            <span class="mx-auto mt-1 block h-1.5 w-1.5 rounded-full bg-green-700 content-['']"></span>
          </div>
          <span class="ml-4">{label ?? "Online"}</span>
        </div>
      );

    case "danger":
      return (
        <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-red-700 rounded-md select-none whitespace-nowrap">
          <div class="absolute w-4 h-4 top-2/3 left-1 -translate-y-2/3">
            <span class="mx-auto mt-1 block h-1.5 w-1.5 rounded-full bg-red-700 content-['']"></span>
          </div>
          <span class="ml-4">{label ?? "Danger"}</span>
        </div>
      );

    case "warning":
      return (
        <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-yellow-700 rounded-md select-none whitespace-nowrap">
          <div class="absolute w-4 h-4 top-2/3 left-1 -translate-y-2/3">
            <span class="mx-auto mt-1 block h-1.5 w-1.5 rounded-full bg-yellow-700 content-['']"></span>
          </div>
          <span class="ml-4">{label ?? "Warning"}</span>
        </div>
      );

    case "info":
      return (
        <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-light-blue-700 rounded-md select-none whitespace-nowrap">
          <div class="absolute w-4 h-4 top-2/3 left-1 -translate-y-2/3">
            <span class="mx-auto mt-1 block h-1.5 w-1.5 rounded-full bg-light-blue-700 content-['']"></span>
          </div>
          <span class="ml-4">{label ?? "Info"}</span>
        </div>
      );

    case "primary":
      return (
        <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-purple-700 rounded-md select-none whitespace-nowrap">
          <div class="absolute w-4 h-4 top-2/3 left-1 -translate-y-2/3">
            <span class="mx-auto mt-1 block h-1.5 w-1.5 rounded-full bg-purple-700 content-['']"></span>
          </div>
          <span class="ml-4">{label ?? "Primary"}</span>
        </div>
      );

    case "secondary":
      return (
        <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-gray-700 rounded-md select-none whitespace-nowrap">
          <div class="absolute w-4 h-4 top-2/3 left-1 -translate-y-2/3">
            <span class="mx-auto mt-1 block h-1.5 w-1.5 rounded-full bg-gray-700 content-['']"></span>
          </div>
          <span class="ml-4">{label ?? "Secondary"}</span>
        </div>
      );

    case "light":
      return (
        <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-gray-700 rounded-md select-none whitespace-nowrap">
          <div class="absolute w-4 h-4 top-2/3 left-1 -translate-y-2/3">
            <span class="mx-auto mt-1 block h-1.5 w-1.5 rounded-full bg-gray-700 content-['']"></span>
          </div>
          <span class="ml-4">{label ?? "Light"}</span>
        </div>
      );

    default:
      break;
  }
}

export default Chip;
